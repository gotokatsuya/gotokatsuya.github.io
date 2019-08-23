import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class AppleCardPage extends React.Component {
  state = {
    scrollTop: 0,
    card: {
      translateY: 0,
      scale: 3,
    },
    title: {
      scale: 1,
      opacity: 1,
    },
    subtitle: {
      translateY: 0,
      opacity: 0,
    },
  }

  componentDidMount() {
    this.drawCanvas()
    console.log(window.devicePixelRatio)
    window.addEventListener("scroll", e => this.watchScroll(e))
  }

  componentWillUnmount() {
    window.removeEventListener("scroll")
  }

  viewportHeight() {
    return window.innerHeight * 0.01
  }

  saveScrollState() {
    const top = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const vy = top - this.state.scrollTop
    this.setState({
      scrollTop: top,
    })
    return { vy }
  }

  animateCardState(vy) {
    const rangeTranslateY = { from: 0, to: 240 }
    const translateY = this.state.card.translateY + vy
    const rangeScale = { from: 3, to: 0.6 }
    const scale = this.state.card.scale - vy * 0.01
    this.setState({
      card: {
        translateY: Math.min(
          Math.max(translateY, rangeTranslateY.from),
          rangeTranslateY.to
        ),
        scale: Math.max(Math.min(scale, rangeScale.from), rangeScale.to),
      },
    })
  }

  animateTitleState(vy) {
    const rangeOpacity = { from: 1, to: 0 }
    const opacity = this.state.title.opacity - vy * 0.02
    const rangeScale = { from: 1, to: 0.9 }
    const scale = this.state.title.scale - vy * 0.002
    this.setState({
      title: {
        opacity: Math.max(
          Math.min(opacity, rangeOpacity.from),
          rangeOpacity.to
        ),
        scale: Math.max(Math.min(scale, rangeScale.from), rangeScale.to),
      },
    })
  }

  invisibleTitleState() {
    this.setState({
      title: {
        scale: 0,
        opacity: 0,
      },
    })
  }

  animateSubtitleState(vy) {
    const rangeTranslateY = { from: 0, to: -100 }
    const translateY = this.state.subtitle.translateY - vy
    const rangeOpacity = { from: 0, to: 1 }
    const opacity = this.state.subtitle.opacity + vy * 0.01
    this.setState({
      subtitle: {
        translateY: Math.max(
          Math.min(translateY, rangeTranslateY.from),
          rangeTranslateY.to
        ),
        opacity: Math.min(
          Math.max(opacity, rangeOpacity.from),
          rangeOpacity.to
        ),
      },
    })
  }

  invisibleSubtitleState() {
    this.setState({
      subtitle: {
        translateY: 0,
        opacity: 0,
      },
    })
  }

  watchScroll(e) {
    const { vy } = this.saveScrollState()
    const vySlow = vy * 0.2
    this.animateCardState(vySlow)
    const topSectionHeight = this.viewportHeight() * 400
    if (this.state.scrollTop > topSectionHeight / 3) {
      this.animateSubtitleState(vySlow)
      this.invisibleTitleState()
    } else {
      this.animateTitleState(vySlow)
      this.invisibleSubtitleState()
    }
  }

  drawCanvas() {
    const canvas = this.canvas
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    ctx.beginPath()
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, "#f3e7e9")
    grad.addColorStop(1, "#e3eeff")
    ctx.fillStyle = grad
    ctx.rect(0, 0, width, height)
    ctx.fill()
  }

  render() {
    return (
      <Layout>
        <SEO title="AppleCard" keywords={[`applecard`]} />
        <section>
          <div
            style={{
              width: `100%`,
              height: `400vh`,
              backgroundColor: `white`,
            }}
          >
            <div
              style={{
                position: `sticky`,
                overflow: `hidden`,
                width: `100%`,
                height: `100vh`,
                top: `0`,
              }}
            >
              <div
                style={{
                  position: `absolute`,
                  left: `calc(50% - (100vw/2))`,
                  top: `calc(50% - (60vw/2))`,
                  width: `100vw`,
                  height: `60vw`,
                  transform: `translate(0px, ${
                    this.state.card.translateY
                  }px) scale(${this.state.card.scale}, ${
                    this.state.card.scale
                  })`,
                  transitionTimingFunction: `cubic-bezier(0.55, 0.085, 0.68, 0.53)`,
                }}
              >
                <canvas
                  ref={e => {
                    this.canvas = e
                  }}
                  width="320"
                  height="200"
                  style={{ width: `100%`, height: `100%` }}
                />
              </div>
              <div
                style={{
                  height: `100%`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  justifyContent: `center`,
                }}
              >
                <div
                  style={{
                    position: `absolute`,
                    transform: `scale(${this.state.title.scale}, ${
                      this.state.title.scale
                    })`,
                    opacity: `${this.state.title.opacity}`,
                  }}
                  className="title is-1"
                >
                  <div>
                    This is <br /> My Card.
                  </div>
                </div>
                <div
                  style={{
                    position: `absolute`,
                    transform: `translate(0px, ${
                      this.state.subtitle.translateY
                    }px)`,
                    opacity: `${this.state.subtitle.opacity}`,
                  }}
                  className="title has-text-centered"
                >
                  <div>
                    A new kind of
                    <br /> my card.
                    <br /> Created by Me,
                    <br /> not a private.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div
              style={{
                padding: `30px`,
              }}
              className="title"
            >
              About
            </div>
            <div
              style={{
                padding: `30px`,
              }}
              className="title"
            >
              Features
            </div>
            <div
              style={{
                padding: `30px`,
              }}
              className="title"
            >
              Contact
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AppleCardPage
