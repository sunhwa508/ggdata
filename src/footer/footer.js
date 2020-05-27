import React from "react";
import { Footerstyled } from "./footer.styled";

export default function footer() {
  return (
    <Footerstyled>
      <div className="icons">
        <a href="https://www.youtube.com/channel/UCXwBCeiqjOezNcpplFuHX9g?view_as=subscriber">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://codesandbox.io/u/sunhwa508">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="https://github.com/sunhwa508">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>@ 2020 Sunhwa Lee.</p>
    </Footerstyled>
  );
}
