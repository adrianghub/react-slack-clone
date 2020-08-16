import React from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__channelName">
            <strong># general</strong>
            <StarBorderIcon />
          </div>
        </div>
        <div className="chat__headerRight">
          <p>
        <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;