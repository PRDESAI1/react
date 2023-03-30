import {Routes,Route} from 'react-router-dom'
import { Home } from './Component/Home';
import { About } from './Component/About';
import { NavBar } from './Component/NavBar';
import { OrderSummary } from './Component/OrderSummary';
import { NoMatch } from './Component/NoMatch';
import { Product } from './Component/Product';
import { NewProduct } from './Component/NewProduct';
import { FeaturedProduct } from './Component/FeaturedProduct';
import { User } from './Component/User';
import { UserDetails } from './Component/UserDetails';
import { Admin } from './Component/Admin';


function App() {
  
  return (
  <>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='order-summary' element={<OrderSummary/>}></Route>
  <Route path={'*'} element={<NoMatch/>}></Route>
  <Route path={'products'} element={<Product/>}>
    <Route index element={<FeaturedProduct/>}/>
     <Route path='featured' element={<FeaturedProduct/>}/>
     <Route path='new' element={<NewProduct/>}/>
  </Route>

  <Route path='users' element={<User/>}>
    <Route path=':usersId' element={<UserDetails/>}/>
    <Route path='admin' element={<Admin/>}/>
  </Route>
  </Routes>
  </>

  );
}

export default App;
