import React from "react";
import MoviesList from "./movies-list/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import AppLogo from "./AppLogo";
import Search from "./search/Search";
import MovieView from "./movie/MovieView";
const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <AppLogo />
        <MovieView title='test title'  releaseDate='13/12/2019' rating='4' duration='122'  description='yrgegdsliufdhihdfhgfdohifdohjohpojgfphjgfphjpgfjhpgfjhpfyrgegdsliufdhihdfhgfdohifdohjohpojgfphjgfphjpgfjhpgfjhpfyrgegdsliufdhihdfhgfdohifdohjohpojgfphjgfphjpgfjhpgfjhpf'  genres={['comedy', 'drama']} url="https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"/>
      </ErrorBoundary>
    </div>
  );
};

export default App;
