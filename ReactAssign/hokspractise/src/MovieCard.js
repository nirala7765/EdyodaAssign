import React from "react";
import ReactDOM from "react-dom";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MovieData: {
                Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEgoovrV3JkLLIdZtBkGka12COB2nyn2XfSjSZGEg5w&s",
                Tiltle: "Dummy Title",
                Year: "Dummy Year",
                Genre: "Dummy Genre",
                Actors: "Dummy Actors",
                Director: "Dummy Directors",
                Awards: "Dummy Directors"
            },

        };
    }


    async componentDidMount(){

        console.log("Mount Called")


        let url = "https://www.omdbapi.com/?i=tt0371746&apikey=53b4ed65"
        let response = await fetch(url)
        let data = await response.json()

        console.log("Datas are =====>>>",data)


        setTimeout(()=>{
            this.setState({MovieData:data});
        },1000);

        
    }


    componentDidUpdate(){
        console.log("Update Called")
    }


    render() {
        return (

            <div>


                <h1>Movie Component</h1>
                <img src={this.state.MovieData.Poster} alt="Image Loading"/>

                <h1>Title -{this.state.MovieData.Title}</h1>
                <h1>Released Year-{this.state.MovieData.Year}</h1>
                <h1>Genre -{this.state.MovieData.Genre}</h1>
                <h1>Actors -{this.state.MovieData.Actors}</h1>
                <h1>Directed by -{this.state.MovieData.Director}</h1>
                <h1>Awards Won & Nominated -{this.state.MovieData.Awards}</h1>

            </div>

            

        )

    }
}

export default Movie;