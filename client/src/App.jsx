
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
import ViewSandwich from "./pages/ViewSandwich"; // Import the ViewSandwich page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandwiches" element={<SandwichList />} />
        <Route path="/sandwiches/:id" element={<ViewSandwich />} /> {/* View single sandwich */}
      </Routes>
    </Router>
  );
}

export default App;
