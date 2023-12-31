import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
import SecondaryDropDownMenu from './SecondaryDropDownMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);

  const { cartItems } = useSelector(state => state.cart);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    <header className="bg-primary-blue sticky top-0 py-2.5 w-full z-10">

      {/* <!-- navbar container --> */}
      <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        {/* <!-- logo & search container --> */}
        <div className="flex items-center justify-center flex-1 w-3/5 gap-3">
          <Link className="h-5 sm:h-8 mr-1 sm:mr-4" to="/">
            <img draggable="false" className="h-full w-full object-contain" src={logo} alt="Flipkart Logo" />
          </Link>

          <Searchbar />
        </div>
        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
        <div className="flex items-center justify-center gap-3  w-2/5">

          {isAuthenticated === false ?
            <Link to="/login" className="px-3 sm:px-9 py-0.5 text-white sm:text-primary-blue sm:bg-white sm:border font-medium rounded-sm cursor-pointer">Login</Link>
            :
            (
              <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className="userDropDown flex items-center text-white font-medium  cursor-pointer" onClick={handleClick} >
                {user.name && user.name.split(" ", 1)} <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              </button>
            )
          }

          {
            user && <PrimaryDropDownMenu anchorEl={anchorEl} handleClose={handleClose} open={open} user={user} />
          }



          {/* <span className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer" onClick={() => setToggleSecondaryDropDown(!toggleSecondaryDropDown)}>More
            <span>{toggleSecondaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
          </span>

          {toggleSecondaryDropDown && <SecondaryDropDownMenu />} */}
          <Link to="/cart" className="flex items-center text-white font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            {cartItems.length > 0 &&
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                {cartItems.length}
              </div>
            }
            {window.innerWidth > 468 && "Cart"}
          </Link>
        </div>
        {/* <!-- right navs --> */}

      </div>
      {/* <!-- navbar container --> */}
    </header>
  )
};

export default Header;
