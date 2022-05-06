# appsync-nodejs

[![NPM version](https://img.shields.io/npm/v/appsync-nodejs.svg)](https://www.npmjs.com/package/appsync-nodejs)
[![NPM downloads](https://img.shields.io/npm/dm/appsync-nodejs.svg)](https://www.npmjs.com/package/appsync-nodejs)

[![install size](https://packagephobia.now.sh/badge?p=appsync-nodejs)](https://packagephobia.now.sh/result?p=appsync-nodejs)
[![npm downloads](https://img.shields.io/npm/dm/appsync-nodejs.svg?style=flat-square)](http://npm-stat.com/charts.html?package=appsync-nodejs)

A GraphQL client for interacting with an AWS AppSync api from a Lambda function (nodejs)

## Background

Interacting with AppSync inside of a Lambda function is painful. If you've ever followed
the official documentation for (accessing an AppSync api from a Lambda)[https://docs.amplify.aws/cli/function/#graphql-from-lambda], then you know that using nodejs's native 'http' package is [extremely difficult](https://github.com/aws-amplify/amplify-cli/issues/3302). The aws-sdk package is not of much use either since it does not provide first class support for Amplify-generated AppSync resources. This package makes querying and mutating your AppSync api as easy as it is on the frontend. In fact, the syntax for using this library is nearly identical to that of the frontend package ([@aws-amplify/api](https://docs.amplify.aws/lib/graphqlapi/query-data/q/platform/js/#query-declarations))

## Usage and Getting Started

First you'll need to configure the GraphQL client [in the same way that you would on the frontend](https://docs.amplify.aws/start/getting-started/setup/q/integration/react/#set-up-frontend)

```typescript
import API from "appsync-nodejs";

const appSyncUrl = process.env.API_YOURAPPSYNCAPI_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const apiKey = process.env.API_YOURAPPSYNCAPI_GRAPHQLAPIKEYOUTPUT;

API.configure({
  aws_appsync_graphqlEndpoint: appSyncUrl,
  aws_appsync_region: region,
  aws_appsync_apiKey: apiKey,
});
```

Next you'll just need to make a query/mutation:

```typescript
import API, { GraphQLResult } from "appsync-nodejs";
import { aQuery } from "./path/to/my/graphql";
import {
  DealerBySubdomainQuery,
  DealerBySubdomainQueryVariables,
} from "./path/to/my/api/types";

export default async function get() {
  const qv: DealerBySubdomainQueryVariables = {
    aQueryParameter,
  };

  const response = (await API.graphql({
    query: aQuery,
    variables: qv,
  })) as GraphQLResult<DealerBySubdomainQuery>;
}
```

## Usage with TypeScript

appsync-nodejs bundles TypeScript definition files for use in TypeScript projects and to support tools that can read `.d.ts` files. My goal is to keep these TypeScript definition files updated with each release for any public api

## Opening Issues

If you encounter a bug with appsync-nodejs I'd love to hear about it. Search the [existing issues](https://github.com/karrettgelley/appsync-nodejs/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the appsync-nodejs, Node.js and OS you’re using. Please include a stack trace and reduced repro case when appropriate, too
