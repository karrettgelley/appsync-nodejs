import { APIConfig, GraphQLOptions, GraphQLResult } from './types';
/**
 * Use RestApi or GraphQLAPI to reduce your application bundle size
 * Export Cloud Logic APIs
 */
export declare class APIClass {
    /**
     * Initialize API with AWS configuration
     * @param {Object} options - Configuration object for API
     */
    private _config;
    private _graphqlApi;
    constructor();
    /**
     * Configure API part with aws configurations
     * @param {Object} config - Configuration of the API
     * @return {Object} - The current configuration
     */
    configure(config: APIConfig): void;
    /**
     * Executes a GraphQL operation
     *
     * @param {GraphQLOptions} GraphQL Options
     * @param {object} additionalHeaders headers to merge in after any `graphql_headers` set in the config
     * @returns {Promise<GraphQLResult> | Observable<object>}
     */
    graphql(options: GraphQLOptions): Promise<GraphQLResult>;
}
declare const API: APIClass;
export default API;
