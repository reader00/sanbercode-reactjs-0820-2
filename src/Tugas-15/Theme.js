import React, { useContext, useState } from "react";
import { WebContext } from "./Context";

const Theme = () => {
  const [setTheme] = useContext(WebContext);
  const [button, setButton] = useState({ text: "Putih", status: "Hitam" });

  function handleChangeTheme(event) {
    event.preventDefault();
    setButton({ text: button.status, status: button.text });
    if (button.status === "Hitam") {
      setTheme("black");
    } else {
      setTheme("white");
    }
    console.log(button);
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <button
        type="button"
        className={"theme " + button.status}
        onClick={handleChangeTheme}
      >
        {button.status}
      </button>
    </div>
  );
};

export default Theme;
