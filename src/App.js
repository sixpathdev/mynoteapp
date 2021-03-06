import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/NavBar";
import Listnotes from "./components/Listnotes";
import Note from "./components/Note";
import Newnote from "./components/Newnote";
import Editnote from "./components/Editnote";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Listnotes} />
      <Route path="/new" component={Newnote} />
        <Route path="/:note_id/edit" component={Editnote} />
      <Route path="/:note_id" component={Note} />
    </Switch>
    </React.Fragment>
  );
};

export default App;
