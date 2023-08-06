import elysian from "../public/images/works/1.PNG";
import movieland from "../public/images/works/2.PNG";

const images = [
  {
    id: 1,
    src: elysian,
    alt: "Elysian - a fullstack e-commerce app",
    title: "Elysian",
    description:
      "A fullstack e-commerce app featuring a shopping cart, user authentication, and an admin dashboard.",
    technologies: ["react.js", "mongoDB", "express.js", "node.js"],
    github: "https://github.com/twapegg/elysian",
    url: "https://elysian-theta.vercel.app/",
  },
  {
    id: 2,
    src: movieland,
    alt: "MovieLand - a movie search app",
    title: "MovieLand",
    description: "A movie search app using the OMDB API.",
    technologies: ["react.js", "omdb API"],
    github: "https://github.com/twapegg/react-practice-movieland",
    url: "https://movieland-app.onrender.com/",
  },
];

export default images;
