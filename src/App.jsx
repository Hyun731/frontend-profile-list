import Home from "./pages/Home"
import ProfileLayout from "./pages/ProfileLayout"
import ProfileList from "./components/ProfileList"
import ProfileForm from "./components/ProfileForm"
import ProfileModify from "./components/ProfileModify"
import cardData from "./data/cardData"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {
  const [cards, setCardData] = useState(cardData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileLayout cardData={cards} setCardData={setCardData}/>}>
          <Route path="list" element={<ProfileList/>} />
          <Route path="form" element={<ProfileForm/>} />
          <Route path="modify/:id" element={<ProfileModify/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
