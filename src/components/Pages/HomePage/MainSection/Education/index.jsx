import React from "react";

import style from "./style.module.scss";

const Education = () => {
  return (
    <section className={style.education_section}>
      <h4 className={style.title}>Education</h4>

      <div className={style.education_section_child}>
        <p className={style.child_title}>Degree title here</p>
        <span className={style.child_description}>Description</span>
        <span className={style.child_datetime}>2020-2022</span>
      </div>

      <div className={style.education_section_child}>
        <p className={style.child_title}>Degree title here</p>
        <span className={style.child_description}>Description</span>
        <span className={style.child_datetime}>2020-2022</span>
      </div>
    </section>
  );
};

export default Education;
