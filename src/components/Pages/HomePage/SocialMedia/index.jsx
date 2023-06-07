import React from "react";

import style from "./style.module.scss";
import { useTheme } from "../../../Context/theme";
import { encodeSvg } from "../../../../services/helpers";
import Instagram from "../../../Base/Icons/Instagram";
import Dribble from "../../../Base/Icons/Dribble";
import Animated from "../../../Base/Animated";

const SocialMedia = () => {
  const { theme } = useTheme();

  return (
    <section className={style.social_media_section}>
      <div className={style.container}>
        <div className={style.links}>
          <h4 className={style.title}>Social Media</h4>

          <div className={style.link}>
            <Animated>
              <img
                src={encodeSvg(<Instagram theme={theme} />)}
                alt="Instagram"
              />
            </Animated>
            @flowbase.co
          </div>

          <div className={style.link}>
            <Animated>
              <img src={encodeSvg(<Dribble theme={theme} />)} alt="Dribble" />
            </Animated>
            https://dribbble.com/flowbase
          </div>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default SocialMedia;
