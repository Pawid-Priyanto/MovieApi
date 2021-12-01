import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Aside, Footer } from "./views/components";
import { DetailsMovie, Genre, Movie } from "./views/pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Aside />
      <Switch>
        <Route path="/" component={Genre} exact strict />
        <Route path="/listgenre" component={Genre} exact />
        <Route path="/listmovie" component={Movie} exact />
        <Route path="/movie/:id" component={DetailsMovie} exact />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
