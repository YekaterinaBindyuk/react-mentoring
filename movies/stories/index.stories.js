import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MAIN_LOGO } from "../src/environment/const";

import { Button } from "@storybook/react/demo";

storiesOf("BackButton", module);

storiesOf("App", module)
  .add("BackButton", () => (
    <Button onClick={action("goBack button clicked. It leads to index page")}>
      Back
    </Button>
  ))
  .add("About page", () => (
    <div>
      This website has been developed for educational purposes. Don't be too
      judgemental.
    </div>
  ))
  .add("AppLogo", () => (
    <div>
      {" "}
      This component contains logo-link to the main page
      <div>
        <img
          src={"http://localhost:8081" + MAIN_LOGO}
          alt="logo"
          onClick={action("It leads to index page")}
        />
      </div>
    </div>
  ));

storiesOf("MovieView", module).add("MovieView page", () => (
  <div>
    This component is intended to show a movie in details:
    <div>
      This block renders a single movie.
      <div>
        <img
          src={
            "https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg"
          }
          alt="movie cover"
          height="200"
          width="200"
        />
        <div>Movie X</div>
        <div> Comedy, Drama </div>
        <div> Movie description goes here </div>
        <div>11-11-2011</div>
      </div>
    </div>
    <div>
      This block renders recommended movies based on the genre of a rendered
      movie.
    </div>
  </div>
));

storiesOf("MovieList", module).add("MovieList", () => (
  <div>
    This page is intended to render a movielist:
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg"}
        alt="movie cover"
        height="200"
        width="200"
        onClick={action("It leads to a detailed movie page")}
      />
      <div>Movie X</div>
      <div> Comedy, Drama </div>
      <div>11-11-2011</div>
    </div>
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg"}
        alt="movie cover"
        height="200"
        width="200"
        onClick={action("It leads to a detailed movie page")}
      />
      <div>Movie X</div>
      <div> Comedy, Drama </div>
      <div>11-11-2011</div>
    </div>
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg"}
        alt="movie cover"
        height="200"
        width="200"
        onClick={action("It leads to a detailed movie page")}
      />
      <div>Movie X</div>
      <div> Comedy, Drama </div>
      <div>11-11-2011</div>
    </div>
  </div>
  
)).add("MovieListItem", () => (
  <div>
    This page is intended to render an item of movielist:
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg"}
        alt="movie cover"
        height="200"
        width="200"
        onClick={action("It leads to a detailed movie page")}
      />
      <div>Movie X</div>
      <div> Comedy, Drama </div>
      <div>11-11-2011</div>
    </div>
  </div>
));
