import { ConfigOptions, GraphQLOptions, GraphQLResult } from './types';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { parse } from 'graphql/language/parser';
import { OperationDefinitionNode } from 'graphql/language';
import { URL } from 'url';
import AWS, { Endpoint } from 'aws-sdk';
import https from 'https';

/**
 * Use RestApi or GraphQLAPI to reduce your application bundle size
 * Export Cloud Logic APIs
 */
export class APIClass {
  /**
   * Initialize API with AWS configuration
   * @param {Object} options - Configuration object for API
   */
  private _options: ConfigOptions | null | undefined = null;

  constructor() {}

  /**
   * Configure API part with aws configurations
   * @param {Object} config - Configuration of the API
   * @return {Object} - The current configuration
   */
  configure(options: ConfigOptions): void {
    this._options = options;
  }

  /**
   * Executes a GraphQL operation
   *
   * @param {GraphQLOptions} GraphQL Options
   * @param {object} additionalHeaders headers to merge in after any `graphql_headers` set in the config
   * @returns {Promise<GraphQLResult> | Observable<object>}
   */
  graphql({ query, variables = {} }: GraphQLOptions): Promise<GraphQLResult> {
    const parsedQuery = parse(query);

    const [operationDef = {}] = parsedQuery.definitions.filter(
      (def) => def.kind === 'OperationDefinition',
    );
    const {
      operation: operationType,
    } = operationDef as OperationDefinitionNode;

    switch (operationType) {
      case 'query':
      case 'mutation':
        return this._graphql({ query, variables });
    }

    throw new Error(`invalid operation type: ${operationType}`);
  }

  /**
   * Executes a GraphQL operation
   *
   * @param {GraphQLOptions} GraphQL Options
   * @returns {Promise<GraphQLResult>
   */
  private async _graphql({
    query,
    variables,
  }: GraphQLOptions): Promise<GraphQLResult> {
    if (!this._options) {
      throw new Error('API has not been configured');
    }

    const {
      aws_appsync_graphqlEndpoint: appSyncGraphqlEndpoint,
      aws_appsync_region: region,
      aws_appsync_apiKey: apiKey,
    } = this._options;

    if (!appSyncGraphqlEndpoint) {
      const error = new GraphQLError('No graphql endpoint provided.');

      throw {
        data: {},
        errors: [error],
      };
    }

    const host = new URL(appSyncGraphqlEndpoint).hostname.toString();

    const req = new AWS.HttpRequest(
      new Endpoint(appSyncGraphqlEndpoint),
      region,
    );
    req.body = JSON.stringify({
      query,
      variables,
    });
    req.method = 'POST';
    req.headers.host = host;
    req.headers['Content-Type'] = 'application/json';

    if (apiKey) {
      req.headers['x-api-key'] = apiKey;
    } else {
      // @ts-ignore
      const signer = new AWS.Signers.V4(req, 'appsync', true);
      // @ts-ignore
      signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }

    let response: GraphQLResult;
    try {
      response = await this._request(req, host);
    } catch (err) {
      response = {
        data: {},
        errors: [new GraphQLError(err.message)],
      };
    }

    const { errors } = response;

    if (errors && errors.length) {
      throw response;
    }

    return response;
  }

  /** private methods **/

  /**
   * Sends an https request and returns response
   * @param req Complete http request
   * @param host the host name of the request endpoint
   */
  private async _request(
    req: AWS.HttpRequest,
    host: string,
  ): Promise<GraphQLResult> {
    return new Promise((resolve, reject) => {
      const httpRequest = https.request({ ...req, host }, (result) => {
        let dataString = '';
        result.on('data', (data) => {
          dataString += data.toString();
        });
        result.on('end', function () {
          resolve(JSON.parse(dataString));
        });
        result.on('error', (e) => {
          reject(e);
        });
      });
      httpRequest.on('error', (e) => {
        reject(e);
      });
      httpRequest.write(req.body);
      httpRequest.end();
    });
  }
}

const API = new APIClass();

export default API;
