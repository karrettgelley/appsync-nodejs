import { APIConfig, GraphQLOptions, GraphQLResult } from './types';
import { GraphQLAPIClass } from './GraphQLAPI';

/**
 * Use RestApi or GraphQLAPI to reduce your application bundle size
 * Export Cloud Logic APIs
 */
export class APIClass {
  /**
   * Initialize API with AWS configuration
   * @param {Object} options - Configuration object for API
   */
  private _config: APIConfig | null | undefined = null;
  private _graphqlApi: GraphQLAPIClass | null = null;

  constructor() {
    this._graphqlApi = new GraphQLAPIClass();
  }

  /**
   * Configure API part with aws configurations
   * @param {Object} config - Configuration of the API
   * @return {Object} - The current configuration
   */
  configure(config: APIConfig): void {
    if (!this._graphqlApi) {
      throw new Error('Missing instance of GraphQLAPI');
    }
    this._config = config;
    this._graphqlApi.configure(config);
  }

  /**
   * Executes a GraphQL operation
   *
   * @param {GraphQLOptions} GraphQL Options
   * @param {object} additionalHeaders headers to merge in after any `graphql_headers` set in the config
   * @returns {Promise<GraphQLResult> | Observable<object>}
   */
  graphql(options: GraphQLOptions): Promise<GraphQLResult> {
    if (!this._graphqlApi) {
      throw new Error('Missing instance of GraphQLAPI');
    }
    return this._graphqlApi.graphql(options);
  }
}

const API = new APIClass();

export default API;
