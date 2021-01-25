export const userResolver = {
  Query: {
    user(_, args, context, info) {
      return {
        id: args.id,
        name: args.name,
        age: args.age
      }
    },
    userList(_) {
      return {
        users: [
          {
            id: '1',
            name: 'jongchan',
            age: 29
          },
          {
            id: '2',
            name: 'taewoong',
            age: 28,
          }
        ]
      }
    }
  }
}