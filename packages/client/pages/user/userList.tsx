import {useQuery} from "@apollo/client"
import Link from 'next/link'
import {GET_USER_LIST} from "../../graphql/user/user"

const UserList = () => {
  const { data, loading, fetchMore } = useQuery(GET_USER_LIST);

  return (
      <>
        <ul>
          {data && data.userList.users.map(user => (
              <li key={user.id}>
                <Link href={`/user/${user.id}`}>
                  <a>{user.id}</a>
                </Link>
              </li>
          ))}
        </ul>
      </>
  )
}

export default UserList