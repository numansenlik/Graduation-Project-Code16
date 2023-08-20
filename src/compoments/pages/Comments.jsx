import React from 'react'

function Comments(props) {
  const data = props.data
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">

          {data.map((item, index) => (<button key={index} type="button" className={`${index === 0 && "active"}`} aria-current={`${index === 0 && "true"}`} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index}`}></button>))}
        </div>
        <div className="carousel-inner ">
          {data.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 && "active"}`}>
              <div className="commentContainer ">
                <img src="./src/images/open-quote.png" className="message-left" alt="message treatment" />
                <p><strong>{item.comment.title}</strong></p>
                <p>{item.comment.text}</p>
                <img src="./src/images/close-quote.png" className="message-right" alt="message treatment" />
                <span className="commentCustomerName">- {item.name}</span>
              </div>
            </div>
          ))}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Comments