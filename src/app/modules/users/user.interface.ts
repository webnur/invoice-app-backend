// 1. Create an interface representing a document in MongoDB.
type IUser = {
  id: string
  name: string
  email: string
  password: string
  avatar?: string
}

export default IUser
