import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { db, auth } from "../../firebase";
import firebase from "firebase";


export default function SendMessage({cancel}) {
  const [msg, setMsg] = useState("");


  const sendMessage = (e) => {
    e.preventDefault();
    setMsg("");

  const { displayName, photoURL } = auth.currentUser;

    db.collection("comments").add({
      text: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: photoURL,
      username: displayName,
   
    });

  };
 
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div>
          <Input
            style={{ width: "55%" }}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message..."
          />
          
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}





