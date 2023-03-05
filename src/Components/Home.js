import React from 'react'
import homeData from '../Data/homeData'
import sec2Data from '../Data/sec2Data'
import homesec3Data from '../Data/homesec3Data'
import homesec5Data from '../Data/homesec5Data'
import homesec6Data from '../Data/homesec6Data'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch } from 'react-redux'
import { addtocart } from '../redux/cartSlice'

const Home = () => {
  const dispatch = useDispatch()
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};
  return (
    
    <>

    <section className='py-5 border-bottom border-secondary'>
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-lg-7'>
                <OwlCarousel className='owl-theme' loop margin={10} nav items={1} >
                {homeData.map((a)=>(
                <div className='homebox1'>
                  <img src={a.image1} alt='' className='w-100 img-fluid'/>
                </div>
                  ))}
                </OwlCarousel>
                </div>
                <div className='col-lg-5'>
                    <div className='homebox2 mb-2'>
                      <img className='img4 w-100 img-thumbnail' src='./pics/sec1/img4.jpg' alt=''/>
                    </div>
                    <div className='homebox2'>
                      <img className='img4 w-100 img-thumbnail' src='./pics/sec1/img5.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </div> 
        <div className='container d-flex  gap-5 px-5 py-3 '>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='d-flex align-items-center  gap-3 fs-2 text-secondary'><i class="bi bi-file-earmark-lock"></i><h5>Secure payments</h5></div>
            </div>
            <div className='col-lg-3'>
              <div className='d-flex align-items-center gap-3 fs-2 text-secondary'><i class="bi bi-arrow-return-left"></i><h5>30 days return period</h5></div>
            </div>
            <div className='col-lg-3'>
              <div className='d-flex align-items-center gap-3 fs-2 text-secondary'><i class="bi bi-headset"></i><h5>24/7 customer support</h5></div>
            </div>
            <div className='col-lg-3'>
              <div className='d-flex align-items-center gap-3 fs-2 text-secondary'><i class="bi bi-truck"></i><h5>Flexible shipping</h5></div>
            </div>
          
        </div>
        </div>
    </section>  
    <section className='sec1 border-bottom border-dark py-5'>
      <h3 className='text-center py-5'>What's new</h3>
      <div className='container'>
         <div className='row'>
          <div className=''>
          <OwlCarousel className='owl-theme ' loop margin={10} nav items={5} {...options}>
          {sec2Data.map((a)=>(
              <div className='sec2bx1 '>
             <img className='sec2bx w-100' src={a.image} alt=''/>
             <h5 className='py-3 text-center'>{a.title}</h5>
             <p className=' text-center'>{a.price}</p>
             <h6 className='text-warning text-center'><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><i class="bi bi-star"></i></h6>
             <div className='text-center'><button className='sec2btn' onClick={()=>dispatch(addtocart(a))}>Add to cart <i class="bi bi-cart-dash"></i></button></div>
             </div>
              ))}
              </OwlCarousel>
         </div>
         </div>
      </div>
    </section>
    <section className='sec2 border-bottom border-dark py-5'>
      <h3 className='text-center py-5'>Categories</h3>
      <div className='container '>
         <div className='row'>
          <div className=''>
          <OwlCarousel className='owl-theme' loop margin={10} nav items={5} {...options}>
          {homesec3Data.map((a)=>(
              <div className='rrr'>
             <div className='sec2bx card'><img className=' w-100 img-thumbnail' src={a.image} alt=''/>
             <h5 className='px-4 text-center text-center'>{a.title}</h5>
             <p className=' px-4 text-secondary text-center'>{a.item}</p>
             </div>
             </div>
              ))}
              </OwlCarousel>
         </div>
         </div>
      </div>
    </section>
    <section className='sec4'>
      <div className='container-fluid py-5'>
         <div className='row'>
          <div className='col-lg-6'>
            <div className='sec4bx'>
             <div className='sec4rel'> <img className='sec4img w-100 img-thumbnail' src='./pics/sec4/img1.jpg'alt=''/>
                <div className='sec4abs text-dark'>
                    <h1>Lounge sofa collection</h1>
                     <h5>Innovative silhousettes & premium metrials</h5>
                 </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec4bx'>
              <div className='sec4rel'> <img className='sec4img w-100 img-thumbnail' src='./pics/sec4/img3.webp' alt=''/>
                <div className='sec4abs text-primary'>
                    <h1>Lounge chairs collection</h1>
                     <h5>Innovative silhousettes & premium metrials</h5>
                 </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </section>
    <section className='sec5 border-bottom border-dark py-5'>
      <h3 className='text-center py-5'>Bestsellers</h3>
      <div className='container '>
         <div className='row'>
          <div className=''>
          <OwlCarousel className='owl-theme' loop margin={10} nav items={4} {...options}>
          {homesec5Data.map((a)=>(
              <div className=''>
             <div className='sec5bx'><img className=' w-100 img-fluid' src={a.image} alt=''/></div>
             <h5 className='px-4 mt-5'>{a.title}</h5>
             <p className='px-4'>{a.price}</p>
             </div>
              ))}
              </OwlCarousel>
         </div>
         </div>
      </div>
    </section>
    <section className='sec6 border-bottom border-dark py-5'>
      <h3 className='text-center py-5'>From our blog</h3>
      <div className='container '>
         <div className='row'>
          <div className=''>
          <OwlCarousel className='owl-theme' loop margin={10} nav items={3} {...options}>
          {homesec6Data.map((a)=>(
              <div className=''>
             <img className='sec6bx w-100' src={a.image} alt=''/>
             <h5 className='py-3'>{a.title}</h5>
             <p className='px-5'>{a.description}</p>
             </div>
              ))}
              </OwlCarousel>
         </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Home
