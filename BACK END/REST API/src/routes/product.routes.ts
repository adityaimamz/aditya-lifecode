/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Router } from 'express'
import { getProduct, createProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:name', getProduct)
ProductRouter.post('/', createProduct)
