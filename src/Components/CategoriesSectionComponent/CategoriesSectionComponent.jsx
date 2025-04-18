import "./CategoriesSectionComponent.css";
import { CategoriesData } from "../../Data/CategoriesData";
import TitleComponent from "../TitleComponent/TitleComponent";
import CategoryCardComponent from "../CategoryCardComponent/CategoryCardComponent";
import React, { useState , useRef, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import left from './../../assets/images/Categories/arrow-left.png'
import right from './../../assets/images/Categories/arrow-right.png'


export default function CategoriesSectionComponent() {
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(100); // Progress value (0-100)

  // Function to simulate progress change
  const handleProgressChange = (value) => {
    setProgress(value);
  };
  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * 5; 
  const endIndex = startIndex + 5;
  const currentData = CategoriesData.slice(startIndex, endIndex);


  const scrollContainerRef = useRef(null); // Reference to the scrolling container
  const [scrollPercentage, setScrollPercentage] = useState(0); // Track scroll percentage

  // Function to calculate scroll percentage
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollLeft;
      const scrollHeight = scrollContainerRef.current.scrollWidth;
      const clientHeight = scrollContainerRef.current.clientWidth;

      // Calculate scroll percentage
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(percentage);
    }
  };

// Attach scroll event listener
useEffect(() => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }
}, []);

  return (
    <div className="px-161 pb-150">
      <div className="AA-title-section mb-80">
        <TitleComponent
          title={"Explore our wide variety of categories"}
          descrption={
            "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          }
        />

        <div className="pagination-container">
          <ReactPaginate
            previousLabel={<img src={left} alt={""} className="icon-page" />}
            nextLabel={<img src={right} alt={""} className="icon-page" />}
            breakLabel="..."
            pageCount={Math.ceil(CategoriesData.length / 5)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
            previousClassName="previous"
            nextClassName="next"
            disabledClassName="disabled"
            pageClassName="page"
            breakClassName="break"
            breakLinkClassName="break-link"
            pageLabelBuilder={(pageNumber) => {
              return ``         
            }}
          />
        </div>
      </div>
      
       
      <div className="AA-categories" ref={scrollContainerRef}>
        {currentData.map((item, key) => (
          <CategoryCardComponent data={item} />
        ))}
      </div>
          <div className="center">
            <div className="progress-bar-scroll">
              <div className="progress-indicator" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
          </div>
      
    </div>
  );
}
