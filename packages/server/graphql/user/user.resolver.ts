export const userResolver = {
  Query: {
    user(_, args, context, info) {
      return {
        id: args.id,
        name: args.name,
        age: args.age
      }
    }
  }
}