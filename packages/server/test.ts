import { createTestClient } from 'apollo-server-testing'
import ApolloServer from './graphql/apolloServer'
import {test} from "@jest/globals";
import {gql} from "@apollo/client";

const { query } = createTestClient(ApolloServer);

test('user test', async () => {
  const GET_USER = gql`
    query getUser($id: ID!, $name: String!, $age: Int!) {
      user (id: $id, name: $name, age: $age) {
        id
        name
        age
      }
    }
  `

  const result = await query({
    query: GET_USER,
    variables: { id: 'id', name: 'jongchan lee', age:29 }
  })

  expect(result.data.user).toEqual({ id: 'id', name: 'jongchan lee', age:29 })
})