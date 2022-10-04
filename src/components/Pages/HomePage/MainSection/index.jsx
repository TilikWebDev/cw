import React from "react";

import Education from "./Education";
import Skills from "./Skills";

import style from "./style.module.scss";
import WorkExperience from "./WorkExperience";

const MainSection = () => {
  return (
    <main className={style.main_section}>
      <div className={style.container}>
        <div className={style.col}>
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
