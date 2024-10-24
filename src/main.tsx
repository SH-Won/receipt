import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './app'

const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}
const root = createRoot(rootElement)
root.render(<App />)
