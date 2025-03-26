
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SandwichList from "./pages/SandwichList";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/sandwiches" element={<SandwichList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SandwichList from "./pages/SandwichList";
import ViewSandwich from "./pages/ViewSandwich"; 
import AddSandwich from "./pages/AddSandwich";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandwiches" element={<SandwichList />} />
        <Route path="/sandwiches/:id" element={<ViewSandwich />} /> 
        <Route path="/add-sandwich" element={<AddSandwich />} />
      </Routes>
    </Router>
  );
}

export default App;
