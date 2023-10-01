import Header from './components/Layouts/Header/Header'
import Footer from './components/Layouts/Footer/Footer'
import { useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loadUser } from './redux/actions/userAction'
import { useEffect } from 'react'
import MyRouter from './routes/MyRouter'

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadUser());
    // getStripeApiKey();
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname])

  return (
    <>
      <Header />
      <MyRouter />
      <Footer />
    </>
  )
}

export default App
