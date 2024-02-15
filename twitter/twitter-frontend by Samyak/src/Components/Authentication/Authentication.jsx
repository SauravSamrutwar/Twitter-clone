import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import AuthModal from './AuthModel'
import { useNavigate } from 'react-router-dom'

export const Authentication = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const handleOpenAuthModel = (event) => {
    setOpenAuthModel(true);
    event.target.innerText === "CREATE ACCOUNT" ? navigate("/signup") : navigate("/signin")
  }
  const handleCloseAuthModel = () => setOpenAuthModel(false);

  const navigate = useNavigate();

  return (
    <div>
      <Grid className='overflow-y-hidden' container>
        <Grid className='hidden lg:block' item lg={7}>
          <img className='w-full h-screen' src="https://wepik.com/api/image/ai/9b47fd71-2a45-47bd-a2e5-4358ebac73b0?upscaled=1&size=2" alt="" />
          <div className="absolute top-[26%] left-[19%]">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300" height="300" viewBox="0 0 24 24">
              <g opacity=".3"><polygon fill="#fff" fill-rule="evenodd" points="16.002,19 6.208,5 8.255,5 18.035,19" clip-rule="evenodd"></polygon><polygon points="8.776,4 4.288,4 15.481,20 19.953,20 8.776,4"></polygon></g><polygon fill-rule="evenodd" points="10.13,12.36 11.32,14.04 5.38,21 2.74,21" clip-rule="evenodd"></polygon><polygon fill-rule="evenodd" points="20.74,3 13.78,11.16 12.6,9.47 18.14,3" clip-rule="evenodd"></polygon><path d="M8.255,5l9.779,14h-2.032L6.208,5H8.255 M9.298,3h-6.93l12.593,18h6.91L9.298,3L9.298,3z"></path>
            </svg>
          </div>
        </Grid>
        <Grid className='px-10' lg={5} sm={12}>
          <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>
            <h1 className='font-bold text-3xl py-16'>Join Twitter Clone Today</h1>
            <div className="w-[60%]">
              <div className="w-full">
                <GoogleLogin width={330} />
                <p className='py-5 text-center'>OR</p>
                <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{ borderRadius: "29px", py: "7px" }}>Create Account</Button>
                <p className='text-sm mt-2'>By signing up, you agree to the Term of Service and Privacy Policy, including Cookie Use.</p>
              </div>
              <div className='mt-10'>
                <h1 className='font-bold text-xl mb-5'>Already Have Account?</h1>
                <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{ borderRadius: "29px", py: "7px" }}>Login</Button>
              </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel} />
    </div>

  )
}
