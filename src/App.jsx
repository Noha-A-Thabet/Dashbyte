import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Calendars from "./Components/Calendars/Calendars";
import Forms from "./Components/Forms/Forms";
import Blogs from "./Components/Blogs/Blogs";
import Charts from "./Components/Charts/Charts";
import Contacts from "./Components/Contacts/Contacts";
import Email from "./Components/Email/Email";
import Invoices from "./Components/Invoices/Invoices";
import Jobs from "./Components/Jobs/Jobs";
import Maps from "./Components/Maps/Maps";
import Projects from "./Components/Projects/Projects";
import Tasks from "./Components/Tasks/Tasks";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="calendars" element={<Calendars />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Charts" element={<Charts />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Email" element={<Email />} />
        <Route path="Invoices" element={<Invoices />} />
        <Route path="Jobs" element={<Jobs />} />
        <Route path="Maps" element={<Maps />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
