import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

function UserLogin() {
  const { handleLogin, handleRegister, handleChange, handleSubmit, showLogin, formData } = useContext(UserContext)


  return (
    <>
      <div className="container">
        <div className="row">
          <button
            className={`btn btn-light col-md-4 offset-md-2 py-2 ${showLogin ? 'active' : ''}`}
            onClick={handleLogin}
          >
            Sign In
          </button>
          <button
            className={`btn btn-light col-md-4 py-2 ${showLogin ? '' : 'active'}`}
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className='row'>
            <div className='mx-auto col-md-7'>
              <form onSubmit={handleSubmit}>
                {showLogin ? (
                  <div>
                    <h2>Login</h2>
                    <div className="mb-3">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2>Register</h2>
                    <div className="mb-3">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <button className="btn btn-primary p-2" type="submit">
                    {showLogin ? 'Login' : 'Register'}
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
