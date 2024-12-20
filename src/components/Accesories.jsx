import React from 'react'

function Accesories() {
  return (
    <div> 
        <div className="Acc d-flex">
            <h1>Accesories</h1>
            <h4 className='ms-auto me-5 mt-3'>About</h4>
             <h5 className='me-3 mt-3'>Smart Wearable</h5>
        </div>
          
        <div className="container">
          <div className="row g-5">   
            <div className="col-lg-6  column">  
              <div className="row">
                <div className="col-lg-5">
                  <button className="About_btn">New</button>
                 
                  <h4 className="pt-3 fs-3">REALME Buds T110</h4>
                  <p className="about_para">   Listen in Full in Color  </p>
                  <p className="pt-5">Rs.4,999</p>
                </div>
                <div className="col-lg-5">
                  <img className="mt-5"
                    width={'150%'}
                    src="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
      
            <div className="col-lg-6  column1" >  
              <div className="row">
                <div className="col-lg-5">
                <button className="About_btn">New</button>
                 
                 <h4 className="pt-3 fs-4">REALME Buds Q
                 </h4>
                 <p className="about_para">  Music Never Ends </p>
                 <p className="pt-5"> Rs.7,999
                 </p>
                </div>
                <div className="col-lg-5">
                  <img
                   className="mt-5"
                    width={'150%'}
                    src="https://image01.realme.net/general/20201111/1605080175371.jpg.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default Accesories