import "./css/styles.css"
import { Link } from "react-router-dom"
const Opportunities = ()=>{
    
    const opportunities = [
        {
            id: 0,
            link: "/opportunities",
            title: "Discover the world of AWS -  Free Online Course",
            post: `Calling all aspiring leaders! 🌍 Applications are now OPEN to join the class of 2024 at African Leadership Academy (ALA). Transform Africa by becoming part of this prestigious educational institution.

            ⭐️ ALA's mission is to identify, develop, and connect the future leaders of Africa. It's time to unlock your potential and be a catalyst for Africa's development.
            
            🎓 ALA believes in equal access to education. Financial assistance is available for all successful applicants, regardless of background or nationality.
            
            ✨ Don't miss out on this incredible opportunity to become part of Africa's next generation of leaders.
            
            👉 Visit our website to apply or nominate a young leader today: https://rb.gy/m5g87 `,
            company: "microsoft",
            "company-link": "microsoft.com",
            date: "October 24, 2023"
        },
        {
            id: 1,
            link: "/opportunities",
            title: "APPLICATIONS FOR #YALI 2024 NOW OPEN!!!",
            post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quam repellat eos adipisci. Obcaecati aliquid harum commodi ab eius accusantium quisquam, tempore aspernatur praesentium asperiores iure ullam soluta. Vero!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quam repellat eos adipisci. Obcaecati aliquid harum commodi ab eius accusantium quisquam, tempore aspernatur praesentium asperiores iure ullam soluta. Vero!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quam repellat eos adipisci. Obcaecati aliquid harum commodi ab eius accusantium quisquam, tempore aspernatur praesentium asperiores iure ullam soluta. Vero!`,
            company: "google",
            "company-link": "microsoft.com",
            date: "October 28, 2023"
        }
    ]

    return (
        <>
       
    <body>
        
        {/* <!-- Main Content--> */}
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    {/* <!-- Post preview--> */}

                    {opportunities.map((opportunity, index)=>(
                        <div class="post-preview">
                        <Link to={opportunity.link+"/"+opportunity.id}>
                            <h1 class="post-title">{opportunity.title}</h1>
                            <p class="post-subtitle">{opportunity.post.slice(0, 200)+"..."}</p>
                        </Link>
                        
                        <p class="post-meta">
                            Posted by
                            <a style={{padding: "10px"}} href={opportunity["company-link"]}>{opportunity.company}</a>
                            on {opportunity.date}
                        </p>
                    </div>
                    ))}
                    
                    {/* <!-- Divider--> */}
                    <hr class="my-4" />
                
                    {/* <!-- Pager--> */}
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
        
        <script src="js/scripts.js"></script>
    </body>
        </>
    )
}

export default Opportunities