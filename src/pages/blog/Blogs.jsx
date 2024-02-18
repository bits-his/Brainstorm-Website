import BlogsCard from "./BlogsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import "./blogs.css"


export default function Blogs() {
  const [blog,setBlog] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  // Calculation for index range of cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;


  // This is to handle the pagination button clicks
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const post = ()=>{
    fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Blog Post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "John Doe",
        id:0,
        date:Date()
        // Add any other attributes you need for the new blog post
      }),
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New blog post created:", data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error creating blog post:", error);
        // Handle the error
      });
      fetch('/api/blogs/')
      .then(res =>res.json())
      .then(data => (setBlog(data.blogs)))
      .catch(e=>console.log(e))
  }
  useEffect(()=>{
    fetch('/api/blogs/')
    .then(res =>res.json())
    .then(data => (setBlog(data.blogs)))
    .catch(e=>console.log(e))
  },[])
  
  const currentCards = blog.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <>
        <div className="blog-head-img mb-5">
            <div className="container">
                <div>Blog</div>
            </div>
            <div className="strip blue"></div>
            <div className="strip red"></div>
        </div>
        <div>

        </div>
        <div className="container">
            <div className="card-pagination">
                <div className="card-list row">
                    {currentCards.map((card, index) => (
                    <Link to={"/blog/blogdetails/"+card.id}  key={index} className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
                      <BlogsCard key={index} {...card} />
                    </Link>
                    ))}
                </div>
                <div className="pagination-buttons mb-4 mt-3">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><HiArrowNarrowLeft size={20} fontWeight={600} /></button>
                    <span className="current-page">{currentPage}</span>
                    <button onClick={handleNextPage} disabled={indexOfLastCard >= blog.length}><HiArrowNarrowRight size={20} fontWeight={600} /></button>
                </div>
            </div>
            <button onClick={post}>
              post
            </button>
        </div>
    </>
  );
}
