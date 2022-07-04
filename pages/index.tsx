import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="w-screen">
          <Header />
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Home;
