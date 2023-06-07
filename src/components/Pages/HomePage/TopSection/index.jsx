import classNames from "classnames";
import React from "react";
import { useMemo } from "react";
import { encodeSvg } from "../../../../services/helpers";
import Animated from "../../../Base/Animated";
import TextEditor from "../../../Base/Editors/TextEditor";
import Star from "../../../Base/Icons/Star";
import { useTheme } from "../../../Context/theme";
import style from "./style.module.scss";

const TopSection = () => {
  const { theme } = useTheme();

  const themeClassName = useMemo(() => {
    return style[theme];
  }, [theme]);

  return (
    <section className={classNames(style.top_section, themeClassName)}>
      <div className={style.container}>
        <div className={style.grain} />

        <div className={style.main_info}>
          <div className={style.main_info__rotate}>
            <TextEditor rotate={true}>
              <h2 className={style.name}>JOHN</h2>
            </TextEditor>

            <TextEditor rotate={true}>
              <h1 className={style.surname}>SMITHSON</h1>
            </TextEditor>

            <TextEditor rotate={true}>
              <p className={style.specific}>DESIGNER</p>
            </TextEditor>
          </div>
        </div>

        <div className={style.decription}>
          <TextEditor field="textarea" fieldPosition="right">
            <p className={style.title}>
              It's very important to have a customer service, but it's just the
              way it is
              <br />
              in time they occur as with great labor and pain. tempor incididunt
              <br />
              <br />
              They are blinded by greed and do not come out, they are in fault
              who are
              <br />
              responsible the desert softens the soul, that is, the hardships
            </p>
          </TextEditor>

          <div className={style.mi_container}>
            <div className={style.mi_ab}>
              <div className={style.image}>
                <Animated>
                  <img
                    className={classNames(style.star, style.first)}
                    src={encodeSvg(<Star theme={theme} />)}
                    alt="Star"
                  />
                </Animated>

                <Animated>
                  <img
                    className={classNames(style.star, style.last)}
                    src={encodeSvg(<Star theme={theme} />)}
                    alt="Star"
                  />
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
