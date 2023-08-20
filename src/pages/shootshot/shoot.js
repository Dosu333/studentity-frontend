import { red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../components/7.png";
import avatar2 from "../../components/6.png";
import Typing from "../../components/Typing";



const Shoot = () => {
    const messagesEndRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');
    const [messages, setMessage] = useState([
      {
        message: "Hello there",
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
        <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-xl-4">
                <div class="row">
                    <div class="col d-flex flex-nowrap justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center py-2" style={{backgroundColor: "rgba(52,58,64,0.2)",height: "4rem"}}>
                        <h5 class="mr-auto my-auto">Shoot your shot</h5><button class="btn shadow-none border-0 my-auto" type="button" style={{width: "2.5rem",height: "2.5rem;"}}><i class="far fa-comment-alt"></i></button>
                    </div>
                </div>
                <div class="row px-3 py-2">
                    <div class="col" style={{borderRadius: "25px",boxShadow: "0px 0px 5px var(--gray-dark)"}}>
                        <form class="d-flex align-items-center px-2"><i class="bx bx-search"></i><input class="shadow-none form-control flex-shrink-1" type="search" placeholder="Busca un chat o inicia uno nuevo" style={{borderRadius: "13px", borderStyle: "none"}}></input></form>
                    </div>
                </div>
                <div class="row">
                    <div class="col" style={{overflowX: "none",overflowY: "auto", maxHeight: "32.5rem", height: "auto"}}>
                        <ul class="list-unstyled">
                            <li style={{cursor:"pointer"}}>
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style={{width: "2rem",height: "2rem",borderRadius: "15px",backgroundColor: "#00db5f"}}>1</span>
                                        <h4 class="text-nowrap text-truncate card-title">Ximena Samano</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style={{fontSize: ".7rem"}}>19 de Julio de 2021, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{cursor:"pointer"}}>
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style={{width: "2rem",height: "2rem",borderRadius: "15px",backgroundColor: "#00db5f"}}>1</span>
                                        <h4 class="text-nowrap text-truncate card-title">Gibran Ojeda</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style={{fontSize: ".7rem"}}>19 de Julio de 2021, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Boke, GB, Boke!</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{cursor:"pointer"}}>
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style={{width: "2rem",height: "2rem", borderRadius: "15px",background: "#00db5f"}}>10</span>
                                        <h4 class="text-nowrap text-truncate card-title">Rebeca H.</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style={{fontSize: ".7rem"}}>19 de Julio de 2021, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                            <li style={{cursor:"pointer"}}>
                                <div class="card border-0">
                                    <div class="card-body"><span class="text-nowrap text-truncate text-uppercase text-white float-end p-1 text-center" style={{width: "2rem", height: "2rem",borderRadius: "15px",background: "#00db5f"}}>5</span>
                                        <h4 class="text-nowrap text-truncate card-title">Laura D.</h4>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2" style={{fontSize: ".7rem"}}>19 de Julio de 2021, 11:53 AM</h6>
                                        <h6 class="text-nowrap text-truncate text-muted card-subtitle mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit sit amet dolor eu dignissim.</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div class="row">
                    <div class="col d-flex align-items-lg-center align-items-xl-center border-start border-muted" style={{backgroundColor: "rgba(52,58,64,0.2)",height: "4rem"}}><button class="btn d-block d-sm-block d-md-block d-lg-none d-xl-none border-0 my-auto" type="button" style={{width: "2.5rem",height: "2.5rem"}}><i class="far fa-arrow-alt-circle-left"></i></button>
                        <h5 class="mr-auto my-auto">Ximena Samano</h5><span class="my-auto"><i class="fas fa-info-circle"></i></span>
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
        
        
      </div>
    
                </div>
                <div class="row px-3 py-2 border-start border-muted">
                    
                </div>
                <div class="row px-3 py-2" style={{backgroundColor: "rgba(52,58,64,0.2)"}}>
                    <div class="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10" style={{padding: 0}}><textarea class="w-100 h-100 border-0" style={{borderRadius: "25px", resize: "none"}}></textarea></div>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-nowrap d-md-flex justify-content-md-end p-0"><button class="btn btn-light h-100 w-auto" type="button" style={{borderRadius: "10px"}}><i class="bx bx-send"></i></button></div>
                </div>
            </div>
        </div>
    </div>
</body>
    );
};

export default Shoot;
