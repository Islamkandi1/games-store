import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from './components/home/Home';
import About from './components/about/About';
import Games from './components/games/Games';
import Contact from './components/contact/Contact';
import NotFound from './components/notfound/NotFound';


function App() {

const router = createBrowserRouter([
  {path:"" ,element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:"about",element:<About/>},
    {path:"games",element:<Games/> },
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>}
  ]}
])
  return (
    <>
  <RouterProvider router={router}  />
    </>
  )
}

export default App
