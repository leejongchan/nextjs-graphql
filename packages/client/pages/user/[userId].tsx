import { useRouter } from 'next/router'
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../graphql/user/user";
import React from "react";

const UserDetail = () => {
  const router = useRouter()
  const { userId } = router.query
  const { data } = useQuery(GET_USER, {
    variables: {
      id: userId,
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

export default UserDetail;