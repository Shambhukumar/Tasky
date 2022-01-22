import React from "react";
import "./chat.scss";
import { messages, users } from "./data";
import MicSvg from "../../Assets/Svg/Mic.svg"
const Chat = () => {
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
            {messages.map((e, el) => {
              return (
                <li
                  className={
                    e.name === "Jake"
                      ? "chat-groupchat-container-chatbox-item chat-groupchat-container-chatbox-item-me"
                      : "chat-groupchat-container-chatbox-item"
                  }
                >
                  <div
                    className={
                      e.name === "Jake"
                        ? "chat-groupchat-container-chatbox-item-message chat-groupchat-container-chatbox-item-message-me"
                        : "chat-groupchat-container-chatbox-item-message"
                    }
                  >
                    <img src={e.image} alt="user img" />{" "}
                    <span
                      className={
                        e.name === "Jake"
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
          <input type="text" placeholder="Write here..." />
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
