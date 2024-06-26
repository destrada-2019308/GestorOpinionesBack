import { Router } from "express"
import { createPost, updatePost, deletePost, getPosts, test } from '../post/post.controller.js'
import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

api.get('/test', test)
api.post('/createPost', [validateJwt], createPost)
api.put('/updatePost/:id', [validateJwt], updatePost)
api.delete('/deletePost/:id', [validateJwt], deletePost)
api.get('/getPosts', [validateJwt], getPosts)

export default api