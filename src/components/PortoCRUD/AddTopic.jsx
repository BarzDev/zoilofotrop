"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = "https://apimongodb.barzdev.repl.co";

  const router = useRouter();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    try {
      const res = await fetch(`${url}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/portofolio4");
        Toast.fire({
          icon: "success",
          title: "Data Created",
        });
      } else {
        router.push("/portofolio4");
        Toast.fire({
          icon: "error",
          title: "DATA FULL MAX 7 ENTRY",
        });

        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSumbit} className="flex flex-col gap-3">
      <input onChange={(e) => setTitle(e.target.value)} value={title} className="bg-white border border-slate-500 px-8 py-2" type="text" placeholder="Title CRUD" />

      <input onChange={(e) => setDescription(e.target.value)} value={description} className="bg-white border border-slate-500 px-8 py-2" type="text" placeholder="Description" />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        {" "}
        SAVE DATA
      </button>
    </form>
  );
}
