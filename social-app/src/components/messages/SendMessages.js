import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { db, auth } from "../../firebase";
import firebase from "firebase";
import "./messages.css";


export default function SendMessage() {
  const [msg, setMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMsg("");

      const { displayName, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: photoURL,
      username: displayName,
   
    });
   
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        
          <Input
            style={{ width: "20rem"}}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message..."
          />

          <Button type="submit">Send</Button>
      
      </form>
    </div>
  );
}





