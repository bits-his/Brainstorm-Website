import "./blogs.css";
// import BlogCard from "./BlogCard";
// import blog1 from "../../../assets/blog/Bootcamp 1.jpg";
// import blog2 from "../../../assets/blog/BUK Students Visit.jpg";
// import blog3 from "../../../assets/blog/Workshop.jpg";
import Scroll from "../../../Components/scroll/Scroll";
import BlogsCard from "../../../pages/blog/BlogsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';

export default function BlogsContainer({refi}) {
  const [blog,setBlog] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://bits-blog-faef777253aa.herokuapp.com/api/get_blog?ORDERBY=DESC')
    .then(res =>res.json())
    .then(data => (setBlog(data.data.slice(0,3))) (setLoading(false)))
    .catch(e=>console.log(e))
  },[])

  return (
    <div id="blog" ref={refi}>
      <div className="story">

        <Scroll title={"Our recent stories"} page={'blog'}/>
        <div className="container">
          <div className="row">
          {loading ? ( 
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                </div>
                ) : (
                  <div className="card-list row">
                      {blog.map((card, index) => (
                      <Link to={"/blog/blog_details/"+card.id}  key={index} className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
                        <BlogsCard key={index} card={card} />
                      </Link>
                      ))}
                  </div>
                )
              }
            {/* <BlogCard img={blog1} 
              title={"Free Javascript Bootcamp at Bayero University Kano"} 
              id={1}
              description={`On the 9th - 10th January 2024, Brainstorm IT Solutions organized a 
              JavaScript Boot camp at the Department of Software Engineering Bayero University Kano. 
              With the rapidly evolving technology landscape, we believe that equipping students with 
              practical programming skills is essential for their future success.`} 
              date={"November 16, 2023"} 
            />
            <BlogCard img={blog2} 
              title={"Computer Science Department BUK Students visits Brainstorm"} 
              description={`The Students of Computer Science Department of 
              Bayero University Kano (BUK) paid an educational visit to Brainstorm Innovation Hub to get some .`} 
              date={"November 16, 2023"} 
              id={2}
            />
            <BlogCard img={blog3} 
            title={"2 Days Workshop with Ministry of Finance Kano"} 
            description={`Brainstorm organise a 2 days workshop for the ministry of finance, 
            budget and planning in which the of the platforms developed by brainstorm were lucnched`} 
            date={"November 16, 2023"} 
            id={3}
            /> */}
            
          </div>
          <div className="find-more">
            <Link to='blog' >
              Blog 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}