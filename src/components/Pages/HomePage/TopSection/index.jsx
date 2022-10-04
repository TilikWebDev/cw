import React from "react";
import style from "./style.module.scss";

const TopSection = () => {
  return (
    <section className={style.top_section}>
      <div className={style.container}>
        <div className={style.main_info}>
          <div className={style.main_info__rotate}>
            <h2 className={style.name}>JOHN</h2>
            <h1 className={style.surname}>SMITHSON</h1>
            <p className={style.specific}>DESIGNER</p>
          </div>
        </div>

        <div className={style.decription}>
          <p className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Cepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia
            <br />
            deserunt mollit anim id est laborum
          </p>

          <div className={style.mi_container}>
            <div className={style.mi_ab}>
              <div className={style.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
