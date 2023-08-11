import React from 'react'

function Home() {
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
                    <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..."/>
                    <h3 className="bannerText">Banner Yazısı Gelecek</h3>
                    <div className="buttonDiv">
                      <button className="siteButton bannerButton">BOOK A VISIT</button>
                    </div>                  </div>
                  <div className="carousel-item">
                    <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..."/>
                    <h3 className="bannerText">Banner Yazısı Gelecek</h3>
                    <div className="buttonDiv">
                      <button className="siteButton bannerButton">BOOK A VISIT</button>
                    </div>                  </div>
                  <div className="carousel-item">
                    <img src="/src/images/bridal-hair.png" className="d-block w-100" alt="..."/>
                    <h3 className="bannerText">Banner Yazısı Gelecek</h3>
                    <div className="buttonDiv">
                      <button className="siteButton bannerButton">BOOK A VISIT</button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="ucluBannerSection">
                <div className="alan1">
                  <div>
                    <img src="/src/images/hair-cutting.png"/>
                  </div>
                </div>

                <div className="alan2">
                  <div>
                    <img src="/src/images/bride.png"/>
                  </div>
                </div>

                <div className="alan3">
                  <div>
                    <img src="/src/images/massage-treatment.png"/>
                  </div>
                </div>
              </div>
        </div>
    </>
  )
}

export default Home