import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTweetReply } from '../../Store/Twit/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '49%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4
};

export default function ReplyModal({ open, handleClose, item }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSubmit = (values) => {
        dispatch(createTweetReply(values));
        handleClose();
        console.log("handle submit", values);
    }

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: item?.id
        },
        onSubmit: handleSubmit
    })

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex space-x-5">
                        <Avatar
                            onClick={() => navigate(`/profile/${6}`)}
                            className='cursor-pointer' alt='username' src='https://imgs.search.brave.com/J-IRpcdrFsOEmt4ZscpJjPP0stgzgXISZC7A3FV6SSg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzk4/LzllLzNlOTg5ZWQw/MDU2NDdkN2RjOWRm/MjcwNDQ1MmIwZjZm/LmpwZw' />

                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex cursor-pointer items-center space-x-2">
                                    <span className='font-semibold'>Code with Zosh</span>
                                    <span className='text-gray-600'>@codewithzosh . 2m</span>
                                    <img className='ml-2 w-5 h-5' src="https://w7.pngwing.com/pngs/910/897/png-transparent-twitter-verified-badge-hd-logo-thumbnail.png" alt="" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div onClick={() => navigate(`/twit/${3}`)} className="cursor-pointer">
                                    <p className='mb-2 p-0'>twitter clone - full stack project with spring boot and react</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={`py-10`}>
                        <div className='flex space-x-5'>
                            <Avatar alt='username' src='https://imgs.search.brave.com/J-IRpcdrFsOEmt4ZscpJjPP0stgzgXISZC7A3FV6SSg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzk4/LzllLzNlOTg5ZWQw/MDU2NDdkN2RjOWRm/MjcwNDQ1MmIwZjZm/LmpwZw'></Avatar>
                            <div className="w-full">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type="text" name='content' placeholder='what is happening'
                                            className={`border-none outline-none text-xl bg-transparent`}
                                            {...formik.getFieldProps("content")} />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>
                                    {/* <div>
                  <img src="" alt="" />
              </div> */}
                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex space-x-5 items-center">
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className="text-[#1d9bf0]" />
                                                <input type="file" name="imageFile" className='hidden' onChange={handleSelectImage} />
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>
                                        <div>
                                            <Button sx={{ width: "100%", paddingY: "8px", paddingX: "20px", borderRadius: "20px", bgcolor: "#1e88e5" }}
                                                variant='contained' type='submit'>
                                                Tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
