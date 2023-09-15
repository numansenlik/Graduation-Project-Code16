import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { logOut, login, register } from '../customHooks/fireBase/fireBase';
import { toast } from 'react-toastify';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin,setIsAdmin] = useState(false)
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
  const handleLogout = (e) => {
    const out = logOut();
    if (out) {
      setUser(null)
      setIsAdmin(false)
    }
  }

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
      const userData = await login(formData.email, formData.password);
      if (userData) {
        setUser(userData);
        if (userData.email == "admin@gmail.com") {
          setIsAdmin(true)
          console.log(isAdmin);
        }
        navigate('/');
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
      // İstediğiniz giriş mantığını burada uygulayabilirsiniz
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Şifreler uyuşmuyor.');
        return;
      }
      // Kayıt işlemi kodunu burada uygulayabilirsiniz
      await register(formData.email, formData.password)
      // Kayıt işlemi tamamlandığında formu sıfırlıyoruz
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return <UserContext.Provider value={{ user, handleLogin, handleLogout, handleRegister, handleChange, validateEmail, validatePassword, handleSubmit, showLogin, formData, isAdmin }}>
    {children}
  </UserContext.Provider>
}

export { UserContext, UserContextProvider }