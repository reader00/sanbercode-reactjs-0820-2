import React from "react";
import { BuahProvider } from "./context";
import BuahList from "./tableBuah";
import BuahForm from "./formBuah";

const Buah = () => {
  return (
    <BuahProvider>
      <BuahList />
      <BuahForm />
    </BuahProvider>
  );
};

export default Buah;
