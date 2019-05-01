import React from "react"
import { Spring } from 'react-spring/renderprops'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="ME" keywords={[`gotokatsuya`]} />
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ tension: 280, friction: 120, delay: 600 }}>
                {props =>
                  <div style={props}>
                    <div className="image profile is-circle">
                      <Image filename="profile.jpg" alt="profile" />
                    </div>
                    <div style={{ marginTop: `30px` }}>
                      <h1 className="title is-1">KATSUYA GOTO</h1>
                    </div>
                  </div>
                }
              </Spring>
              <div style={{ marginTop: `40px` }} className="d-flex has-gap is-centered">
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ tension: 280, friction: 120, delay: 600 }}>
                  {props =>
                    <div style={props} >
                      <a className="image sns-logo" href="https://github.com/gotokatsuya">
                        <Image filename="github-logo.png" alt="github-logo" />
                      </a>
                      <a className="image sns-logo" href="https://twitter.com/goka_kun">
                        <Image filename="tw-logo-2.png" alt="tw-logo" />
                      </a>
                      <a className="image sns-logo" href="https://www.facebook.com/katsuya.goto.5">
                        <Image filename="fb-logo.png" alt="fb-logo" />
                      </a>
                    </div>
                  }
                </Spring>
              </div>
            </div>
          </div>
        </section>
      </Layout >
    )
  }
}

export default IndexPage
