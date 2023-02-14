import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axiosHeader from "../components/other/axiosHeader";

function Index() {
  useEffect(() => {
    try {
      axiosHeader.get("/auth/logout").then((res) => {
        console.log("res ", res.data.response);
        localStorage.removeItem("user");
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <p className="text-md">Signout successfully</p>
      <Link href="/" className="font-medium text-blue-700 text-md mt-4">
        Back to Home page
      </Link>
    </div>
  );
}

export default Index;
