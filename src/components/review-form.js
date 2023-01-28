import React from "react";
import Review from "./review";

export default class ReviewForm extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }
    render() {
        return ( 
            <div className="container">                 
                <div>
                <Review reviews={this.state.reviews} />
                </div>                 
            </div>
        )
    }
}
