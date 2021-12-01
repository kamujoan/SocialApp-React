
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../firebase'
import Comments from './Comments'
import SendComment from './SendComment'
import "./Comments.css";
import CloseIcon from '@material-ui/icons/Close'


export default function MessageFeed({cancel}) {
    const [messages, setMessages] = useState([])
    const scrollRef = useRef()

const closeComments = () => {
cancel()
 }
    useEffect(()=>{
        db.collection('comments')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map(doc => doc.data())))
    }, [])
    
 useEffect(()=>{
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })  
    }, [messages])

    return (
        <div className='comments'>

            <div className='close'>
                <CloseIcon onClick={closeComments}>Close</CloseIcon>
            </div>
            {messages.map(({ id, profilePic, timestamp, username, text })=>(
                 <div ref={scrollRef}>
                <Comments
                key={id}
                profilePic={profilePic}
                text={text}
                timestamp={timestamp}
                username={username}
                />
                </div>
            ))}
            <SendComment />
            
        </div>
    )
}

