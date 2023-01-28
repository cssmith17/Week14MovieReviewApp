
import React from "react";
import Navbar from "./navbar";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [ 
            {
                title: "Shaun of the Dead",
                image: "/../images/shaunofthedead.jpg",
                plot: "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
                reviews: []
            }, 
            {
                title: "The Big Lebowski",
                image:  "/../images/thebiglebowski.jpeg",
                plot: "Ultimate L.A. slacker Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",            
                reviews: []
            },
            {
                title: "The Matrix",
                image: "/../images/thematrix.jpg",
                plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                reviews: [] 
            }
        ]

        let arr;
        arr = movies.map( (movies, index ) => 
            <Movie title={movies.title} plot={movies.plot} reviews={movies.reviews} image={movies.image} key={index} />
        ) 

        return (
            
            <div className="container">
                <div id="navbar">
                    <Navbar />
                </div> <br /><br />
                
                <div>
                    {arr}
                </div>  
            </div>
       )
    } 
}