import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../components/7.png";
import avatar2 from "../components/6.png";
import Typing from "../components/Typing";


const Chat = () => {
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [messages, setMessage] = useState([
    {
      message: "Welcome, Are you ready to build your cv?",
      sender: "AI"
    }
  ])

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  
  function handleSubmit(){
    if (isTyping || textareaValue===""){
      return
    }
    scrollToBottom()
    console.log(textareaValue)
    messages.push(
      {
        message: textareaValue,
        sender: "user"
      }
    )
    setMessage(messages)
    getAIresponse()
    setTextareaValue("")

  }

  function getAIresponse(){
    setIsTyping(true)
    messages.push({
      message: "AI response",
      sender: "AI"
    })
    setMessage(messages)
    

  }
  return (
    <div
      className="container-xxl flex-grow-1 container-p-y"
      style={{ overflow: "hidden" }}
    >
       
      
      <div class="card-body chatB">
        <div className="chatInside">
          {/* chats Start  */}
          
          {
            messages.map((message, i) => (
              <div className={message.sender === "AI" ? "chatLeft" : "chatRight"} style={i===messages.length-1?{marginBottom: "200px"}:null}>
                  <div className="image">
                    <img src={message.sender==="AI"?avatar2:null} alt="" className="img-avatar" />
                  </div>
                <div className={message.sender === "AI" ? "aBody" : "uBody"}>
                  <div className={message.sender === "AI" ? "aContent" : "uContent"}>
                    <div> { isTyping && i === messages.length - 1 && message.sender==="AI" ? <Typing /> : message.message } </div>                  
                  </div>
                  <small className={message.sender==="AI"?"chat-date": "uchat-date"}>
                    <i className={message.sender==="AI" ? "tf-icons bx bx-calendar":" bx bx-calendar"}></i> 22-07-2023 at 09:00
                  </small>
                </div>
                <div className="image">
                  <img src={message.sender === "user" ? avatar : null} alt="" className="img-avatar" />
                </div>
              </div>
            ))
          }
          <div ref={messagesEndRef}/>
          <div  />
          
          {/* chats End */}
        </div>
        
        {/* SendArea  */}
        <div class=" byr">
          <div className="add">
            <button
              type="button"
              className="btn btn-icon btn-outline-secondary"
              style={{ padding: "30px 0" }}
            >
              <span class="tf-icons bx bx-dots-vertical-rounded"></span>
            </button>
          </div>
          <div class="input-group input-group-merge ">
            <textarea
              placeholder="Send a message"
              className="form-control txtArea"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            ></textarea>
          </div>
          <div className="add">
            <button
              type="button"
              class="btn btn-icon btn-primary"
              style={{ padding: "30px 0" }}
              onClick={handleSubmit}
            >
              <span class={isTyping?"tf-icons bx bx-stop":"tf-icons bx bx-send"} style={{fontSize: '32px'}}></span>
            </button>
          </div>
        </div>
        {/* sendArea  */}
      </div>
    </div>
  );
};

export default Chat;
