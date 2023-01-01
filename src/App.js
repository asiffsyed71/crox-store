import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navigation from "./Routes/navigation/Navigation";
import SignIn from "./Routes/sigin/SignIn";

const Shop = () => {
  return <h2>This is shop page</h2>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
