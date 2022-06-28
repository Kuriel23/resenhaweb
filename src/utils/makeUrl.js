import urlJoin from 'url-join'

import { APP_URL } from './constants'

const urlRegex = /^https?:\/\/+/

export function makeUrl (path) {
  if (urlRegex.test(path)) {
    return path
  }

  return urlJoin(APP_URL, path)
}
