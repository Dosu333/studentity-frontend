import "./css/styles.css"
import "./css/opportunity.css"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
const Opportunities =  (props)=>{
    const wrapper = useRef(null)
    const [opportunitiesData, setOpportunitiesData] = useState({})
    const [results, setResults] = useState([])
    const [onlineStatus, setOnlineStatus] = useState(false)
    const [nextUrl, setNextUrl] = useState("")
    const [noConnection, setNoConnection] = useState(false)
       
    const scroll = props.scroll
    const timeoutDuration = 5000;
    const initial_url = "https://api.joinstudentity.com/api/v1/opportunity/posts/?page=1&page_size=5";
    
    const timer = setTimeout(() => {
        setNoConnection(true)
      }, timeoutDuration);

    
    const opportunities = (url)=>{
        console.log("url", url)
        fetch(url)
        .then((res)=>{
            clearTimeout(timer)
            return res.json()
        })
        .then((data)=>{
            const newResults = data.results
            clearTimeout(timer)
            setOpportunitiesData(data)
            setNextUrl(data.next)
            setResults([...results,...newResults])
            setOnlineStatus(true)
        })
        .catch((err)=>{
            console.log(err)
            setOnlineStatus(false)
        });
    }
    
    const handleClick = () => {
        window.location.reload()
    }
    
    

    useEffect(()=>{
        opportunities(initial_url)
    }, []);

    
    useEffect(()=>{
        const height = wrapper.current.clientHeight
        if ((height-scroll.y)<800){
            try {
                if (opportunitiesData.links.next != null){
                    opportunities(opportunitiesData.links.next)
                }
                
            } catch (error) {
                
            }
            
        }
    },[scroll])
    

    
    

    return (
        <>
       
    <body>
        
        {/* <!-- Main Content--> */}
        {noConnection&&onlineStatus==false?
            <div class="container my-5 d-flex justify-content-center" >
                <div class="row  justify-content-center ">
                    <div class="col">
                        <div class="card ">
                            <div class="card-body px-sm-4 mb-3">
                                <ul class="list-unstyled text-muted"> <li>To continue using Studentity, please ensure that your internet connection is active.</li> <li>If you encounter any issues, consider the following steps:</li>
                                    <ul class="mt-2 inner">
                                        <li>Restart your device's wireless connection.</li>
                                        <li>Ensure you are in proximity to your wireless access point.</li>
                                        <li>If you continue to face connectivity problems, please reach out to our support team for assistance. We're here to help you get back online.</li>
                                    </ul>    
                                </ul>
                                
                                <div class="row justify-content-end mt-4 "> <div class="col-auto"><button type="button" class="btn btn-success" onClick={handleClick}><span >Try Again</span></button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :""}
        <div ref={wrapper} className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center" >
                {/* check if device is online */}
                {onlineStatus?
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {/* <!-- Post preview--> */}

                    {results.map((opportunity, index)=>(
                        <div className="post-preview">
                            <Link to={'/opportunities/'+opportunity.id}>
                                <h1 className="post-title">{opportunity.title}</h1>
                                <p className="post-subtitle">{opportunity.body.slice(0, 200)+"..."}</p>
                            </Link>
                            
                            <p className="post-meta">
                                Posted by
                                <a style={{padding: "10px"}} href={opportunity["company-link"]}>{opportunity.author}</a>
                                on {opportunity.created_at}
                            </p>
                            <hr className="my-4" />
                        </div>
                    ))}
                    
                    <div style={{marginLeft: "30%"}}><div className="loader"></div></div>
                </div>:
                <div className="loader"></div>}
            </div>
        </div>
        
        
        <script src="js/scripts.js"></script>
    </body>
        </>
    )
}

export default Opportunities