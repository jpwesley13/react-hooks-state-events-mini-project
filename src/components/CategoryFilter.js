import React, {useState} from "react";

function CategoryFilter({ categories, onCategoryChange, currentCategory  }) {


  function handleClick(category) {
    onCategoryChange(category); // Call the callback function
  }

  function categoryButtons(){
    return (
      categories.map(category => 
      <button 
        key={category} 
        onClick={() => handleClick(category)}
        className={category === currentCategory ? "selected" : ""}>{category}
      </button>)
    )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons()}
    </div>
  );
}

export default CategoryFilter;