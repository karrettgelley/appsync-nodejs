import { PartialHttpRequest, RestClientConfig } from './types';
export declare class RestClient {
    private _config;
    /**
     * @param {RestClientOptions} [options] - Instance options
     */
    constructor();
    /**
     * Configure API part with aws configurations
     * @param {Object} config - Configuration of the API
     * @return {Object} - The current configuration
     */
    configure(config: RestClientConfig): void;
    /**
     * GET HTTP request
     * @param {string} url - Full request URL
     * @param {JSON} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    get(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * PUT HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    put(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * PATCH HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    patch(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * POST HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    post(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * DELETE HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    del(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * HEAD HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    head(url: string, init: PartialHttpRequest): Promise<any>;
    /**
     * Basic HTTP request. Customizable
     * @param {string} url - Full request URL
     * @param {string} method - Request HTTP method
     * @param {json} [init] - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    private _ajax;
    /**
     * Returns the authorization headers necessary to make a
     * request to AppSync.
     * @param url rest endpoint
     * @param init a partially constructed http request (headers/body only)
     */
    private _getCreds;
    private _request;
    private _parseUrl;
}
