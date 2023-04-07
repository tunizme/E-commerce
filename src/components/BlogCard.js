import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          className="img-fluid w-100 d-block"
          src="../images/blog-1.jpg"
          alt="blog"
        />
      </div>
      <div className="card-content p-3">
        <p className="date">11 JUNE, 2022</p>
        <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
        <p className="desc">
          You're Only As Good As Your Last Conllection, Which Is An Enormous
          Pressure. I Think There Is Something About...
        </p>
        <Link className="button mt-0">READ MORE</Link>
      </div>
    </div>
  );
};

export default BlogCard;
