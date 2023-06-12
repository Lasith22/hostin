import { Route, Routes, Link } from 'react-router-dom';
import Counter from './components/ Counter';
import Form from './components/Form';
import Props from './components/Props';
import Home from './components/routinTute/Home';
import BookList from './components/routinTute/BookList';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
