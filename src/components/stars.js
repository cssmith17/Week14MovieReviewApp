import React from 'react';

export default class Stars extends React.Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-12">
                <div className="stars">
                  <form action="">
                    <input
                      className="star star-1"
                      id="star-1"
                      type="radio"
                      name="star"
                      value="1"
                    />
                    <label className="star star-1" htmlFor="star-1">1</label>
                    <input
                      className="star star-2"
                      id="star-2"
                      type="radio"
                      name="star"
                      value="2"
                    />
                    <label className="star star-2" htmlFor="star-2">2</label>
                    <input
                      className="star star-3"
                      id="star-3"
                      type="radio"
                      name="star"
                      value="3"
                    />
                    <label className="star star-3" htmlFor="star-3">3</label>
                    <input
                      className="star star-4"
                      id="star-4"
                      type="radio"
                      name="star"
                      value="4"
                    />
                    <label className="star star-4" htmlFor="star-4">4</label>
                    <input
                      className="star star-5"
                      id="star-5"
                      type="radio"
                      name="star"
                      value="5"
                    />
                    <label className="star star-5" htmlFor="star-5">5</label>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}

