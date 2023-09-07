import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TopicList() {
  const router = useRouter();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const res = await fetch("https://apimongodb.barzdev.repl.co/api/topics", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }
        const data = await res.json();
        setTopics(data.topics);
        // console.log("data:", data); // Mencetak data di sini setelah diambil
      } catch (error) {
        console.log("Error loading topics:", error);
      }
    }

    fetchTopics();
  }, []);

  return (
    <>
      {topics.length === 0 ? (
        <div className="p-4 border border-slate-300 my-3 flex justify-center gap-5 items-start">
          {/* <h1 className="font-bold text-2xl">DATA MASIH KOSONG</h1> */}
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        topics.map((t, index) => (
          <div key={index} className="p-4 border border-4 border-sky-600 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`portofolio4/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
