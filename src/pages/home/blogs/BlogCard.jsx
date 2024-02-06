import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function BlogCard({ img, headline, details }) {
  return (
    <>
      <div className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
        <div className="home-blog-main">
          <div className="home-blog-img mb-3">
            <img src={img} alt="blog1" />
          </div>
          <div className="home-blog-content mb-4">
            <h3>
              <Link to="/">{headline}</Link>
            </h3>
            <p>{details}</p>
            <Link to="/" className="read-more">
              Read more{" "}
              <span className="animated-arrow">
                <HiArrowNarrowRight size={20} color="black" fontWeight={600} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
