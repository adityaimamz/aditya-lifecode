import Joi from 'joi'

interface ProductInterface {
  name: string
  price: number
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().allow('', null)
  })
  return schema.validate(payload)
}
