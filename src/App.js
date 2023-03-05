
import './App.css';
import './Scss/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';
import More from './Components/More';
import Toptoscrool from './Components/Toptoscrool';
import Chairsofa from './Components/Chairsofa'
import Colorbrush from './Components/Colorbrush';
import Plumber from './Components/Plumber';
import Cart from './Components/Cart';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/more' element={<More/>}/>
      <Route path='/chairsofa' element={<Chairsofa/>}/>
      <Route path='/plumbers' element={<Colorbrush/>}/>
      <Route path='/color&brush' element={<Plumber/>}/>
    </Routes>
    <Toptoscrool/>
    <Footer/>
  
    </>
  );
}

export default App;
