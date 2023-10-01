import React, { useDebugValue } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Menu, MenuItem } from '@mui/material';
import { logoutUser } from '../../../redux/actions/userAction';

const PrimaryDropDownMenu = ({  user, anchorEl, handleClose, open }) => {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const { wishlistItems } = useSelector((state) => state.wishlist);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
        enqueueSnackbar("Logout Successfully", { variant: "success" });
    }

    const navs = [
        // {
        //     title: "Supercoin Zone",
        //     icon: <OfflineBoltIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
        // {
        //     title: "Flipkart Plus Zone",
        //     icon: <AddCircleIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
        {
            title: "Orders",
            icon: <ShoppingBagIcon sx={{ fontSize: "18px" }} />,
            redirect: "/orders",
        },
        {
            title: "Wishlist",
            icon: <FavoriteIcon sx={{ fontSize: "18px" }} />,
            redirect: "/wishlist",
        },
        // {
        //     title: "My Chats",
        //     icon: <ChatIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
        // {
        //     title: "Coupons",
        //     icon: <ConfirmationNumberIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
        // {
        //     title: "Gift Cards",
        //     icon: <AccountBalanceWalletIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
        // {
        //     title: "Notifications",
        //     icon: <NotificationsIcon sx={{ fontSize: "18px" }} />,
        //     redirect: "/",
        // },
    ]

    const menuItemClicked = (item) => {
        navigate(item.redirect);
        handleClose();
    }

    return (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          className=""
        >
          {user.role === 'admin' && (
            <MenuItem
              onClick={() => menuItemClicked({ redirect: '/admin/dashboard' })}
              className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
              key="admin-dashboard" // Add a unique key
            >
              <span className="text-primary-blue">
                <DashboardIcon sx={{ fontSize: '18px' }} />
              </span>
              Admin Dashboard
            </MenuItem>
          )}
    
          <MenuItem
            onClick={() => menuItemClicked({ redirect: '/account' })}
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
            key="my-profile" // Add a unique key
          >
            <span className="text-primary-blue">
              <AccountCircleIcon sx={{ fontSize: '18px' }} />
            </span>
            My Profile
          </MenuItem>
    
          {navs.map((item, i) => {
            const { title, icon, redirect } = item;
    
            return (
              <MenuItem
                onClick={() => menuItemClicked(item)}
                className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50"
                key={title.toLowerCase()} // Use a unique key (e.g., title) as the key
              >
                <span className="text-primary-blue">{icon}</span>
                {title}
                {title === 'Wishlist' && (
                  <span className="ml-auto mr-3 bg-gray-100 p-0.5 px-2 text-gray-600 rounded">
                    {wishlistItems.length}
                  </span>
                )}
              </MenuItem>
            );
          })}
    
          <MenuItem
            className="pl-3 py-3.5 flex gap-3 items-center hover-bg-gray-50 rounded-b cursor-pointer"
            onClick={handleLogout}
            key="logout" // Add a unique key
          >
            <span className="text-primary-blue">
              <PowerSettingsNewIcon sx={{ fontSize: '18px' }} />
            </span>
            Logout
          </MenuItem>
        </Menu>
      );
};

export default PrimaryDropDownMenu;
