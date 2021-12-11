import React from "react";
import book from "../images/book.jpg";
import "./resource.css";
const Resource = () => {
  return (
    <div className="resource-section">
      <div className="resource-wrapper">
        <div className="resource-title">EXPLORE OUR RESOURCES</div>
        <div className="resource-info">
          <img src={book} alt="" className="resource-img" />
          <div className="resource-info-right">
            <div className="resource-heading">
              Pakistan's Largest Online BookStores
            </div>
            <div className="resource-paragraph">
              Dazzling debut novels, searing polemics, the history of humanity
              and trailblazing memoirs. Read our pick of the best books since
              2000.Search the world's most comprehensive index of full-text
              books. My library · PublishersAboutPrivacyTermsHelp.Here you'll
              find current best sellers in books, new releases in books, deals
              in books, Kindle eBooks, Audible audiobooks, and so much more. We
              have popular .
            </div>
            <button className="btn-resource">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
