import React, { useState, useEffect } from "react";

const Text = () => {
    const [text, setText] = useState("");
    const fullText = "Welcome to MovieZone - The Ultimate Movie Experience!";
    const speed = 40;
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, []);
  
    return <h2 className="center-text">{text}</h2>;
};

export default Text;
