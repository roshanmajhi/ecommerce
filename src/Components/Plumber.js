import React from 'react'
import plumberData from '../Data/plumberData'
const Plumber = () => {
  return (
    <>
       <h2 className=' ms-5 py-5 ps-5'>Available color & Brush</h2>
      <div className='container d-flex justify-content-between gap-3 flex-wrap '>
            {plumberData.map((a)=>(
                <div className='card chairsofa '>
                    <div className=''><img src={a.image} className='w-100'/></div>
                    <h4 className='ps-5 text-primary'>{a.title}</h4>
                    <p className='ps-5 text-dark'>{a.description}</p>
                    <h6 className='ps-5 text-secondary'>{a.price}</h6>
                    <p className='ps-5 text-warning'>{a.discount}</p>

                </div>
            ))}
     </div>
    </>
  )
}

export default Plumber
