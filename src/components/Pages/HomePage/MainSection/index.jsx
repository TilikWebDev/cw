import React from "react";
import classNames from "classnames";

import Education from "./Education";
import Skills from "./Skills";

import style from "./style.module.scss";
import WorkExperience from "./WorkExperience";

const MainSection = () => {
  return (
    <main className={style.main_section}>
      <div className={style.container}>
        <div className={classNames(style.col, style.small)}>
          <Education />
          <Skills />
        </div>

        <div className={style.col}>
          <WorkExperience />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
