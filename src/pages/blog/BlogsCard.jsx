import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

export default function BlogCard({ img, title, date }) {
  return (
    <>
      <Link to="/blog/blogdetails" className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
        <div className="home-blog-main">
          <div className="home-blog-img mb-3">
            <img src={img} alt="blog1" />
            <div className="home-blog-img-click">
              <FaPlus size={20} fontWeight={600} color="white" />
            </div>
          </div>
          <div className="home-blog-content mb-4">
            <small>{date}</small>
            <h3>
              <Link to="/blog/blogdetails">{title}</Link>
            </h3>
            <Link to="/blog/blogdetails" className="read-more">
              Read more{" "}
              <span className="animated-arrow">
                <HiArrowNarrowRight size={20} fontWeight={600} />
              </span>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}