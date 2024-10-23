import axios from 'axios'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading, ThemeProvider } from './components'

axios.defaults.baseURL = 'http://localhost:3000'

const Login = lazy(() => import('./pages/login/login'))

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}
