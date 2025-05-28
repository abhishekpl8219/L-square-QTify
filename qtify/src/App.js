// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import AlbumSongsPage from "./components/Album Songs Page/AlbumSongsPage";
import HomePage from "./components/Home Page/HomePage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route path="/" Component={HomePage} />
          <Route path="/album/:title" Component={AlbumSongsPage} />{" "}
        </Routes>{" "}
      </Router>
    </>
  );
};

export default App;
