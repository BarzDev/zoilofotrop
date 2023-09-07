import NavbarPortofolio from "@/components/Navbar/navbar-porto";
import AddTopic from "@/components/PortoCRUD/AddTopic";
import Navbar from "@/components/PortoCRUD/Navbar";

export default function AddTopicRoute() {
  return (
    <>
      <NavbarPortofolio />
      <div className="bg-slate-200 h-screen">
        <div className="max-w-3xl mx-auto p-4 text-black " style={{ paddingTop: "69px" }}>
          <Navbar />
          <div className="mt-8">
            <AddTopic />
          </div>
        </div>
      </div>
    </>
  );
}
