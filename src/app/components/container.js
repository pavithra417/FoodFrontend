import React from "react";

const Container = ({ children, className = "", ...props }) => {
  return (
    <div className={`Container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
