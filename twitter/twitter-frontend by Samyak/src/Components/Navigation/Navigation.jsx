import React, { useEffect } from 'react';
import { navigationMenu } from './NavigationMenu'

import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch, useSelector } from 'react-redux';
import { findUserById, logout } from '../../Store/Auth/Action';

const Navigation = () => {
    const { auth } = useSelector((store) => store);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("logout");
        handleClose();
        dispatch(logout());
    }
    
    useEffect(() => {
        // This function will be called whenever auth.user.image changes
        // You can perform any side effects here
        console.log("auth.user.fullName changed:", auth.user?.fullName);
    }, [auth.user?.fullName]); 
    const navigate = useNavigate();
    return (
        <div className="h-screen sticky top-0">
            <div>
                <div className="py-6">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                        <g opacity=".3"><polygon fill="#fff" fill-rule="evenodd" points="16.002,19 6.208,5 8.255,5 18.035,19" clip-rule="evenodd"></polygon><polygon points="8.776,4 4.288,4 15.481,20 19.953,20 8.776,4"></polygon></g><polygon fill-rule="evenodd" points="10.13,12.36 11.32,14.04 5.38,21 2.74,21" clip-rule="evenodd"></polygon><polygon fill-rule="evenodd" points="20.74,3 13.78,11.16 12.6,9.47 18.14,3" clip-rule="evenodd"></polygon><path d="M8.255,5l9.779,14h-2.032L6.208,5H8.255 M9.298,3h-6.93l12.593,18h6.91L9.298,3L9.298,3z"></path>
                    </svg>
                </div>
                <div className="space-y-6">
                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center'
                        onClick={() => item.title === "Profile" ? navigate(`/profile/${auth.user?.id}`) : navigate(item.path)}>
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
                </div>
                <div className="py-10">
                    <Button sx={{ width: "100%", py: "15px", borderRadius: "29px", bgcolor: "#1e88e5" }}
                        variant='contained'>
                        Tweet
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Avatar alt='username' src={auth.user?.image} />
                    <div>
                        <p>{auth.user?.fullName}</p>
                        <span className='opacity-70'>@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon fontSize='small' />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
