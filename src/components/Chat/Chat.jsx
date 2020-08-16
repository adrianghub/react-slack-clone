import React,{ useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState('');
  const [roomMessages, setRoomMessages] = useState('');

  useEffect(() => {
    if(roomId) {
      db.collection('rooms')
      .doc(roomId)
      .onSnapshot(snapshot => {
        setRoomDetails(snapshot.data());
      })
      db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot =>
        setRoomMessages(
          snapshot.docs.map(doc => doc.data())
        )
      )
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__channelName">
  <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </div>
        </div>
        <div className="chat__headerRight">
          <p>
        <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {/* Loop through all the messages */}
      </div>

    </div>
  );
};

export default Chat;