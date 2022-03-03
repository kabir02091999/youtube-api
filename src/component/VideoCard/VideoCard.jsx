import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css'
import { useNavigate } from "react-router-dom";

const VideoCard = ({Id ,image, title, channel, views, timestamp, channelImage}) => {
    
    const historia=useNavigate()
    
    return ( 

        <div className='videocard' onClick={()=>(historia(`/video/${Id}`))} >

            <img className='videocard__image' src={image} alt=''  />
            <div className='videocard__info'>

                <Avatar
                    className='videocard__avatar'
                    alt={channel}
                    src={channelImage}
                />
                <div className='videocard__text'>

                    <h2>{title}</h2>
                    <p>{channel}</p>
                    <p>{views} views {timestamp}</p>

                </div>

            </div>

        </div>

     );
}
 
export default VideoCard;