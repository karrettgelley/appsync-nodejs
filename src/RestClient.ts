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

import https from 'https';
import http from 'http';
import AWS, { Endpoint, HttpRequest } from 'aws-sdk';
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
      const creds = this._getCreds(params);
      libraryHeaders = { ...libraryHeaders, ...creds.headers };
      // params.headers = creds.headers;
      // params.data = creds.body;
    }

    params.headers = {
      ...libraryHeaders,
    };
    console.log('fuckshitdick', params);
    return this._request(params);
    // return new Promise((resolve, reject) => {
    //   const httpRequest = https.request(
    //     { ...req, host },
    //     (result: http.IncomingMessage) => {
    //       let dataString = '';
    //       result.on('data', (data) => {
    //         dataString += data.toString();
    //       });
    //       result.on('end', function () {
    //         resolve(JSON.parse(dataString));
    //       });
    //       result.on('error', (e) => {
    //         reject(e);
    //       });
    //     },
    //   );
    //   httpRequest.on('error', (e) => {
    //     reject(e);
    //   });
    //   httpRequest.write(req.body);
    //   httpRequest.end();
    // });

    // return this._request(url, req);
  }

  private _getCreds(init: AxiosRequestConfig) {
    if (!this._config) {
      throw new Error('RestClient was not properly configured: null config');
    }

    const { aws_appsync_region: region } = this._config;
    if (!region) {
      throw new Error('RestClient was not properly configured: missing region');
    }

    let req = new AWS.HttpRequest(new Endpoint(init.url!), region);

    const { host, path } = this._parseUrl(init.url!);
    req.headers.host = host;
    req.headers.path = path;

    if (init.data) {
      req.headers['Content-Type'] = 'application/json; charset=UTF-8';
      req.body = init.data;
    }

    // @ts-ignore
    const signer = new AWS.Signers.V4(req, 'appsync', true);
    // @ts-ignore
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

    return req;
  }

  private _request(params: AxiosRequestConfig) {
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
