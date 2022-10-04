import React from "react";

import InstagramIcon from "../../../../images/instagram.svg";
import DribbleIcon from "../../../../images/dribble.svg";

import style from "./style.module.scss";

const SocialMedia = () => {
  return (
    <section className={style.social_media_section}>
      <div className={style.container}>
        <div className={style.links}>
          <h4 className={style.title}>Social Media</h4>

          <div className={style.link}>
            <img src={InstagramIcon} alt="Instagram" />
            @flowbase.co
          </div>

          <div className={style.link}>
            <img src={DribbleIcon} alt="Dribble" />
            https://dribbble.com/flowbase
          </div>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default SocialMedia;
