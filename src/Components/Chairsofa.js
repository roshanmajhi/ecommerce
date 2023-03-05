import React from 'react'
import universalData from '../Data/universalData'
const Chairsofa = () => {
  return (
    <>
     <div className='container d-flex justify-content-between gap-3 flex-wrap '>
            {universalData.map((a)=>(
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

export default Chairsofa
