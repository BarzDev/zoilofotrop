import NavbarPortofolio from "@/components/Navbar/navbar-porto";
import Navbar from "@/components/PortoCRUD/Navbar";
import TopicList from "@/components/PortoCRUD/TopicList";

export default function Portofolio4() {
  return (
    <>
      <NavbarPortofolio />
      <div className="bg-slate-200 h-screen overflow-auto">
        <div className="max-w-3xl mx-auto p-4 text-black " style={{ paddingTop: "69px" }}>
          <Navbar />
          <div className="mt-8">
            <TopicList />
          </div>
        </div>
      </div>
    </>
  );
}
