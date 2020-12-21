/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import AWS, { Endpoint } from 'aws-sdk';
import { PartialHttpRequest, RestClientConfig } from './types';
import axios, { AxiosRequestConfig, Method } from 'axios';
export class RestClient {
  private _config: RestClientConfig | null = null;
  /**
   * @param {RestClientOptions} [options] - Instance options
   */
  constructor() {}

  /**
   * Configure API part with aws configurations
   * @param {Object} config - Configuration of the API
   * @return {Object} - The current configuration
   */
  configure(config: RestClientConfig): void {
    this._config = config;
  }

  /**
   * GET HTTP request
   * @param {string} url - Full request URL
   * @param {JSON} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  get(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'GET', init);
  }

  /**
   * PUT HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  put(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'PUT', init);
  }

  /**
   * PATCH HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  patch(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'PATCH', init);
  }

  /**
   * POST HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  post(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'POST', init);
  }

  /**
   * DELETE HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  del(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'DELETE', init);
  }

  /**
   * HEAD HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  head(url: string, init: PartialHttpRequest): Promise<any> {
    return this._ajax(url, 'HEAD', init);
  }

  /**
   * Basic HTTP request. Customizable
   * @param {string} url - Full request URL
   * @param {string} method - Request HTTP method
   * @param {json} [init] - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  private async _ajax(url: string, method: Method, init: PartialHttpRequest) {
    if (!this._config) {
      throw new Error('RestClient was not properly configured: null config');
    }

    const { aws_appsync_region: region } = this._config;
    if (!region) {
      throw new Error('RestClient was not properly configured: missing region');
    }

    let params: AxiosRequestConfig = {
      method,
      url,
      headers: {},
      data: null,
      responseType: 'json',
      timeout: 0,
    };

    let libraryHeaders: any = {};

    const { host, path } = this._parseUrl(url);
    libraryHeaders.host = host;
    libraryHeaders.path = path;

    if (init.body) {
      libraryHeaders['Content-Type'] = 'application/json; charset=UTF-8';
      params.data = JSON.stringify(init.body);
    }

    // Do not sign the request if client has added 'Authorization' header,
    // which means custom authorizer.
    if (typeof init.headers['Authorization'] == 'undefined') {
      const creds = this._getCreds(url, init);
      libraryHeaders = { ...libraryHeaders, ...creds };
    }

    params.headers = {
      ...libraryHeaders,
      ...init.headers,
    };

    return this._request(params);
  }

  /**
   * Returns the authorization headers necessary to make a
   * request to AppSync.
   * @param url rest endpoint
   * @param init a partially constructed http request (headers/body only)
   */
  private _getCreds(url: string, init: PartialHttpRequest) {
    if (!this._config) {
      throw new Error('RestClient was not properly configured: null config');
    }

    const { aws_appsync_region: region } = this._config;
    if (!region) {
      throw new Error('RestClient was not properly configured: missing region');
    }

    let req = new AWS.HttpRequest(new Endpoint(url), region);

    const { host, path } = this._parseUrl(url);
    req.headers.host = host;
    req.headers.path = path;

    if (init.body) {
      req.body = JSON.stringify(init.body);
    }

    // @ts-ignore
    const signer = new AWS.Signers.V4(req, 'appsync', true);
    // @ts-ignore
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

    return req.headers;
  }

  private _request(params: AxiosRequestConfig) {
    console.log('params', params);
    return axios(params)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  private _parseUrl(url: string) {
    const parts = url.split('/');

    return {
      host: parts[2],
      path: '/' + parts.slice(3).join('/'),
    };
  }
}
