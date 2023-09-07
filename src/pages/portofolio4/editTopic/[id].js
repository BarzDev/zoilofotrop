import NavbarPortofolio from "@/components/Navbar/navbar-porto";
import EditTopicForm from "@/components/PortoCRUD/EditTopicFrom";
import Navbar from "@/components/PortoCRUD/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function EditTopic() {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState({ title: "", description: "" });
  const url = "https://apimongodb.barzdev.repl.co";

  useEffect(() => {
    const getTopicById = async (id) => {
      try {
        const res = await fetch(`${url}/api/topics/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch Topic");
        }
        const response = await res.json();
        const data = response.topic;
        // console.log("data:", data);
        setTopic(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    if (id) {
      getTopicById(id); // Call the function with the id parameter
    }
  }, [id]);

  return (
    <>
      <NavbarPortofolio />
      <div className="bg-slate-200 h-screen overflow-auto">
        <div className="max-w-3xl mx-auto p-4 text-black " style={{ paddingTop: "69px" }}>
          <Navbar />
          <div className="mt-8">
            <EditTopicForm id={topic._id} title={topic.title} description={topic.description} />
          </div>
        </div>
      </div>
    </>
  );
}
