import Dashboard from "../Dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import Transaction from "../Transaction/Transaction";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Dashboard />
      <Social />
      <Transaction />
    </div>
  );
};

export default Home;
