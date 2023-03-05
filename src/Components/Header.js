import React from 'react'
import {Link}from 'react-router-dom'
import { useSelector} from 'react-redux'
// import catData from '../Data/catData'
const Header = () => {
  const {qty}=useSelector((state)=>state.cart)
  return (
    <>
    <section className='top'>
      <div className='container d-flex justify-content-between py-2'>
        <div className='d-flex align-items-baseline gap-2'>
        <div className='text-success fw-5 fs-5'><i class="bi bi-headset"></i></div>
        <h6>Hotline:</h6>
        <h5 className='text-success'>+01 023 345 678</h5>
        </div>
        <div className='d-flex gap-2'>
        <div className='text-success'><i className="bi bi-person-circle"></i></div>
        <Link to="" className='tp'>Login/Register</Link>
        <div className='text-success'><i className="bi bi-question-circle"></i></div>
        <Link to="" className='tp'>FAQ</Link>
        <div className='text-success'><i className="bi bi-clock"></i></div>
        <Link to="" className='tp'>Order tracking</Link>
        </div>
      </div>
    </section>
    <section className='nav sticky-top'>
    <nav className="nv navbar navbar-expand-lg ">
  <div className="container rohit">
    
    <Link className="navbar-brand" to="/">
        <img  className='w-100 hdrimg' src={require('../Components/images/logo.png')} alt=''/>
    </Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className=" navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Catalogue
          </Link>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            {/* {catData.map((a)=>( */}
              <li><Link className="dropdown-item text-dark" to="/chairsofa">FURNITURE CHAIR AND SOFA SETS</Link></li>
              <li><Link className="dropdown-item text-dark" to="/plumbers">PLUMBING TOOLS AND EQUIPMENTS</Link></li>
              <li><Link className="dropdown-item text-dark" to="/color&brush">PANTING COLORS AND BRUSHES</Link></li>
            {/* ))} */}
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/more">More</Link>
        </li>
       
      </ul>
    </div>
    <div className='d-flex'>
      <div className='dvsrc'><input className="src px-5" type="search" placeholder="Search.."  />
   <div className='srci'><i className="bi bi-search"></i></div></div>
   <h5 className='crtinc'><Link to='/cart'><i className="bi bi-cart-dash"></i></Link></h5>
   <div className='qty'>{qty}</div>
      </div>
  </div>
</nav>

    </section>
    </>
  )
}

export default Header
