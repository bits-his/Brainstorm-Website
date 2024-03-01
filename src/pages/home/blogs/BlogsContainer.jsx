import "./blogs.css";
import Scroll from "../../../Components/scroll/Scroll";
import BlogsCard from "../../../pages/blog/BlogsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';

export default function BlogsContainer({refi}) {
  const [blog,setBlog] = useState([])
  const [loading, setLoading] = useState(true);


  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click
  const handleClick = () => {
    // Set isLoading to true to trigger the loading animation
    setIsLoading(true);

    // Simulate an async operation (e.g., fetching data from an API)
    setTimeout(() => {
      // Once the operation is completed, set isLoading back to false
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay
  };


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
          </div>
          <div className="blog-link">
            <Link to='blog'>
              <button className="loading-button" onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'View blog'}
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}