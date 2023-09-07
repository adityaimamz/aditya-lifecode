/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validation/product.validation'
import { getProductFromDB } from '../services/product.service'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: '422', message: error.details[0].message, data: {} })
  }
  logger.info('Succes add new product data')
  return res.status(200).send({ status: true, statusCode: '200', message: 'Succes add new product', data: value })
}
export const getProduct = async (req: Request, res: Response) => {
  const products = await getProductFromDB()

  // const {
  //   params: { name }
  // } = req

  // if (name) {
  //   const filterProduct = products.filter((product) => {
  //     if (product.name === name) {
  //       return product
  //     }
  //   })
  //   if (filterProduct.length === 0) {
  //     logger.info('Data Not Found')
  //     res.status(404).send({ status: false, statusCode: 404, data: {} })
  //   }
  //   logger.info('Succes get product data')
  //   res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] })
  // }

  // logger.info('Succes get product data')
  // res.status(200).send({ status: true, statusCode: 200, data: products })
}
