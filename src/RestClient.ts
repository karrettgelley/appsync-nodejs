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

/**
* HTTP Client for REST requests. Send and receive JSON data.
* Sign request with AWS credentials if available
* Usage:
<pre>
const restClient = new RestClient();
restClient.get('...')
    .then(function(data) {
        console.log(data);
    })
    .catch(err => console.log(err));
</pre>
*/
export class RestClient {
  /**
   * @param {RestClientOptions} [options] - Instance options
   */
  constructor() {}

  /**
   * Basic HTTP request. Customizable
   * @param {string} url - Full request URL
   * @param {string} method - Request HTTP method
   * @param {json} [init] - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  async ajax(url: string, method: string, req: AWS.HttpRequest) {
    const { host, path } = this._parseUrl(url);
    req.headers.host = host;
    req.headers.path = path;
    req.method = method;

    if (req.body) {
      req.headers['Content-Type'] = 'application/json; charset=UTF-8';
    }

    // Do not sign the request if client has added 'Authorization' header,
    // which means custom authorizer.
    if (typeof req.headers['Authorization'] == 'undefined') {
      // @ts-ignore
      const signer = new AWS.Signers.V4(req, 'appsync', true);
      // @ts-ignore
      signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }

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

  /**
   * GET HTTP request
   * @param {string} url - Full request URL
   * @param {JSON} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  get(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'GET', init);
  }

  /**
   * PUT HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  put(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'PUT', init);
  }

  /**
   * PATCH HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  patch(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'PATCH', init);
  }

  /**
   * POST HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  post(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'POST', init);
  }

  /**
   * DELETE HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  del(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'DELETE', init);
  }

  /**
   * HEAD HTTP request
   * @param {string} url - Full request URL
   * @param {json} init - Request extra params
   * @return {Promise} - A promise that resolves to an object with response status and JSON data, if successful.
   */
  head(url: string, init: AWS.HttpRequest): Promise<any> {
    return this.ajax(url, 'HEAD', init);
  }

  private _parseUrl(url: string) {
    const parts = url.split('/');

    return {
      host: parts[2],
      path: '/' + parts.slice(3).join('/'),
    };
  }
}
