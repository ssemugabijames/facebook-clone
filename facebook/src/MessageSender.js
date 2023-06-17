import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material';
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from 'firebase';
function MessageSender() {
const [{ user }, dispatch] = useStateValue();
const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
db.collection('posts').add({
  message: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  profilePic: user.photoURL,
  username: user.displayName,
  image: imageUrl, 
})
setInput("");
setImageUrl("");




};
  return (
    <div className="MessageSender">
        <div className="MessageSender__top">
         <Avatar  src={user.photoURL} />
         <form>
            <input value={input} onChange={(e) => setInput(e.target.value)}  className="MessageSender__input" placeholder={`Whats on your Mind', ${user.displayName}?`} /> 
            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="image URL (Optional)" />
            <button onClick={handleSubmit} type="submit">

            </button>   
         </form>
        </div>
        <div className="MessageSender__bottom">
         <div className="MessageSender__option">
         <VideocamIcon style={{ color: "red"}} />
         <h3>Live Video</h3>
         </div>
         <div className="MessageSender__option">
         <PhotoLibraryIcon style={{ color: "green"}} />
         <h3>Photo/Video</h3>
         </div>
         <div className="MessageSender__option">
         <InsertEmoticonIcon style={{ color: "orange"}} />
         <h3>Feeling/Activity</h3>
         </div>
        </div>

    </div>
  )
}

export default MessageSender