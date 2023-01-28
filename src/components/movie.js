/* holds images, synopsis, title, rating, stars*/
import React from "react";
import ReviewForm from "./review-form"; /*passing ReviewList and ReviewButton components to the Movie class */
import ReviewButton from "./review-button";
import Stars from "./stars";

export default class Movie extends React.Component {
    constructor(props) { /*passing the movie props from the constructor into the superconstructor 
    so they can be reused in the component */
        super(props);
        this.state = { /*adding props to the state so the state will update correctly; state is 
        the current state of the data */
            title: props.title,
            image: props.image,
            plot: props.plot,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this) /*have to bind this to setReviews  */
    }
    
    setReviews(e) {
        let newReview = e.target.previousElementSibling.value
        this.setState( state => {
            if ( state.title === e.target.name ) { /*when a user adds a review it will be pushed 
            to the Review array */
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return( 
            <div className="container-fluid">
                <div className="card-header mx-auto text-center">
                <h3 className="card-title bg-secondary">{this.state.title}</h3>
                <div className="card mx-auto" style={{ width: "70%" }}>
                    <div className="card-body bg-dark text-light">
                        <p className="card-text">
                            <img src={this.state.image} alt="film image" /><br />{this.state.plot}</p>
                    </div>
                    <ReviewForm reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} />
                    <Stars />
                </div>
            </div>
        </div>
        ) 
    }
}