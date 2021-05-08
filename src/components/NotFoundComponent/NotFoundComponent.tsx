import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundComponent.scss";

const NotFoundComponent = () => (
  <div className="NotFoundComponent" data-testid="NotFoundComponent">
    <div className="container">
      <div className="gif">
        <iframe
          title="gif"
          src="https://giphy.com/embed/6uGhT1O4sxpi8"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">Are your lost ???</div>
      <div className="buttons">
        <Link to="/">
          <button className="button">Yes I am</button>
        </Link>
        <Link to="/">
          <button className="button">No but ... Yes please help me</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundComponent;
