import { Router } from 'express'
import * as hotsaucesCtrl from '../controllers/hotsauces.js'
import {isLoggedIn} from '../middleware/middleware.js'

const router = Router()

router.get('/', hotsaucesCtrl.index)
// router.get('/new', hotsaucesCtrl.new)

router.post('/', isLoggedIn, hotsaucesCtrl.create)

export {
  router,
}