import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphql from 'graphql';
import _ from 'lodash'
const buildSchema = graphql.buildSchema;

/**
 * Users { name, job, ~company, ~friends }
 * Companies { name, type }
 * Friends { name1, name2 }
 */

const mockDataMem = {
  Users: {
    UserA: { name: 'UserA', job: 'RD',  company: 'CompanyA' },
    UserB: { name: 'UserB', job: 'RD',  company: 'CompanyA' },
    UserC: { name: 'UserC', job: 'Sales',  company: 'CompanyB' },
    UserD: { name: 'UserD', job: 'Sales',  company: 'CompanyB' }
  },
  Companies: {
    CompanyA:  { name: 'CompanyA', field: 'IT'} ,
    CompanyB:  { name: 'CompanyB', field: 'Consulting'}
  },
  Friends: {
    UserA: ['UserB'],
    UserB: ['UserC', 'UserD']
  }
}


var schema = buildSchema(`
  type Query {
    user(name: String!): User
    users: [User]
    companies: [Company]
    hello: String
  }
  type User {
    name: String
    job: String
    company: Company
    friends: [User]
  }
  type Company {
    name: String
    field: String
  }
`);

const _getFriends = (name) => {
  let ret = [];
  if ( mockDataMem.Friends[name] ) {
    ret = mockDataMem.Friends[name].map( _name => {
      return mockDataMem.Users[_name]
    })
  }
  return ret;
}

const root = { 
  hello: () => 'Hello World!' ,
  users: () => {
    const dupData = _.cloneDeep(Object.values(mockDataMem.Users) || []); 
    return dupData.map( item => {
      item.company = mockDataMem.Companies[item.company] || null;
      item.friends = _getFriends(item.name)   
      return item;
    })
  },
  user: (params) => {
    const ret = _.cloneDeep(mockDataMem.Users[params && params.name] || {} ); 
    ret.company = mockDataMem.Companies[ret.company] || null;
    ret.friends = _getFriends(params.name)    
    return ret;
  },
  companies: () => {
    return Object.values(mockDataMem.Companies)
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Now browse to localhost:4000/graphql')
  }
});