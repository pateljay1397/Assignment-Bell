import { mock } from './mock'

export const getMedias = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(mock)
    }, 300)
  })
}
