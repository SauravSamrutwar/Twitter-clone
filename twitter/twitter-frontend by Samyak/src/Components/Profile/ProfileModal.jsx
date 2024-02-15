import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton, TextField } from '@mui/material';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../Store/Auth/Action';
import { uploadToCloudnary } from '../../Utils/uploadToCloudnary';

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

export default function ProfileModal({ open, handleClose }) {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store)

    const handlSubmit = (values) => {
        dispatch(updateUserProfile(values));
        setSelectedImage("");
        setTimeout(handleClose(), 1000);
        console.log('handle submit', values);
    }

    const formik = useFormik({
        initialValues: {
            fullName: auth.findUser?.fullName,
            website: auth.findUser?.website,
            location: auth.findUser?.location,
            bio: auth.findUser?.bio,
            backgroundImage: auth.findUser?.backgroundImage,
            image: auth.findUser?.image
        },
        onSubmit: handlSubmit
    }) 

    const handleImageChange = async (event) => {
        setUploading(true);
        const { name } = event.target;
        const file = await uploadToCloudnary(event.target.files[0]);
        formik.setFieldValue(name, file);
        setSelectedImage(file);
        setUploading(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon />
                                </IconButton>
                                <p>Edit Profile</p>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>
                        <div className="hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]">
                            <React.Fragment>
                                <div className="w-full">
                                    <div className="relative">
                                        <img
                                            className='w-full h-[12rem] object-cover object-center'
                                            src={auth.findUser?.backgroundImage || "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"} alt="" />
                                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                            name='backgroundImage'
                                            onChange={handleImageChange} />
                                    </div>
                                </div>
                                <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                                    <div className="realtive">
                                        <Avatar
                                            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                                            src={selectedImage || auth.user?.image } />
                                        <input type="file" className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            name='image'
                                            onChange={handleImageChange} />
                                    </div>
                                </div>
                            </React.Fragment>
                            <div className="space-y-3">
                                <TextField fullWidth id='fullName' name='fullName' label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName} />
                                <TextField fullWidth multiline rows={4} id='bio' name='bio' label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio} />
                                <TextField fullWidth id='website' name='website' label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website} />
                                <TextField fullWidth id='location' name='location' label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location} />
                                <div className='my-3'>
                                    <p className='text-lg'>Birth Date . Edit</p>
                                    <p className='text-2xl'>October 26, 1999</p>
                                </div>
                                <p className='py-3 text-lg'>Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}