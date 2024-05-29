import {Component} from 'react'
import './index.css'

class ReviewsCarowsel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }


  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <div className="content-container">
            <button
              type="button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <div className="profile-container">
                <img src={reviewsList[index].imgUrl} className="profile-pic" alt={reviewsList[index].username} />
                <p className="username">{reviewsList[index].username}</p>
                <p className="company">{reviewsList[index].companyName}</p>
                <p className="description">{reviewsList[index].description}</p>
            </div>
            <button
              type="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
              className="arrow-button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarowsel
