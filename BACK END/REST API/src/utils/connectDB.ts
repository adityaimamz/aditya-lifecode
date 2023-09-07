import mongoose from 'mongoose'
import config from '../config/environments'
import { logger } from './logger'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.info('Failed to connect to MongoDB')
    logger.error(error)
    process.exit(1)
  })
