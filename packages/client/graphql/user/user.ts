import {gql} from '@apollo/client'

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      age
    }
  }
`

export const GET_USER_LIST = gql`
  query getUserList {
    userList {
      users {
        id
        name
        age
      }
    }
  }
`
