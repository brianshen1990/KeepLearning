import graphql from 'graphql';

var schema = graphql.buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { 
  hello: () => 'Hello World!'
};

graphql.graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});