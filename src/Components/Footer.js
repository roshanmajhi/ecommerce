import React from 'react'
import {FaWhatsapp,FaInstagram, FaCcAmazonPay, FaCcStripe, FaCcVisa, FaCcPaypal, FaFacebookF} from 'react-icons/fa'
import {RiYoutubeLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import {MdMarkEmailRead} from 'react-icons/md'
const Footer = () => {
  return (
    <div>
      <section className='secl'>
      <div className='container-fluid py-5'>
        <div className='row'>
            <div className='col-lg-3'>
                <div className='fbx d-flex gap-2'>
                 <div className='fx '><FaWhatsapp/></div>
                 <div className='fx'><FaFacebookF/></div>
                 <div className='fx'><RiYoutubeLine/></div>
                 <div className='fx'><FaInstagram/></div>
                </div>
            </div>
            <div className='col-lg-2'>
                <div className='fbx'>
                    <h4 className='h'>About</h4>
                    <div><Link to="" className='hh'>About shop</Link></div>
                    <div><Link to="" className='hh'>News</Link></div>
                    <div><Link to="" className='hh'>Contact</Link></div>
                    <div><Link to="" className='hh'>Sitemap</Link></div>
                    <div><Link to="" className='hh'>404 error page</Link></div>
                    <div><Link to="" className='hh'>Maintenance page</Link></div>
                    <div><Link to="" className='hh'>Demo design system</Link></div>
                </div>
            </div>
            <div className='col-lg-2'>
                <div className='fbx'>
                <h4 className='h'>Customer info</h4>
                    <div><Link to="" className='hh'>Payment</Link></div>
                    <div><Link to="" className='hh'>Delivery</Link></div>
                    <div><Link to="" className='hh'>Order tracking</Link></div>
                    <div><Link to="" className='hh'>Exchanges & returns</Link></div>
                    <div><Link to="" className='hh'>Terms & conditions</Link></div> 
                </div>
            </div>
            <div className='col-lg-2'>
                <div className='fbx'>
                <h4 className='h'>Catalogue</h4>
                    <div><Link to="" className='hh'>New incomes</Link></div>
                    <div><Link to="" className='hh'>Bestsellers</Link></div>
                    <div><Link to="" className='hh'>Sale</Link></div>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='fbx'>
                 <div className='d-flex align-items-center gap-2 pb-4'>
                  <div ><MdMarkEmailRead className='fxx'/></div>
                  <h4 className='hhhh'>Newsletter signup</h4>
                  </div>
                  <p className='hhh'>Be the first to know about our new arrivals and exclusive offers!</p>
                  <button className='sign mx-auto pt-2'>Sign me up!</button>
                </div>
            </div>
        </div>
      </div>
      </section>
      <section className='secll border-top border-secondary py-4 text-secondary fw-normal'>
        <div className='container d-flex justify-content-between  align-items-baseline'>
          <div>
            <h5 className='hf5' >© Copyright 2023 Dream-Theme. All rights reserved.</h5>
        </div>
        <div className='d-flex gap-2 align-items-baseline'>
            <h5 className='hf5'>We accept:</h5>
            <div><FaCcAmazonPay className='crd'/></div>
            <div><FaCcStripe className='crd'/></div>
            <div><FaCcVisa className='crd'/></div>
            <div><FaCcPaypal className='crd'/></div>
           
        </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
