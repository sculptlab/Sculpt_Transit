import { delay } from "@/utils";
import { Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "src/css/typing_text.css";

const TYPING_DELAY = 100;
function TypingTextBox({ texts, variant, classnames }) {
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (!texts?.length || !textBoxRef?.current) return;
    textBoxRef.current.innerHTML = "";
    typeTextsEffect(texts);
  }, [texts]);

  const typeTextsEffect = async (texts) => {
    while (true) {
      for (const text of texts) {
        await typeText(text, 0);
        await delay(1000);
        await eraseText(text?.length - 1);
        await delay(1000);
      }
    }
  };

  const typeText = async (text) => {
    let idx = 0;
    while (idx < text?.length) {
      if (textBoxRef?.current) textBoxRef.current.innerHTML += text[idx];
      idx++;
      await delay(TYPING_DELAY);
    }
  };

  const eraseText = async () => {
    let currtext = textBoxRef?.current ? textBoxRef.current.innerHTML : "";
    while (currtext?.length) {
      currtext = currtext?.slice(0, -1);
      if (textBoxRef?.current) textBoxRef.current.innerHTML = currtext;
      await delay(TYPING_DELAY);
    }
  };

  if (!texts?.length) return null;

  return (
    <Typography
      ref={textBoxRef}
      variant={variant || "h3"}
      className={classnames + " typing_title"}
    ></Typography>
  );
}

export default TypingTextBox;
