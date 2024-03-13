import React from "react";
import { NavLink } from "react-router-dom";
import "./CategoryMenu.css";




export default class CategoryMenu extends React.Component {
  render() {
    const { allCategories, changeCategory, activeCategory } = this.props;
    return (
      <ul>
        <NavLink
          to="/"
          onClick={() => {
            changeCategory("");
          }}
          className="home-link"
        >
          <li>Home</li>
        </NavLink>
        
        {allCategories.map((category) => (
          <NavLink
            to={`/store/${category.name}`}
            key={category.name}
            className={
              activeCategory === category.name
                ? "active-category-link"
                : "inactive-category-link"
            }
          >
            <li
              onClick={() => {
                changeCategory(category.name);
              }}
            >
              {category.name}
            </li>
          </NavLink>
  ))}
          <NavLink
          to="/register"
          onClick={() => {
            changeCategory("");
          }}
          className="regitration-link"
        >
          
            <li><i class="fa-regular fa-user"></i></li>
        </NavLink>
      
      </ul>
      
    );
  }
}
