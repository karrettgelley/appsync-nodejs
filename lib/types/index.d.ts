export interface APIConfig {
    aws_appsync_region: string;
    aws_appsync_graphqlEndpoint: string;
    aws_appsync_apiKey?: string;
    aws_appsync_authenticationType?: GRAPHQL_AUTH_MODE;
}
export interface GraphQLAPIConfig {
    aws_appsync_region: string;
    aws_appsync_graphqlEndpoint: string;
    aws_appsync_apiKey?: string;
    aws_appsync_authenticationType?: GRAPHQL_AUTH_MODE;
}
export interface RestClientConfig {
    aws_appsync_region: string;
}
export interface GraphQLOptions {
    query: string;
    variables?: object;
}
export declare enum GRAPHQL_AUTH_MODE {
    API_KEY = "API_KEY",
    AWS_IAM = "AWS_IAM",
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS"
}
export interface GraphQLResult<T = object> {
    data?: T;
    errors?: [object];
    extensions?: {
        [key: string]: any;
    };
}
export interface PartialHttpRequest {
    body: {
        [key: string]: any;
    };
    headers: {
        [key: string]: any;
    };
}
