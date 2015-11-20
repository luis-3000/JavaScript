/* Code to rate movies. */
var getReview = function (movie) {
    switch(movie) {
        case "Toy Story 2": 
            return "Great story. Mean Prospector.";
            break;
        case "Finding Nemo": 
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King": 
            return "Great songs.";
            break;
        default: 
            return "I don't know!";
    }
    
};