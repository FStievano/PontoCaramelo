import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { ContactPage } from "./Pages/ContactPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
