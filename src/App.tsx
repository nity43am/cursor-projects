import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from './context/ThemeContext'
import { FloatingChatbot } from './components/FloatingChatbot'

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <FloatingChatbot />
    </ThemeProvider>
  )
}
