"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function EditTopicForm({ id, title, description }) {
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

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const url = "https://apimongodb.barzdev.repl.co";
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${url}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.push("/portofolio4");
        Toast.fire({
          icon: "success",
          title: "Data Updated",
        });
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label className="font-bold">OLD Title : "{title}"</label>
          <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="bg-white border border-slate-500 px-8 py-2" type="text" placeholder="New Title" required />
        </div>
        <div className="flex flex-col">
          <label className="font-bold">OLD Desc : "{description}"</label>
          <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} className="bg-white border border-slate-500 px-8 py-2" type="text" placeholder="New Description" required />
        </div>
        <div className="flex gap-5 justify-end">
          <button className="bg-blue-600 font-bold text-white py-3 px-6 w-fit"> Update Data</button>
          <Link href={"/portofolio4"} className="bg-red-600 font-bold text-white py-3 px-6 w-fit">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
