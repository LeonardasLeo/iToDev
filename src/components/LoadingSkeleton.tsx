import React from "react";
import Skeleton from "react-loading-skeleton";
import type { LoadingSkeletonProps } from "../types/propTypes";

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ itemType }) => {
  return (
    <div className={`${itemType}-details-wrapper`}>
      <div className={`${itemType}-container`}>
        <div className={`${itemType}-image`}>
          <Skeleton width="100%" height="100%" count={1} />
        </div>
        <div className={`${itemType}-info`}>
          <Skeleton count={1} className="title-skeleton" />
          <Skeleton count={9} className="text-skeleton" />
        </div>
      </div>
      <Skeleton count={1} height="2rem" className="subtitle-skeleton" />
      <Skeleton count={1} height="20rem" />
    </div>
  );
};

export default LoadingSkeleton;
