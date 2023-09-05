import { type Router, type Application } from 'express'
import { HealthRouter } from './health.routes'
import { ProductRouter } from './product.routes'

const _routes: Array<[string, Router]> = [
  ['/health', HealthRouter],
  ['/product', ProductRouter]
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
