import React from "react";
import { Link } from "react-router-dom";
import type { ListCardProps } from "../types/propTypes";

const ListCard: React.FC<ListCardProps> = ({ url, data, displayName, selectItem, imageSrc }) => {
  return (
    <div className="card">
      <Link to={url} onClick={() => selectItem(data)}>
        <img src={imageSrc} alt="related list image" />
        <p>
          <strong>{displayName}</strong>
        </p>
      </Link>
    </div>
  );
};

export default ListCard;
