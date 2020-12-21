import { GraphQLAPIConfig, GraphQLOptions, GraphQLResult } from './types';
export declare const graphqlOperation: (query: string, variables?: {}) => {
    query: string;
    variables: {};
};
/**
 * Export Cloud Logic APIs
 */
export declare class GraphQLAPIClass {
    /**
     * @private
     */
    private _config;
    private _restClient;
    /**
     * Initialize GraphQL API with AWS configuration
     * @param {Object} options - Configuration object for API
     */
    constructor();
    /**
     * Configure API part with aws configurations
     * @param {Object} config - Configuration of the API
     * @return {Object} - The current configuration
     */
    configure(config: GraphQLAPIConfig): void;
    /**
     * Executes a GraphQL operation
     *
     * @param {GraphQLOptions} GraphQL Options
     * @param {object} additionalHeaders headers to merge in after any `graphql_headers` set in the config
     * @return {Promise<GraphQLResult>}
     */
    graphql({ query, variables }: GraphQLOptions): Promise<GraphQLResult>;
    /**
     * Executes a GraphQL operation
     *
     * @param {GraphQLOptions} GraphQL Options
     * @return {Promise<GraphQLResult>}
     */
    private _graphql;
}
