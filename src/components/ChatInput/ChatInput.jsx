import React, { useState } from 'react';
import './ChatInput.css';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';
import db from '../../firebase';

const ChatInput = ({ channelName, channelId }) => {

  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const handleSendMessage = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput('');
    }
  };

  const handleInputChange = (e => setInput(e.target.value));

  return (
    <div className="chatInput">
      <form>
        <input
        value={input}
        onChange={handleInputChange}
        placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={handleSendMessage}>SEND</button>
      </form>
    </div>
  );
};

export default ChatInput;