import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

export default function BlogCard({ img, title, date }) {
  return (
    <>
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
            {title}
          </h3>
          <Link className="read-more">
            Read more{" "}
            <span className="animated-arrow">
              <HiArrowNarrowRight size={20} fontWeight={600} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}