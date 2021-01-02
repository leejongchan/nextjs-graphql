import React from 'react'
import {useQuery} from '@apollo/client'
import {GET_USER} from "../../graphql/user/user";

const User = () => {
  const { data, loading, fetchMore } = useQuery(GET_USER, {
    variables: {
      id: 'id',
      name: 'jongchan lee',
      age: 29
    }
  })

  return (
      <div>
        <span>{data?.user.id}</span><br/>
        <span>{data?.user.name}</span><br/>
        <span>{data?.user.age}</span><br/>
      </div>
  )
}

export default User