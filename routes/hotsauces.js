import { Router } from 'express'
import * as hotsauceCtrl from '../controllers/hotsauces.js'

const router = Router()

router.get('/', hotsauceCtrl.index)

export {
  router,
}