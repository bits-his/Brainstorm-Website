import BlogsCard from "./BlogsCard";
import blog1 from "../../assets/img/blog1-5-510x400.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import "./blogs.css"

const cards = [
  {
    id: 1,
    img: blog1,
    title: "card1",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 2,
    img: blog1,
    title: "card2",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 3,
    img: blog1,
    title: "card3",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 4,
    img: blog1,
    title: "card4",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 5,
    img: blog1,
    title: "card5",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 6,
    img: blog1,
    title: "card6",
    date: "March 23, 2024 _ IT future Service",
  },
  {
    id: 7,
    img: blog1,
    title: "card7",
    date: "March 23, 2024 _ IT future Service",
  },
  // This is where and how the Api comes
];

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculation for index range of cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // This is to handle the pagination button clicks
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
        <div className="blog-head-img mb-5">
            <div className="container">
                <div>Blog</div>
            </div>
            <div className="strip blue"></div>
            <div className="strip red"></div>
        </div>
        <div className="container">
            <div className="card-pagination">
                <div className="card-list row">
                    {currentCards.map((card, index) => (
                    <Link to={"/blog/blogdetails/"+card.id} className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
                      <BlogsCard key={index} {...card} />
                    </Link>
                    ))}
                </div>
                <div className="pagination-buttons mb-4 mt-3">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}><HiArrowNarrowLeft size={20} fontWeight={600} /></button>
                    <span className="current-page">{currentPage}</span>
                    <button onClick={handleNextPage} disabled={indexOfLastCard >= cards.length}><HiArrowNarrowRight size={20} fontWeight={600} /></button>
                </div>
            </div>
        </div>
    </>
  );
}
