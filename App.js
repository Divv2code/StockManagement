import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebaseConfig';
import AdminDashboard from './pages/adminDashboard';
import StaffDashboard from './pages/staffDashboard';
import Login from './pages/login';
import Logout from './pages/logout';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <AdminDashboard /> : <Login />}
        </Route>
        <Route path="/admin">
          {user ? <AdminDashboard /> : <Login />}
        </Route>
        <Route path="/staff">
          {user ? <StaffDashboard /> : <Login />}
        </Route>
        <Route path="/login">
          {user ? <AdminDashboard /> : <Login />}
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
