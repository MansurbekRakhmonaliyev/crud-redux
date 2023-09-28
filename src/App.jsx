import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import { Provider } from 'react-redux'
import Update from './pages/Update'
import Create from './pages/Create'
import Read from './pages/Read'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Route>
    )
  )
  return (
   <RouterProvider router={routes}/>  
  )
}

export default App
