import { Router, type Request, type Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: '422', message: error.details[0].message, data: {} })
  }
  logger.info('Succes add new product data')
  return res.status(200).send({ status: true, statusCode: '200', message: 'Succes add new product', data: value })
}