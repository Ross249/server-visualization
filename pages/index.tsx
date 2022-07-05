import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div className=" bg-gray-200">
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Header />
        <Container />
      </div>
    </div>
  );
};

export default Home;
