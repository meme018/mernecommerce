import { Route, Routes } from 'react-router'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Blog from './pages/Blog'
import AddProduct from './pages/AddProduct'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/:id' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
