/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'
import { createProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Succes get product data')
  res.status(200).send({ status: true, statusCode: '200', data: [{ name: 'Sepatu Sport', price: 50000 }] })
})
ProductRouter.post('/', createProduct)
