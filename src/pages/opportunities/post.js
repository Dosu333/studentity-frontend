import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
        
        <header class="masthead" style={{backgroundImage: "url(assets/img/post-bg.jpg)", paddingTop: "0%"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{post.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        {post.body}
                    </div>
                </div>
            </div>
        </article>
        
    </body>
    )
}

export default Post;