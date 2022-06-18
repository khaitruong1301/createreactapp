import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Shop from './Pages/Shop';
import HomeLayout from './templates/HomeLayout';
import ReactForm from './Pages/ReactForm/ReactForm';
import AdminLayout from './templates/AdminLayout';
import UserManagement from './Pages/Admin/UsersManagement/UserManagement';
import ProductManagement from './Pages/Admin/ProductManagement/ProductManagement';
import { } from 'history'
import Detail from './Pages/Detail/Detail';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Page404 from './Pages/Page404';
import Lifecycle from './Pages/Lifecycle/Lifecycle';



function App(props) {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path='' element={<HomeLayout />} >
          <Route index  path="home" element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="form" element={<ReactForm />}  r/>
          <Route path="login" element={<Login />} />
          <Route path="lifecycle" element={<Lifecycle />} />
          <Route path="page404" element={<Page404 />} />
          <Route path='products'> 
            <Route path=':id' element={<Detail />} />
          </Route>
        </Route>
        <Route path='admin' element={<AdminLayout />} >
          <Route path="users" element={<UserManagement />} />
          <Route path="products" element={<ProductManagement />} />
        </Route>
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
