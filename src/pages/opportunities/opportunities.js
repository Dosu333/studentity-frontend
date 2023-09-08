import "./css/styles.css"
import "./css/opportunity.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Opportunities =  ()=>{
    const [opportunitiesData, setOpportunitiesData] = useState({})
    const [results, setResults] = useState([])
    const [onlineStatus, setOnlineStatus] = useState(false)
    
    const opportunities = ()=>{
            fetch("https://api.joinstudentity.com/api/v1/opportunity/posts/?page=1&page_size=4")
                    .then((res)=>{
                        return res.json()
                    })
                    .then((data)=>{
                        setOpportunitiesData(data)
                        setResults(data.results)
                        setOnlineStatus(true)
                    })
                    .catch((err)=>{
                        setOnlineStatus(false)
                    });
    }

    window.addEventListener("online", function() {
        console.log("connected")
      })
      
      window.addEventListener("offline", function() {
        console.log("Disconnected...so sad!!!")
      })
    const checkOnlineStatus = () => {
        //console.log(navigator.onLine)
        
    };
    
    useEffect(()=>{
        checkOnlineStatus()
        opportunities()
    }, [])

    

    
    

    return (
        <>
       
    <body>
        
        {/* <!-- Main Content--> */}
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
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