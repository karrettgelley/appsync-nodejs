import AWS from 'aws-sdk';
export declare class RestClient {
    /**
     * @param {RestClientOptions} [options] - Instance options
     */
    constructor();
    /**
     * GET HTTP request
     * @param {string} url - Full request URL
     * @param {JSON} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    get(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * PUT HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    put(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * PATCH HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    patch(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * POST HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    post(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * DELETE HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    del(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * HEAD HTTP request
     * @param {string} url - Full request URL
     * @param {json} init - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    head(url: string, init: AWS.HttpRequest): Promise<any>;
    /**
     * Basic HTTP request. Customizable
     * @param {string} url - Full request URL
     * @param {string} method - Request HTTP method
     * @param {json} [init] - Request extra params
     * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
     */
    private _ajax;
    private _parseUrl;
}
