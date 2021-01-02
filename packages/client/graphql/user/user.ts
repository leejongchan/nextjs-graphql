import {gql} from '@apollo/client'

export const GET_USER = gql`
  query getUser($id: ID!, $name: String!, $age: Int!) {
    user(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`
