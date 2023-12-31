import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { UserContext } from '../../../context/UserContext';

function Comments(props) {
  const { data, deleteCommentById } = useContext(ContactContext);
  const { isAdmin } = useContext(UserContext);
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide text-dark">
        <div className="carousel-indicators carousel-indicators-custom py-0">

          {data.map((item, index) => (<button key={index} type="button" className={`${index === 0 && "active"}`} aria-current={`${index === 0 && "true"}`} data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index}`}></button>))}
        </div>
        <div className="carousel-inner ">
          {data.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 && "active"}`}>
              <div className="commentContainer bg-custom">
                <img src="https://i.hizliresim.com/2lgaxy3.png" className="message-left" alt="message treatment" />
                <p><strong>{item.comment.title}</strong></p>
                <p>{item.comment.text}</p>
                <img src="https://i.hizliresim.com/9z3w5lx.png" className="message-right" alt="message treatment" />
                <span className="commentCustomerName  float-end fs-6 pt-5">- {item.name}</span>
                {isAdmin && <button className="btn btn-danger position-absolute bottom-0 end-50" onClick={() => deleteCommentById(item.id)}>Delete</button>}
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