import { BrowserRouter as Router, Route, Routes } from "react-router";

import { Footer, Header, ProductPage, Shop } from "./layout"

export default function App() {
  return ( 
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Shop />}/>
      <Route path="products/:productId" element={<ProductPage /> } />
    </Routes>
    <Shop />
    <Footer />
  </Router>
  )
}
