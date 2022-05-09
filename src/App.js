import logo from './logo.svg';
import './App.css';
import LinkList from './components/LinkList';
import CreateLink from './components/CreateLink';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
