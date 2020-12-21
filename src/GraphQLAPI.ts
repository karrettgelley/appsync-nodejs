/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
import { GraphQLError } from 'graphql/error/GraphQLError';
import { OperationDefinitionNode } from 'graphql/language';
import { parse } from 'graphql/language/parser';
import {
  GraphQLAPIConfig,
  GraphQLOptions,
  GraphQLResult,
  PartialHttpRequest,
} from './types';
import AWS, { Endpoint } from 'aws-sdk';
import { RestClient } from './RestClient';

export const graphqlOperation = (query: string, variables = {}) => ({
  query,
  variables,
});

/**
 * Export Cloud Logic APIs
 */
export class GraphQLAPIClass {
  /**
   * @private
   */
  private _config: GraphQLAPIConfig | null = null;
  private _restClient: RestClient | null = null;

  /**
   * Initialize GraphQL API with AWS configuration
   * @param {Object} options - Configuration object for API
   */
  constructor() {
    this._restClient = new RestClient();
  }

  /**
   * Configure API part with aws configurations
   * @param {Object} config - Configuration of the API
   * @return {Object} - The current configuration
   */
  configure(config: GraphQLAPIConfig): void {
    this._config = config;
    this._restClient?.configure(config);
  }

  /**
   * Executes a GraphQL operation
   *
   * @param {GraphQLOptions} GraphQL Options
   * @param {object} additionalHeaders headers to merge in after any `graphql_headers` set in the config
   * @return {Promise<GraphQLResult>}
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
   * @return {Promise<GraphQLResult>}
   */
  private async _graphql({
    query,
    variables,
  }: GraphQLOptions): Promise<GraphQLResult> {
    if (!this._config) {
      throw new Error('API has not been configured');
    }

    if (!this._restClient) {
      throw new Error('Rest Client was not properly configured');
    }

    const {
      aws_appsync_graphqlEndpoint: appSyncGraphqlEndpoint,
      aws_appsync_region: region,
      aws_appsync_apiKey: apiKey,
    } = this._config;

    if (!appSyncGraphqlEndpoint) {
      const error = new GraphQLError('No graphql endpoint provided.');

      throw {
        data: {},
        errors: [error],
      };
    }

    let init: PartialHttpRequest = { body: {}, headers: {} };
    init.body = {
      query,
      variables,
    };

    if (apiKey) {
      init.headers['x-api-key'] = apiKey;
    }

    let response: GraphQLResult;
    try {
      response = await this._restClient.post(appSyncGraphqlEndpoint, init);
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
}
