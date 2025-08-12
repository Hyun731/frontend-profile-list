import Home from "./pages/Home"
import ProfileLayout from "./pages/ProfileLayout"
import ProfileList from "./components/ProfileList"
import ProfileForm from "./components/ProfileForm"
import ProfileModify from "./components/ProfileModify"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';



function App() {
  const [cards, setCardData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/profiles')
      .then(res => res.json())
      .then(data => setCardData(data))
      .catch(err => console.error(err));
  }, []);

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
