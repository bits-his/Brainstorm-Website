import BlogsCard from "./BlogsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import "./blogs.css"
import { Spinner } from 'react-bootstrap';


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
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://server.brainstorm.ng/bits-blog/get_blog?query_type=select")
      .then((res) => res.json())
      .then((data) => setBlog(data.data)(setLoading(false)))
      .catch((e) => console.log(e));
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
              {loading ? ( // Display loading indicator while data is being fetched
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 p-3 mb-4 spinner-box">
                    <Spinner animation="grow" variant="primary" />
                  </div>
                  
                </div>
                ) : (
                  <div className="card-list row">
                      {currentCards.map((card, index) => (
                      <Link to={"/blog/blog_details/"+card.id}  key={index} className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
                        <BlogsCard key={index} card={card} />
                      </Link>
                      ))}
                  </div>
                )
              }
                <div className="pagination-buttons mb-4 mt-3">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><HiArrowNarrowLeft size={20} fontWeight={600} /></button>
                    <span className="current-page">{currentPage}</span>
                    <button onClick={handleNextPage} disabled={indexOfLastCard >= blog.length}><HiArrowNarrowRight size={20} fontWeight={600} /></button>
                </div>
            </div>
        </div>
    </>
  );
}
