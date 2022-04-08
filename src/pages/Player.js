import React from 'react';
import './Player.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Icon } from 'web3uikit';

const Player = () => {

  const { state: currentlyPlaying } = useLocation();
  return (
    <>
      <div className='playerPage'><div className='backHome'>
          <Link to='/'>

            <Icon
              className='backButton'
              fill='rgba(255,255,255,0.2)'
              size={60}
              svg='arrowCircleLeft'
            />
          </Link>
        </div>
        <video autoPlay controls className='videoPlayer'>
          <source
            src={currentlyPlaying}
            type='video/mp4'
          >
          </source>
        </video>
        
      </div>
    </>
  )
}

export default Player;
