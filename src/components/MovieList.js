//a container for all the Movie components and their data.

import Movie from "./Movie";
import SpiritedAway from "../MoviePics/SpiritedAway.jpg";
import HowlsMovingCastle from "../MoviePics/HowlsMovingCastle.jpg";
import PrincessMononoke from "../MoviePics/PrincessMononoke.jpg";

function MovieList() {
  const movies = [ //array of movie objects
    {
      id: 1,
      title: "Spirited Away",
      image: <img className="image" src={SpiritedAway} />,
      synopsis:
        "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents."
    },
    {
      id: 2,
      title: "Howl's Moving Castle",
      image: <img className="image" src={HowlsMovingCastle} />,
      synopsis:
        "Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty."
    },
    {
      id: 3,
      title: "Princess Mononoke",
      image: <img className="image" src={PrincessMononoke} />,
      synopsis:
        "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict."
    },
  ];

  //map over movies to create a movieList
  const movieList = movies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      image={movie.image}
      synopsis={movie.synopsis}
    />
  ));

  return <div className="movielist">{movieList}</div>;
};

export default MovieList;
