import React from "react"
import posed, { PoseGroup } from "react-pose"

import Image from "./image"

const Logo = posed.a({
  exit: {
    x: 100,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    delay: ({ delta }) => 750 + delta * 50,
  },
})

const Social = ({ style, isPopped }) => (
  <div style={style} className="social">
    <PoseGroup>
      {isPopped && [
        <Logo
          delta={1}
          key="github"
          className="image logo"
          href="https://github.com/gotokatsuya"
        >
          <Image filename="logo-github.png" alt="logo-github" />
        </Logo>,
        <Logo
          delta={2}
          key="note"
          className="image logo is-circle"
          href="https://note.mu/gotokatsuya"
        >
          <Image filename="logo-note.jpg" alt="logo-note" />
        </Logo>,
        <Logo
          delta={3}
          key="twitter"
          className="image logo"
          href="https://twitter.com/goka_kun"
        >
          <Image filename="logo-tw.png" alt="logo-tw" />
        </Logo>,
        <Logo
          delta={4}
          key="facebook"
          className="image logo"
          href="https://www.facebook.com/katsuya.goto.5"
        >
          <Image filename="logo-fb.png" alt="logo-fb" />
        </Logo>,
      ]}
    </PoseGroup>
  </div>
)

export default Social
