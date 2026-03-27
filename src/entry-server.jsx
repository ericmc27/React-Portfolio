import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router-dom'

/**
 * @param {string} url
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, options) {
  return renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url.startsWith("/") ? url : `/${url}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
    options,
  )
}
