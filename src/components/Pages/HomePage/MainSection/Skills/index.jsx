import React from "react";

import style from "./style.module.scss";

const Skills = () => {
  return (
    <section className={style.skills_section}>
      <h4 className={style.title}>Skills</h4>

      <div className={style.skills_section_child}>
        <p className={style.child_title}>Photo Editing</p>

        <div className={style.progress_bar}>
          <div className={style.status} style={{ width: "90%" }} />
        </div>
      </div>

      <div className={style.skills_section_child}>
        <p className={style.child_title}>Illustration</p>

        <div className={style.progress_bar}>
          <div className={style.status} style={{ width: "60%" }} />
        </div>
      </div>

      <div className={style.skills_section_child}>
        <p className={style.child_title}>UX Design</p>

        <div className={style.progress_bar}>
          <div className={style.status} style={{ width: "70%" }} />
        </div>
      </div>

      <div className={style.skills_section_child}>
        <p className={style.child_title}>Wireframing</p>

        <div className={style.progress_bar}>
          <div className={style.status} style={{ width: "30%" }} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
