import React from "react";
import Link from 'next/link'

const Index = () => {
  return (
      <ul>
        <li>
          <Link href="/user/userList">
            <a>UserList</a>
          </Link>
        </li>
        <li>
          <Link href="/user/user">
            <a>User</a>
          </Link>
        </li>
      </ul>
  )
}

export default Index