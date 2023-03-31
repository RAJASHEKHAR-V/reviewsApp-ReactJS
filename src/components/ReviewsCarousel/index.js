import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewObjectIndex: 0}

  onRightArrow = () => {
    const {reviewObjectIndex} = this.state
    const {reviewsList} = this.props
    if (reviewObjectIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewObjectIndex: prevState.reviewObjectIndex + 1,
      }))
    }
  }

  onLeftArrow = () => {
    const {reviewObjectIndex} = this.state
    if (reviewObjectIndex > 0) {
      this.setState(prevState => ({
        reviewObjectIndex: prevState.reviewObjectIndex - 1,
      }))
    }
  }

  filterTheObject = () => {
    const {reviewsList} = this.props
    const {reviewObjectIndex} = this.state
    const resultObject = reviewsList[reviewObjectIndex]
    return resultObject
  }

  render() {
    const {imgUrl, username, companyName, description} = this.filterTheObject()

    return (
      <div className="bg-container">
        <h1 className="review-heading">Reviews</h1>
        <img src={imgUrl} className="profile-image" alt={username} />
        <div className="arrow-card">
          <button
            className="left-button"
            type="submit"
            data-testid="leftArrow"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="lef-arrow"
              alt="left arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button
            className="right-button"
            type="submit"
            data-testid="rightArrow"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
