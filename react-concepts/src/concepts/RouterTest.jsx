import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home.jsx';
import User from './user.jsx';
import About from './about.jsx';

export const RouterTest = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};