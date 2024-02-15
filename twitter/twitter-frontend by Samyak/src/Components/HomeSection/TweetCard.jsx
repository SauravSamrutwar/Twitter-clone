import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from './ReplyModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReTweet, deleteTweet, likeTweet } from '../../Store/Twit/Action';
import { FavoriteOutlined } from '@mui/icons-material';

const TweetCard = ({ item }) => {

    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModel = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("delete tweet");
        dispatch(deleteTweet(item?.id));
        handleClose();
    }

    const handleCreateRetweet = () => {
        dispatch(createReTweet(item?.id));
        console.log("handle create retweet");
    }

    const handleLiketweet = () => {
        dispatch(likeTweet(item?.id));
        console.log("handle like tweet");
    }

    const navigate = useNavigate();
    return (
        <React.Fragment>
            {/* <div className="flex items-center font-semibold text-gray-700 py-2">
                <RepeatIcon />
                <p>You Retweet</p>
            </div> */}

            <div className="flex space-x-5">
                <Avatar
                    onClick={() => navigate(`/profile/${item?.user?.id}`)}
                    className='cursor-pointer' alt='username' src={item.user?.image} />

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex cursor-pointer items-center space-x-2">
                            <span className='font-semibold'>{item?.user?.fullName}</span>
                            <span className='text-gray-600'>@{item?.user?.fullName.split(" ").join("_").toLowerCase()} . 2m</span>
                            <img className='ml-2 w-5 h-5' src="https://w7.pngwing.com/pngs/910/897/png-transparent-twitter-verified-badge-hd-logo-thumbnail.png" alt="" />
                        </div>

                        {item.user?.id === auth.user.id && <div>
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
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>}
                    </div>
                    <div className="mt-2">
                        <div onClick={() => navigate(`/twit/${item?.id}`)} className="cursor-pointer">
                            <p className='mb-2 p-0'>{item?.content}</p>
                            {item?.image && <img className={`w-[28rem] border border-gray-400 p-5 rounded-md`} src={item?.image} alt="" />}
                        </div>
                        <div className="py-5 flex justify-between flex-wrap items-center">
                            <div className="space-x-3 flex items-center text-gray-600">
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>{item?.totalReplies}</p>
                            </div>
                            <div className={`${item?.retwit ? "text-pink-600 " : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetweet} className='cursor-pointer' />
                                <p>{item?.totalRetweets}</p>
                            </div>
                            <div className={`${item?.liked ? "text-pink-600 " : "text-gray-600"} space-x-3 flex items-center`}>
                                {item?.liked ? <FavoriteIcon onClick={handleLiketweet} className='cursor-pointer' /> :
                                    <FavoriteOutlined onClick={handleLiketweet} className='cursor-pointer' />}
                                <p>{item?.totalLikes}</p>
                            </div>
                            <div className="space-x-3 flex items-center text-gray-600">
                                <BarChartIcon className='cursor-pointer' />
                                <p>0</p>
                            </div>
                            <div className="space-x-3 flex items-center text-gray-600">
                                <FileUploadIcon className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <ReplyModal item={item} open={openReplyModal} handleClose={handleCloseReplyModal} />
            </section>
        </React.Fragment>
    )
}

export default TweetCard