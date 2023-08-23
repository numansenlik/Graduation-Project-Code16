import React from 'react'

function Services() {
  return (
    <>
        <div className="tripleBannerSection">
          <div className="areas ">
            <div>
              <img src="./src/images/hair-cutting.png" />
              <div className="headers">
                <h2>Hair Services</h2>
                <p>Beau Monde offers a variety of hair services: color, texture, cuts, barber and more </p>
              </div>
            </div>
          </div>
          <div className="foto1">
            <img src="./src/images/scissors-divider-1.png" alt="makas" />
          </div>
          <div className="areas ">
            <div>
              <img src="./src/images/bride.png" />
              <div className="headers">
                <h2>Bridal Services</h2>
                <p>We offer hair and makeup services for your special day,including trial runs,hair extensions</p>

              </div>
            </div>
          </div>
          <div className="foto1">
            <img src="./src/images/scissors-divider-2.png" alt="makas" />
          </div>
          <div className="areas ">
            <div>
              <img src="./src/images/massage-treatment.png" />
              <div className="headers">
                <h2>Massage Services</h2>
                <p>Treat yourself to a chair massage, myofascial release, or a facial to relax and rejuvenate</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Banner-Section">
          <div className="imageTextSection">
            <img src="./src/images/shampoo.png" alt="sampuan" />
            <div className="write">
              <p>Beau Monde is a full-service hair salon and offers spa services including massage, facials, reiki treatments and myofascial release. We exclusively use and retail Redken and Pureology hair care and delicious Farmhouse Fresh skin care products.</p>
              <button className="siteButton bannerButton">MAKE APPOINTMENT</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Services