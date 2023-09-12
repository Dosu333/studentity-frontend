import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import placeholder_image_left from "../../assets/img/elements/12.jpg"
import avatar from "../../assets/img/avatars/1.png"


const Post = ()=>{
    const [post, setPost] = useState({})
    let id = useParams().id
    const response = ()=>{
       
            fetch("https://api.joinstudentity.com/api/v1/opportunity/posts/"+id)
            .then((res)=>{
                        return res.json()
                    }
                )
            .then((data)=>{
                        setPost(data)
                    }
                )
            .catch(err=>{

            });


    }

    useEffect(()=>{
        response()
    },[])
    
    return (
        
        <body>
            <div class="container-xxl" style={{marginTop: "5%"}}>
                <div class="col">
                  <div class="card h-100">
                    <img class="card-img-top" src={placeholder_image_left} style={{height: "150px"}} alt="Card image cap" />
                    <div class="card-body">
                      <h2 class="d-flex card-title justify-content-left">{post.title}</h2>
                      <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar" style={{marginTop: "5%"}}>
                              <img src={avatar} alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block">{post.author}</span>
                            <small class="text-muted">{post.created_at}</small>
                          </div>
                        </div>
                      <p class="card-text" style={{marginTop: "10%"}}>
                            {post.body}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        
        </body>
    )
}

export default Post;