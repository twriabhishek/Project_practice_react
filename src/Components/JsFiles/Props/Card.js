import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({heading="Main Heading", paragraph="Main Para"}) => {
  return (
    <div>
      <main>
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
            alt=""
          />
          <div class="card-content">
            <h2>{heading}</h2>
            <p>
              {paragraph}
            </p>
            <a href="#" class="button">
              Find out more
              <span class="material-symbols-outlined"><FaArrowRight /></span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
