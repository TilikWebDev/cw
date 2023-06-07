/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import classNames from "classnames";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import style from "./style.module.scss";
import Pensil from "../../Icons/Pensil";
import { encodeSvg } from "../../../../services/helpers";
import { useEdit } from "../../../Context/edit";

const TextEditor = (props) => {
  const {
    children,
    rotate = false,
    type,
    field = "input",
    fieldPosition = "left",
  } = props;

  const ref = useRef();
  const bodyRef = useRef();

  const [text, setText] = useState("Unknow");
  const [open, setOpen] = useState(false);

  const { edit } = useEdit();

  const showEdit = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClickOutside = (event) => {
    if (bodyRef.current && !bodyRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (ref?.current) {
      setText(ref.current?.innerText);
    }
  }, [ref, children]);

  const onChangeText = useCallback((_text) => {
    setText(_text);
    ref.current.innerText = _text;
  }, []);

  return edit ? (
    <div className={classNames(style.container, { [style.opened]: open })}>
      {React.cloneElement(children, { ref })}
      <div
        className={classNames(style.mc, {
          [style.rotate]: rotate,
          [style.fp_r]: fieldPosition === "right",
        })}
      >
        <div className={style.body}>
          {!open ? (
            <div className={style.icon} onClick={showEdit}>
              <img src={encodeSvg(<Pensil color="white" />)} alt="Edit" />
            </div>
          ) : (
            <div className={style.popup} ref={bodyRef}>
              {field === "input" && (
                <input
                  autoFocus={true}
                  type="text"
                  onChange={(e) => onChangeText(e.currentTarget.value)}
                  value={text}
                />
              )}

              {field === "textarea" && (
                <textarea
                  autoFocus={true}
                  onChange={(e) => onChangeText(e.currentTarget.value)}
                  value={text}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    children
  );
};

export default TextEditor;
