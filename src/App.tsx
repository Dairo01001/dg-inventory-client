import axios from 'axios'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading, PrivateLayout, ThemeProvider } from './components'
import store from './redux/store'

axios.defaults.baseURL = 'http://localhost:3000'

const Login = lazy(() => import('./pages/login/login'))

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateLayout />}>
                <Route path="/" element={<Loading />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </ThemeProvider>
  )
}
