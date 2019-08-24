import React from "react"
import PropTypes from "prop-types"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import Swiper from "swiper"

class Modal extends React.Component {
  state = {
    isShown: false,
    isPoseCompleted: false,
    dismissesByDrag: false,
    visibilityStyle: "hidden",
    swiper: null,
  }

  show = () => {
    if (this.state.isShown) {
      return
    }
    this.setState({
      isShown: true,
      isPoseCompleted: false,
      dismissesByDrag: false,
      visibilityStyle: "visible",
    })
    this.props.onOpen()
  }

  onPoseComplete = () => {
    this.setState({
      isPoseCompleted: true,
    })
    if (!this.state.isShown) {
      this.setState({ visibilityStyle: "hidden" })
    }
    if (this.state.swiper === null) {
      const swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        freeMode: true,
      })
      this.setState({ swiper: swiper })
    } else {
      this.state.swiper.slideTo(0)
    }
  }

  dismiss = () => {
    if (!this.state.isShown) {
      return
    }
    this.setState({
      isShown: false,
      isPoseCompleted: false,
      dismissesByDrag: false,
      // this prop should be changed on onPoseComplete
      //  visibilityStyle: "hidden",
    })
    this.props.onClose()
  }

  onChangeDrag = y => {
    if (this.state.dismissesByDrag) {
      return
    }
    if (!this.state.isPoseCompleted) {
      return
    }
    const thredholdY = parseInt(this.props.height) / 2
    if (y < thredholdY) {
      return
    }
    this.setState({ dismissesByDrag: true })
  }

  onDragEnd = () => {
    if (!this.state.dismissesByDrag) {
      return
    }
    this.dismiss()
  }

  render() {
    return (
      <ModalContainer
        style={{
          visibility: this.state.visibilityStyle,
        }}
        pose={this.state.isShown ? "visible" : "hidden"}
        onPoseComplete={() => {
          this.onPoseComplete()
        }}
        onClick={() => {
          this.dismiss()
        }}
      >
        <ModalContent
          style={{
            height: this.props.height,
          }}
          height={this.props.height}
          onDragEnd={() => {
            this.onDragEnd()
          }}
          onValueChange={{
            y: y => {
              this.onChangeDrag(y)
            },
          }}
          pose={this.state.isShown ? "visible" : "hidden"}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <div>
            <Title>{this.props.title}</Title>
            <ItemContainer>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <PoseGroup>
                    {this.state.isShown &&
                      this.props.items.map(({ name, url, image }, index) => (
                        <ItemContent
                          key={name}
                          index={index}
                          className="swiper-slide"
                        >
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ItemImage src={image} alt={name} />
                          </a>
                          <ItemName>{name}</ItemName>
                        </ItemContent>
                      ))}
                  </PoseGroup>
                </div>
              </div>
            </ItemContainer>
          </div>
        </ModalContent>
      </ModalContainer>
    )
  }
}

const ModalContainer = styled(posed.div())`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled(
  posed.div({
    draggable: "y",
    dragBounds: ({ height }) => {
      return { top: 0, bottom: parseInt(height) }
    },
    dragEnd: {
      x: 0,
      y: 0,
      transition: {},
    },
    hidden: {
      y: ({ height }) => height,
      opacity: 0,
      transition: { duration: 200 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 200 },
    },
  })
)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 4px -4px #333;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`

const ItemContainer = styled.div`
  margin-top: 4px;
`

const ItemContent = styled(
  posed.div({
    exit: {
      y: 30,
    },
    enter: {
      y: 0,
      delay: ({ index }) => 30 + index * 30,
    },
  })
)`
  width: auto;
  position: relative;
  padding: 14px;
  text-align: center;
`

const ItemImage = styled.img`
  display: inline-block;
  width: 52px;
  height: 52px;
`

const ItemName = styled.div`
  margin-top: 4px;
  font-size: 0.75rem;
`

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
