import { createContext } from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

export const AllTasksContext = createContext();

export const AllTasksContextProvider = ({ children }) => {
   const [data, addData] = useLocalStorage([]);

   return (
      <AllTasksContext.Provider value={{ data, addData }}>
         {children}
      </AllTasksContext.Provider>
   );
};
