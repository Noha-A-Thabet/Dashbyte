import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Calendars from "./Components/Calendars/Calendars";
import Forms from "./Components/Forms/Forms";
import Contacts from "./Components/Contacts/Contacts";
import Invoices from "./Components/Invoices/Invoices";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="calendars" element={<Calendars />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="Invoices" element={<Invoices />} />
        <Route path="Contacts" element={<Contacts />} />
        {/* <Route path="Blogs" element={<Blogs />} /> */}
        {/* <Route path="Charts" element={<Charts />} /> */}
        {/* <Route path="Email" element={<Email />} /> */}
        {/* <Route path="Jobs" element={<Jobs />} /> */}
        {/* <Route path="Maps" element={<Maps />} /> */}
        {/* <Route path="Projects" element={<Projects />} /> */}
        {/* <Route path="Tasks" element={<Tasks />} /> */}
      </Routes>
    </>
  );
}

export default App;
