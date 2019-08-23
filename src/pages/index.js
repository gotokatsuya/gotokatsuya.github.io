import React from "react"
import posed from "react-pose"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const Title = posed.h1({
  init: { y: `25vh`, opacity: 0 },
  popped: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: { duration: 300 },
  },
})

const LightGreyDiv = posed.div({
  init: { y: `50vh`, opacity: 0 },
  popped: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: { duration: 300 },
  },
})

const Subtitle = posed.h2({
  init: { y: `50vh`, opacity: 0 },
  popped: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: { duration: 300 },
  },
})

const WhiteDiv = posed.div({
  init: { y: `30vh`, opacity: 0 },
  popped: {
    y: 0,
    opacity: 1,
    delay: 600,
    transition: { duration: 300 },
  },
})

class IndexPage extends React.Component {
  state = { isPopped: false, appHeight: 0 }
  componentDidMount() {
    this.setState({ isPopped: true, appHeight: window.innerHeight })
    window.addEventListener("resize", () => {
      this.setState({ appHeight: window.innerHeight })
    })
  }
  componentWillUnmount = () => window.removeEventListener("resize")
  render() {
    return (
      <Layout>
        <SEO title="KATSUYA GOTO" keywords={[`gotokatsuya`]} />
        <div className="index" style={{ minHeight: this.state.appHeight }}>
          <div className="bottom" />
          <LightGreyDiv
            pose={this.state.isPopped ? "popped" : ""}
            className="right-bottom"
          >
            <Subtitle
              pose={this.state.isPopped ? "popped" : ""}
              style={{
                marginTop: `-20px`,
                marginLeft: `-40px`,
              }}
              className="text has-white"
            >
              ENGINEER
            </Subtitle>
            <WhiteDiv className="white">
              <Social
                style={{ margin: `12px` }}
                isPopped={this.state.isPopped}
              />
            </WhiteDiv>
          </LightGreyDiv>
          <Title
            pose={this.state.isPopped ? "popped" : ""}
            style={{ marginLeft: `12px` }}
            className="title text is-large has-white"
          >
            KATSUYA GOTO
          </Title>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
