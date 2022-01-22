import React, { useState } from "react";
import "./chat.scss";
import MicSvg from "../../Assets/Svg/Mic.svg";
import {UpdateMessages, SelectMessages, SelectUsers} from "./ChatSlice";
import {SelectUser} from "../LoggedInUserSplice"
import { useSelector, useDispatch } from "react-redux";
const Chat = () => {
    const msg = useSelector(SelectMessages);
    const users = useSelector(SelectUsers);
    const CurrentUser = useSelector(SelectUser)
    console.log(CurrentUser)
    const dispatch = useDispatch()
    const [message, setMessage] = useState(msg)
    const [currmsg, setCurrMsg] = useState("")

    const  sendMessage = (e) =>{
        if(e.keyCode === 13 && currmsg.length){
           dispatch(UpdateMessages([...message, {
            name: CurrentUser.UserName,
            image: CurrentUser.image,
            text: currmsg,
            time: "10:00 AM"
        },])) 
            setMessage((prevMessage) => [...prevMessage, {
                name: CurrentUser.UserName,
                image: CurrentUser.image,
                text: currmsg,
                time: "10:00 AM"
            },])
            setCurrMsg("")
        }
    }
  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-head-text">
          <span className="chat-head-text-member">
            Member <span className="chat-head-text-member-num">(25)</span>
          </span>{" "}
          <span className="chat-head-text-view">View All</span>
        </div>
        <div className="chat-head-persons">
            {users.map((e,el)=>{
                return <span className="chat-head-persons-img"><img src={e.image} alt={e.name+"Img"}/><span className={e.isOnline ? "chat-head-persons-online" : "chat-head-persons-ofline"}></span></span>
            })}
        </div>
      </div>

      <div className="chat-groupchat">
        <div className="chat-groupchat-container">
          <span className="chat-groupchat-container-heading">Group Chat</span>
          <ul className="chat-groupchat-container-chatbox">
            {message.map((e, el) => {
              return (
                <li
                  className={
                    e.name === CurrentUser.UserName
                      ? "chat-groupchat-container-chatbox-item chat-groupchat-container-chatbox-item-me"
                      : "chat-groupchat-container-chatbox-item"
                  }
                >
                  <div
                    className={
                      e.name === CurrentUser.UserName
                        ? "chat-groupchat-container-chatbox-item-message chat-groupchat-container-chatbox-item-message-me"
                        : "chat-groupchat-container-chatbox-item-message"
                    }
                  >
                    <img src={e.image} alt="user img" />{" "}
                    <span
                      className={
                        e.name === CurrentUser.UserName
                          ? "chat-groupchat-container-chatbox-item-message-text chat-groupchat-container-chatbox-item-message-text-me"
                          : "chat-groupchat-container-chatbox-item-message-text"
                      }
                    >
                      {e.text}
                    </span>
                  </div>
                  <span className="chat-groupchat-container-chatbox-item-time">
                    {e.time}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="chat-inputbox">
        <div className="chat-inputbox-container">
          <input type="text" value={currmsg} placeholder="Write here..." onChange={(e)=> setCurrMsg(e.target.value)} onKeyDown={sendMessage}/>
        </div>
        <img  src={MicSvg} alt="mic svg"/>
        <span className="chat-inputbox-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
};

export default Chat;
