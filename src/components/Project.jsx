import { useState } from "react";
import Poster from "./projects/Poster";
import Logo from "./projects/Logo";
import Video from "./projects/Video";
import Animation from "./projects/Animation";
import Character from "./projects/Character";
import MockUp from "./projects/MockUp";
import Article from "./projects/Article";

const Project = () => {
  const [tab, setTab] = useState("Posters");
  return (
    <section
      id="projects"
      className="container min-h-screen mx-auto flex-center"
    >
      <div className="w-full text-center text-balance">
        <h3 className="font-bold text-primary">My Projects</h3>

        <br />
        <div className="flex-wrap gap-4 flex-center">
          <button
            onClick={() => setTab("Posters")}
            className={`btn ${
              tab === "Posters" ? "btn-filled" : "btn-outline"
            }`}
          >
            Posters
          </button>
          <button
            onClick={() => setTab("Logos")}
            className={`btn ${tab === "Logos" ? "btn-filled" : "btn-outline"}`}
          >
            Logos
          </button>
          <button
            onClick={() => setTab("Videos")}
            className={`btn ${tab === "Videos" ? "btn-filled" : "btn-outline"}`}
          >
            Videos
          </button>
          <button
            onClick={() => setTab("Animation")}
            className={`btn ${
              tab === "Animation" ? "btn-filled" : "btn-outline"
            }`}
          >
            Animation
          </button>
          <button
            onClick={() => setTab("Characters")}
            className={`btn ${
              tab === "Characters" ? "btn-filled" : "btn-outline"
            }`}
          >
            Characters
          </button>
          <button
            onClick={() => setTab("Mockups")}
            className={`btn ${
              tab === "Mockups" ? "btn-filled" : "btn-outline"
            }`}
          >
            Mockups
          </button>
          <button
            onClick={() => setTab("Articles")}
            className={`btn ${
              tab === "Articles" ? "btn-filled" : "btn-outline"
            }`}
          >
            Articles
          </button>
        </div>
        <br />
        {/* projects */}
        {tab === "Posters" ? (
          <Poster />
        ) : tab === "Logos" ? (
          <Logo />
        ) : tab === "Videos" ? (
          <Video />
        ) : tab === "Animation" ? (
          <Animation />
        ) : tab === "Characters" ? (
          <Character />
        ) : tab === "Mockups" ? (
          <MockUp />
        ) : tab === "Articles" ? (
          <Article />
        ) : null}
      </div>
    </section>
  );
};

export default Project;
