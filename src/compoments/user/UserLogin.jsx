import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserLogin({handleLogin:handleLoginn}) {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    message: ''
  });

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowLogin(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Geçersiz e-posta adresi.');
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error('Şifre en az 6 karakter olmalıdır.');
      return;
    }

    if (showLogin) {
      handleLoginn();
      // İstediğiniz giriş mantığını burada uygulayabilirsiniz
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Şifreler uyuşmuyor.');
        return;
      }
      console.log('Form Data:', formData);
      // Kayıt işlemi kodunu burada uygulayabilirsiniz

      // Kayıt işlemi tamamlandığında formu sıfırlıyoruz
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        message: 'Kayıt başarıyla tamamlandı.',
      });
    }
  };

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
