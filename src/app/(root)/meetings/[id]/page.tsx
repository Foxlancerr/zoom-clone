"use client";
import { useParams } from "next/navigation";
import React from "react";

function Meeting() {
  const { id } = useParams();

  return <div>id: {id}</div>;
}

export default Meeting;
