import API from '../../lib';

const endpoint = '';
if (!endpoint) {
  console.error(
    'you need to hard code an endpoint in the test file __tests__/test.ts',
  );
}

const region = 'us-west-2';

const createError = /* GraphQL */ `
  mutation CreateError(
    $input: CreateErrorInput!
    $condition: ModelErrorConditionInput
  ) {
    createError(input: $input, condition: $condition) {
      id
      message
      fileName
      lineNumber
      frontend
      createdAt
      updatedAt
    }
  }
`;

API.configure({
  aws_appsync_region: region,
  aws_appsync_graphqlEndpoint: endpoint,
  // aws_appsync_apiKey: '3gb5h5c48lrs2vlshgpdqclgul',
  // aws_appsync_authenticationType: GRAPHQL_AUTH_MODE.API_KEY,
});

async function shit() {
  try {
    const mv = {
      input: {
        frontend: 'react',
        message: 'yeeee',
        lineNumber: '20',
        fileName: 'test.ts',
      },
    };
    const res = await API.graphql({ query: createError, variables: mv });
    console.log('SUCCESS!', res);
  } catch (e) {
    console.error('error', e);
  }
}

shit();
