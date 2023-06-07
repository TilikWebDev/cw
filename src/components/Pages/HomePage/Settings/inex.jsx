import classNames from "classnames";
import React from "react";
import Draggable from "react-draggable";
import { useEdit } from "../../../Context/edit";
import { useTheme } from "../../../Context/theme";
import style from "./style.module.scss";

const Settings = () => {
  const { edit, setEdit } = useEdit();
  const { theme, setTheme, listOfThemes } = useTheme();

  return (
    <Draggable handle=".draggable">
      <div className={classNames(style.container)}>
        <div className={classNames(style.head, "draggable")}></div>

        <div className={style.body}>
          <div className={classNames(style.row, style.colors)}>
            {listOfThemes.map((l) => {
              return (
                <div
                  className={classNames(style.color, style[l], {
                    [style.active]: theme === l,
                  })}
                  key={l}
                  onClick={() => setTheme(l)}
                />
              );
            })}
          </div>

          <div className={classNames(style.row, style.type)}>
            <div
              className={classNames(style.btn, {
                [style.active]: edit === true,
              })}
              onClick={() => setEdit(true)}
            >
              Editor
            </div>
            <div
              className={classNames(style.btn, {
                [style.active]: edit === false,
              })}
              onClick={() => setEdit(false)}
            >
              Viewer
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Settings;
