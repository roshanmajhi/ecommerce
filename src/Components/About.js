import React from 'react'
import aboutData from '../Data/aboutData'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const About = () => {
  return (
    <>
       <div className='container'>
        <h2 className='py-4 text-success'>About our shop</h2>
          <div className='abt1'>
            <img src='https://the7.io/elementor-shop/wp-content/uploads/sites/79/elementor/thumbs/q09223111-q0634gz0q063ijmwipwzuqkciiyvr9u9mxi8lfvhak.jpg' alt='' className='w-100 img-fluid'/>
          </div>
          <div className='abt2'>
            <h4 className='abth4 py-3'>Quality products & outstanding service</h4>
            <p className='abtp'>Fusce quam risus, facilisis et molestie non, feugiat in tortor. Duis volutpat, mi id cursus rhoncus!</p>
            <p className='abtp'>
              Suspendisse potenti. In scelerisque libero id eleifend consectetur. Sed lacinia tempor orci, non lacinia purus faucibus non. Aliquam gravida risus nec velit lacinia dapibus. Phasellus at magna id elit tristique lacinia.</p>
             <p className='abtp'>
              Integer a justo vitae arcu fermentum consequat. Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet rhoncus tellus neque aliquet sapien. Donec sit amet sodales.</p>
           </div>
           <div className='abt3 py-4'>
            <h4 className='text-success py-2'>Why choose us:</h4>
            <ul>
              <li>Suspendisse potenti: in scelerisque libero</li>
              <li>Aliquam gravida risus nec velit lacinia dapibus</li>
              <li>Donec sit amet sodales</li>
              <li>Purus augue aliquam arcu sit amet</li>
            </ul>
          </div>
          <div className='abt4 py-5'>
            <h4 className='py-2'>Our partners</h4>
            <OwlCarousel className='owl-theme' loop margin={10} nav items={3}>
            {aboutData.map((a)=>(
              <div className='abtsli card'>
                <img src={a.image} alt='' className='w-100'/>
                <h5 className='text-center'>{a.tite}</h5>
                <p className='text-center'>{a.description}</p>
              </div>
            ))}
            </OwlCarousel>
          </div>
      </div>
    </>
  )
}

export default About
