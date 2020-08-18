import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../firebase";

import Message from "../Message/Message";
import ChatInput from "../ChatInput/ChatInput";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <ScrollToBottom className="chat">
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
          {roomMessages.map(({ message, user, userImage, timestamp }) => (
            <Message
              user={user}
              userImage={userImage}
              message={message}
              timestamp={timestamp}
            />
          ))}
        </div>
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </ScrollToBottom>
  );
};

export default Chat;
