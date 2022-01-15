import { Router } from 'express'
import * as hotsaucesCtrl from '../controllers/hotsauces.js'
import {isLoggedIn} from '../middleware/middleware.js'

const router = Router()

router.get('/', hotsaucesCtrl.index)
router.get('/:id', hotsaucesCtrl.show)
router.get('/:id/edit', hotsaucesCtrl.edit)

router.post('/', isLoggedIn, hotsaucesCtrl.create)
router.post('/:id', isLoggedIn, hotsaucesCtrl.createReview)

router.get('/:id/reviews/:reviewId/edit', isLoggedIn, hotsaucesCtrl.editReview)
router.post('/:id/reviews/:reviewId', isLoggedIn, hotsaucesCtrl.update)

router.delete('/:id', isLoggedIn, hotsaucesCtrl.deleteHotsauce)

export {
  router,
}

