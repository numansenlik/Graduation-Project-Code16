import {useContext} from 'react'
import { Link } from 'react-router-dom'
import Comments from './contact/Comments'
import { ContactContext } from '../../context/ContactContext'

function Home() {
  const {data} = useContext(ContactContext)
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
              <img src="https://i.hizliresim.com/1pu0h8v.png" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <Link to="/gallery"><button className="siteButton bannerButton">BOOK A VISIT</button></Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.fresha.com/locations/location-profile-images/806268/940973/ad801920-3200-4c6d-889e-c91c13b043c2.jpg?class=gallery-modal-small&dpr=2" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <Link to="/gallery"><button className="siteButton bannerButton">BOOK A VISIT</button></Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://d1ooscleda9ip9.cloudfront.net/Upload/669/Documents/Blend%20makeup.png" className="d-block w-100" alt="..." />
              <h3 className="bannerText">Beau Monde Salon and Spa</h3>
              <div className="buttonDiv">
                <Link to="/gallery"><button className="siteButton bannerButton">BOOK A VISIT</button></Link>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="logo ">
            <div className="logos logo1 ">
            <img src="https://i.hizliresim.com/cn77di1.png" alt="lg" />
            </div>
            <div className="logos logo2">
              <img src="https://i.hizliresim.com/ezmvz21.png" alt="lg2" />
            </div>
            <div className="logos logo3">
              <img src="https://i.hizliresim.com/8ebj7k2.png" alt="lg3" />
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
              <Comments data={data} />
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