import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
