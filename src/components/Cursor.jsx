import React from "react";
import "../styles/Cursor.scss";
import AnimatedCursor from "react-animated-cursor";
export default function Cursor() {
  return (
    <div className="App">
    <AnimatedCursor className="cursor"
      innerSize={40}
      outerSize={28}
      color='193, 11, 111'
      outerAlpha={1}
      innerScale={1}
      outerScale={15}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}
