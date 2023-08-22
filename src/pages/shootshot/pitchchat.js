import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../components/7.png";
import avatar2 from "../../components/6.png";
import Typing from "../../components/Typing";


const Pitchdm = () => {
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [messages, setMessage] = useState([
    {
      message: "hello",
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
       
       <div class="col d-flex align-items-lg-center align-items-xl-center border-start border-muted" style={{backgroundColor: "rgba(52,58,64,0.2)",height: "4rem"}}><button class="btn d-block d-sm-block d-md-block d-lg-none d-xl-none border-0 my-auto" type="button" style={{width: "2.5rem",height: "2.5rem"}}><i class="far fa-arrow-alt-circle-left"></i></button>
                            <h5 class="mr-auto my-auto">Google</h5><span class="my-auto"><i class="fas fa-info-circle"></i></span>
                        </div>
       <div class="card-body chatB">
        <div className="chatInside">
          {/* chats Start  */}
          
          {
            messages.map((message, i) => (
              <div className={message.sender === "AI" ? "chatLeft" : "chatRight"} style={i===messages.length-1?{marginBottom: "200px"}:null}>
                 {
                  message.sender==="AI"?
                  <div className="image">
                  <img src={avatar2} alt="" className="img-avatar" />
                  </div>:null
                 }
                  
                <div className={message.sender === "AI" ? "aBody" : "uBody"}>
                  <div className={message.sender === "AI" ? "aContent" : "uContent"}>
                    <div> { isTyping && i === messages.length - 1 && message.sender==="AI" ? <Typing /> : message.message } </div>                  
                  </div>
                  <small className={message.sender==="AI"?"chat-date": "uchat-date"}>
                    <i className={message.sender==="AI" ? "tf-icons bx bx-calendar":" bx bx-calendar"}></i> 22-07-2023 at 09:00
                  </small>
                </div>
                
                 {
                  message.sender === "user" ?
                 <div className="image">
                    <img src={avatar} alt="" className="img-avatar" />
                  </div>: null
                  }
                

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

export default Pitchdm;
