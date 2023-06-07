import React, { useState, useEffect } from "react";
import classNames from "classnames";
import style from "./style.module.scss";

const Animated = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(false);

    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }, [children]);

  return (
    <div className={classNames(style.animated, { [style.show]: isShow })}>
      {React.cloneElement(children)}
    </div>
  );
};

export default Animated;
