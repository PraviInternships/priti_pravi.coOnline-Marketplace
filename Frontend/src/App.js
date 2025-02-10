import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Booking from './pages/Booking';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/search" component={SearchResults} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/profile" component={Profile} />
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;