const users = [
  {
    id: '0',
    name: 'jongchan',
    age: 29
  },
  {
    id: '1',
    name: 'taewoong',
    age: 28,
  }
]

export const userResolver = {
  Query: {
    user(_, args, context, info) {
      return users[args.id]
    },
    userList(_) {
      return {
        users,
      }
    }
  }
}