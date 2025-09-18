import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/components/header.scss";
import "../styles/pages/Home.scss";

const HomeLoadingSkeleton: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="content">
        <header className="header">
          <h1 className="main-title">
            <Skeleton count={1} height="3em" />
          </h1>
          <Skeleton count={1} height="1em" />
          <Skeleton count={1} height="1em" />
        </header>
        <div className="home-movies-list" style={{ display: "block" }}>
          <Skeleton count={1} height="20rem" width="100%" style={{ flex: "0 0 auto" }} />
        </div>
      </div>
    </div>
  );
};

export default HomeLoadingSkeleton;
