import "./css/styles.css"
import "./css/opportunity.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Opportunities =  ()=>{
    const [opportunitiesData, setOpportunitiesData] = useState({})
    const [results, setResults] = useState([])
    const [onlineStatus, setOnlineStatus] = useState(false)
    const [nextUrl, setNextUrl] = useState("")
    const [noConnection, setNoConnection] = useState(false)
    const timeoutDuration = 5000;
    const initial_url = "https://api.joinstudentity.com/api/v1/opportunity/posts/?page=1&page_size=4";
    
    const timer = setTimeout(() => {
        setNoConnection(true)
      }, timeoutDuration);

    
    const opportunities = (url)=>{
        fetch(url)
        .then((res)=>{
            clearTimeout(timer)
            return res.json()
        })
        .then((data)=>{
            clearTimeout(timer)
            setOpportunitiesData(data)
            setNextUrl(data.next)
            setResults(data.results)
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

    

    
    

    return (
        <>
       
    <body>
        
        {/* <!-- Main Content--> */}
        {noConnection&&onlineStatus==false?
            <div class="container my-5 d-flex justify-content-center">
                <div class="row  justify-content-center ">
                    <div class="col">
                        <div class="card ">
                            <div class="card-header pb-0 bg-white border-0 text-center px-sm-4"><h6 class="text-left mt-4 font-weight-bold mb-0"><span><i class="fa fa-times-circle fa-2x mr-3 " aria-hidden="true"></i> </span > No internet connection</h6> <span class="img-1 text-center"><img src="https://i.imgur.com/cGXM38s.png" class="img-fluid my-4 " /></span> </div>
                            <div class="card-body px-sm-4 mb-3">
                                <ul class="list-unstyled text-muted"> <li>Please re-connect to the internet to continue use Footsteps.</li> <li>If you encounter problems:</li>
                                    <ul class="mt-2 inner">
                                        <li>Try restarting wireless connection on this device.</li>
                                        <li>Move clouse to your wireless access point.</li>
                                    </ul>    
                                </ul>
                                <div class="row justify-content-end mt-4 "> <div class="col-auto"><button type="button" class="btn btn-success" onClick={handleClick}><span >Try Again</span></button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :""}
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
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
                        </div>
                    ))}
                    
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
                
                    {/* <!-- Pager--> */}
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