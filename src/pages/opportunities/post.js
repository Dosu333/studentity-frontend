import { useParams } from "react-router-dom";

const Post = ()=>{
    let id = useParams().id
    
    const opportunities = [
        {
            id: 0,
            link: "/post",
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
            link: "/post",
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
        
        <body>
        
        <header class="masthead" style={{backgroundImage: "url(assets/img/post-bg.jpg)"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{opportunities[id].title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        {opportunities[id].post}
                    </div>
                </div>
            </div>
        </article>
        
        <script src="js/scripts.js"></script>
    </body>
    )
}

export default Post;