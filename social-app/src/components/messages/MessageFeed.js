
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../firebase'
import Message from './Message'
import SendMessage from './SendMessages'
import "./messages.css";
import Header from '../header/Header';


export default function MessageFeed() {
    const [messages, setMessages] = useState([])
    const scrollRef = useRef()

    useEffect(()=>{
        db.collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map(doc => doc.data())))
    }, [])

    useEffect(()=>{
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })  
    }, [messages])

    return (
      <>
        <Header />
        <div>
          <div className="message">
            <div className="msgs">
              {messages.map(({ id, profilePic, timestamp, username, text, uid }) => (
                <div ref={scrollRef}>
                <Message
                  key={id}
                  profilePic={profilePic}
                  text={text}
                  timestamp={timestamp}
                  username={username}
                 uid={uid}
                />
                </div>
              ))}
              <SendMessage />
            </div>
          </div>
        </div>
      </>
    );
}

