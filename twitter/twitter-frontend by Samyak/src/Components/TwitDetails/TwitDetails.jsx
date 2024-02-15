import React, { useEffect } from 'react';
import KeyboardBackSpaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findTwitsById } from '../../Store/Twit/Action';

const TwitDetails = () => {
    const navigate = useNavigate();
    const handleBackspace = () => navigate(-1);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { twit } = useSelector(store => store);

    useEffect(() => {
        if (id) {
            dispatch(findTwitsById(id));
        }
    }, [])

    return (
        <React.Fragment>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackSpaceIcon className='cursor-pointer' onClick={handleBackspace} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Tweet</h1>
            </section>
            <section>
                <TweetCard item={twit.twit} />
                <Divider sx={{ margin: "2rem 0" }} />
            </section>
            <section>
                {twit.twit?.replyTwits.map((item) => <TweetCard item={item} />)}
            </section>
        </React.Fragment>
    )
}

export default TwitDetails