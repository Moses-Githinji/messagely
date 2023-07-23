"use client";

import { FullMessageType } from "@/app/types";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  return <div>Body!</div>;
};

export default Body;
