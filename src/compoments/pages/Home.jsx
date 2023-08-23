import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'

function Home(props) {
  return (
    <>
      <div className="HomeBannerSection col-24">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <button className="siteButton bannerButton">BOOK A VISIT</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <button className="siteButton bannerButton">BOOK A VISIT</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <button className="siteButton bannerButton">BOOK A VISIT</button>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="logo">
            <div className="logos logo1">
              <img src="./src/images/redken.png" alt="lg" />
            </div>
            <div className="logos logo2">
              <img src="./src/images/pureology.png" alt="lg2" />
            </div>
            <div className="logos logo3">
              <img src="./src/images/farmhouse.png" alt="lg3" />
            </div>
          </div>
          <div className="write2">
            <p>We are proud to be recognized as a Redken Elite Black Status Salon.
              Our team has advanced training from the top artist in the industry.</p>
            <Link to={"/products"}><button className="siteButton bannerButton">GET PRODUCTS</button></Link>
          </div>
        </div>


        <div className="container">
          <div className="commentSection row">
            <div className="col">
            <Comments data={props.data} />
            </div>
            <div className="col">
            <div className="commentTextArea">
              <h3>Make an Appointment</h3>
              <br />
              <p>All of our service providers at Beau Monde Salon and Spa are cotinuosly greatful for the business and support of our wonderful guests. Please reserve an appointment with any of our team members as all of our stylists schedules fill quickly. We do occasionally have last-minute openings, but appointments are recommended.</p>
              <button className="siteButton bannerButton">MAKE APPOINTMENT</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home