import React, { useState } from 'react';

import { Link } from "react-router-dom";

const ToggleLike = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Link 
      className={clicked ? "btn btn-primary btn-square me-3" : "btn btn-light btn-square me-3"} 
      href="" 
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <i className={clicked ? "far fa-heart text-light" : "far fa-heart text-primary"}></i>
    </Link>
  );
};

export default ToggleLike;