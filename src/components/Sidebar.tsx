import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <h1>iToDev</h1>
        </Link>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <a href="">Categories</a>
        <a href="">Trending</a>
        <a href="">Saved</a>
        <a href="">Playlist</a>
      </div>
      <div className="profile">
        <a href="">Settings</a>
        <a href="">Profile</a>
      </div>
    </div>
  );
};

export default Sidebar;
