import {useQuery} from "@apollo/client";
import {GET_USER_LIST} from "../../graphql/user/user";

const UserList = () => {
  const { data, loading, fetchMore } = useQuery(GET_USER_LIST);

  return (
      <>
        <ul>
          {data && data.userList.users.map(user => (
              <li key={user.id}>{user.id}</li>
          ))}
        </ul>
      </>
  )
}

export default UserList