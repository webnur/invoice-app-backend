import express from 'express'
import { UserRoutes } from '../modules/users/user.route'

const router = express.Router()

const modulesRoute = [
  {
    path: '/users',
    element: UserRoutes,
  },
]

modulesRoute.forEach(route => router.use(route.path, route.element))
export default router
