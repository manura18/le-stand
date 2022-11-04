import { readMetaConfig } from './lib'

export const APP_NAME = readMetaConfig('app-name') ?? import.meta.env.VITE_APP_NAME
