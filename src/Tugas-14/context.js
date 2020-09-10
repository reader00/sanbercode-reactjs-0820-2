import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const BuahContext = createContext();

export const BuahProvider = (props) => {
  const [dataBuah, setDataBuah] = useState(null);
  const [input, setInput] = useState({
    id: -1,
    name: "",
    price: "",
    weight: "",
  });

  useEffect(() => {
    if (dataBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataBuah(res.data);
          console.log(res.data);
          console.log(input);
        });
    }
  }, [dataBuah]);

  return (
    <BuahContext.Provider value={{ dataBuah, setDataBuah, input, setInput }}>
      {props.children}
    </BuahContext.Provider>
  );
};
