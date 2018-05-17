var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    project(name: String): Project
  }

  type Project {
    name: String!
    tagline: String
    contributors: [String]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  project: ({name}) => {
    return {
      name: 'Project Resistance',
      tagline: 'May the force be with you.',
      contributors: ['Luke Skywalker', 'Laya Skywalker', 'Han Solo']
    };
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(
  schema,
  "{project(name: \"Project Resistance\") {contributors}}",
  root)
.then((response) => {
  console.log(response.data);
});
