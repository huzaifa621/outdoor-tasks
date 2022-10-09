import { useState } from "react";

const getData = () => {
   let data = JSON.parse(localStorage.getItem("data")) || [];
   return data;
};

export const useLocalStorage = (initialState) => {
   const [data, setData] = useState(() => getData());

   const addData = (task) => {
      localStorage.setItem("data", JSON.stringify([...data, task]));
      setData([...data, task]);
   };

   return [data, addData];
};
