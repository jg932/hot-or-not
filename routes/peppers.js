import { Router } from 'express'
import * as peppersCtrl from "../controllers/peppers.js"

const router = Router()

router.get("/new", peppersCtrl.new)
router.post("/", peppersCtrl.create)

export {
  router
}