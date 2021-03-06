import React, {useEffect, useState} from "react";
import './App.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {getCategories, getUser} from "../state/actions";
import {useDispatch} from "react-redux";
import Login from "./Login/Login";
import MySessions from "./MySessions/MySessions";
import Home from "./Home/Home";

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispath = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await dispath(getUser());
        await dispath(getCategories());

        setLoading(false);
    };

  return (
      <div className='App'>
          <Navbar />
          {!loading && <main className='App__main'>
            <Switch>
                <Route path='/' exact ><Redirect to='/home' /></Route>
                <Route path='/home' exact render={() => <Home />} />
                <Route path='/search' exact render={() => <Home />} />
                <Route path='/login' exact render={() => <Login />} />
                <Route path='/my-sessions' exact render={() => <MySessions />} />
            </Switch>
        </main>}
      </div>
  )
};

export default App;