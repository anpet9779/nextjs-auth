"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Profile = () => {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setData(res.data.user._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="m-4">Profile</h1>
      <h2>
        User ID:{" "}
        {data === "nothing" ? (
          "No ID..."
        ) : (
          <Link className="bg-blue-500" href={`/profile/${data}`}>
            {data}
          </Link>
        )}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={getUserDetails}
      >
        Get User Details
      </button>
    </div>
  );
};

export default Profile;
