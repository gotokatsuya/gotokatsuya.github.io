import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components/image"
import Modal from "../../components/modal"

class SunflowerPage extends React.Component {
  state = {
    appHeight: 0,
    items: [
      {
        name: "Github",
        url: "https://github.com/gotokatsuya",
        image: "/images/logo-github.png",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/goka_kun",
        image: "/images/logo-tw.png",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/katsuya.goto.5",
        image: "/images/logo-fb.png",
      },
      {
        name: "Github1",
        url: "https://github.com/gotokatsuya",
        image: "/images/logo-github.png",
      },
      {
        name: "Twitter1",
        url: "https://twitter.com/goka_kun",
        image: "/images/logo-tw.png",
      },
      {
        name: "Facebook1",
        url: "https://www.facebook.com/katsuya.goto.5",
        image: "/images/logo-fb.png",
      },
    ],
  }

  constructor(props) {
    super(props)
    this.modal = React.createRef()
  }

  componentDidMount() {
    this.setState({ appHeight: window.innerHeight })
    window.addEventListener("resize", () => {
      this.setState({ appHeight: window.innerHeight })
    })
  }

  onClickShare = () => {
    this.modal.current.show()
  }

  render() {
    return (
      <Layout>
        <SEO title="Modal" keywords={[`modal`]} />
        <div
          style={{
            minHeight: this.state.appHeight,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image filename="sunflower.jpg" alt="sunflower" />
            <div style={{ margin: "20px" }}>
              <div>Sunflower</div>
              <div style={{ marginTop: "20px" }}>
                The sunflower (Helianthus annuus) is a living annual plant in
                the family Asteraceae, with a large flower head (capitulum). The
                stem of the flower can grow up to 3 metres tall, with a flower
                head that can be 30 cm wide. Other types of sunflowers include
                the California Royal Sunflower, which has a burgundy (red +
                purple) flower head. The flower head is actually an
                inflorescence made of hundreds or thousands of tiny flowers
                called florets. The central florets look like the centre of a
                normal flower, apseudanthium. The benefit to the plant is that
                it is very easily seen by the insects and birds which pollinate
                it, and it produces thousands of seeds. The sunflower is the
                state flower of Kansas. That is why Kansas is sometimes called
                the Sunflower State. To grow well, sunflowers need full sun.
                They grow best in fertile, wet, well-drained soil with a lot of
                mulch. In commercial planting, seeds are planted 45 cm (1.5 ft)
                apart and 2.5 cm (1 in) deep.
              </div>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
            }}
          >
            <button
              type="button"
              style={{
                margin: "20px",
                padding: "8px 10px",
                background: "#000000cc",
                color: "#fff",
                fontWeight: "600",
                outline: "none",
                borderRadius: "6px",
              }}
              onClick={() => {
                this.onClickShare()
              }}
            >
              シェア
            </button>
          </div>
          <Modal
            ref={this.modal}
            title="シェア"
            height="160px"
            items={this.state.items}
          />
        </div>
      </Layout>
    )
  }
}

export default SunflowerPage
