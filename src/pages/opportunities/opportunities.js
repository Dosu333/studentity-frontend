import "./css/opportunity.css"
import placeholder_image_left from "../../assets/img/elements/12.jpg"
import placeholder_image_right from "../../assets/img/elements/17.jpg"
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
                <div ref={wrapper} className="container-xxl flex-grow-1 container-p-y">
                        {/* check if device is online */}
                        
                        {onlineStatus?
                        <div className="">
                            {/* <!-- Post preview--> */}
                            <div class="row mb-5">
                                {results.map((opportunity, index)=>(
                                    index%2==0?<Link to={'/opportunities/'+opportunity.id} className="col-md-6 col-xl-5">
                                        <div class="">
                                            <div class="card mb-3">
                                                <div class="row g-0">
                                                    <div class="col-md-4">
                                                        <img class="card-img card-img-left" style={{height: "100%"}} src={placeholder_image_left} alt="Card image" />
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="card-body" style={{height: "200px"}}>
                                                            <h5 class="card-title">{opportunity.title}</h5>
                                                                <p class="card-text">
                                                                {opportunity.body.slice(0,20)+"..."}
                                                                </p>
                                                            <p class="card-text"><small class="text-muted">Posted by
                                                            <a style={{padding: "10px", fontWeight: "bold"}} href={opportunity["company-link"]}>{opportunity.author}</a>
                                                            on {opportunity.created_at}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>:
                                    <Link to={'/opportunities/'+opportunity.id} className="col-md-6 col-xl-5">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                            <div class="col-md-8">
                                                <div class="card-body" style={{height:"200px"}}>
                                                <h5 class="card-title">{opportunity.title}</h5>
                                                <p class="card-text">
                                                    {opportunity.body.slice(0,20)+"..."}
                                                </p>
                                                <p class="card-text"><small class="text-muted">Posted by
                                                            <a style={{padding: "10px", fontWeight: "bold"}} href={opportunity["company-link"]}>{opportunity.author}</a>
                                                            on {opportunity.created_at}</small></p>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <img class="card-img card-img-right" style={{height: "100%"}} src={placeholder_image_right} alt="Card image" />
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="loader"></div>  
                            
                        </div>:
                        <div className="loader"></div>}
                    </div>

        </>
    )
}

export default Opportunities