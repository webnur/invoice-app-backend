import { User } from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0')

  // increment by 1
  const incrementedId = (parseInt(currentUserId) + 1)
    .toString()
    .padStart(5, '0')
  return incrementedId
}

// export const lastUserId = async () => {
//   const lastUser = await User.findOne({}, { id: 1, _id: 0 })
//     .sort({
//       createAt: -1,
//     })
//     .lean()
//   return lastUser?.id
// }

// export const getUserId = async () => {
//   const currentId = (await lastUserId()) || (0).toString().padStart(5, '0')

//   const incrementedId = (currentId + 1).toString().padStart(5, '0')
//   return incrementedId
// }
