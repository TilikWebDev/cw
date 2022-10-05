import React from "react";

import style from "./style.module.scss";

const WorkExperience = () => {
  return (
    <section className={style.work_experience_section}>
      <h4 className={style.title}>Work Experience</h4>

      <div className={style.work_child}>
        <span className={style.datetime}>April 2020 - Present</span>
        <p className={style.specific}>Senior UX/UI Designer</p>
        <span className={style.description}>
          Company name here.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
          <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>

      <div className={style.work_child}>
        <span className={style.datetime}>May 2018 - April 2020</span>
        <p className={style.specific}>Mid-level UX/UI Designer</p>
        <span className={style.description}>
          Company name here.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
          <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>

      <div className={style.work_child}>
        <span className={style.datetime}>April 2014 - May 2018</span>
        <p className={style.specific}>Junior UX/UI Designer</p>
        <span className={style.description}>
          Company name here.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
          <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>
    </section>
  );
};

export default WorkExperience;
