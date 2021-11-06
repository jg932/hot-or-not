import { Router } from 'express'
import * as hotsauceCtrl from '../controllers/hotsauces.js'
import {isLoggedIn} from '../middleware/middleware.js'

const router = Router()

router.get('/index', hotsauceCtrl.index)
router.get('/new', hotsauceCtrl.new)

router.post('/', isLoggedIn, hotsauceCtrl.create)

export {
  router,
}