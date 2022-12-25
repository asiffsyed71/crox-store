import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navigation from "./Routes/navigation/Navigation";

const Shop = () => {
  return <h2>This is shop page</h2>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
