import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';
import './styles.css'; // Import the styles.css

const App = () => {
  return (
      <Router>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensePage />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
