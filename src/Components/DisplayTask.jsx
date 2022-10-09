import { useContext } from "react";
import { AllTasksContext } from "../Contexts/AllTasksProvider";
import { TaskRow } from "./TaskRow";
import styles from "./displayTask.module.css";

export const DisplayTask = () => {
   const { data } = useContext(AllTasksContext);

   return (
      <table className={styles.table}>
         <thead>
            <tr>
               <td>S.No</td>
               <td>Item name</td>
               <td>Qty</td>
               <td>Price</td>
               <td>Total Price</td>
            </tr>
         </thead>
         <tbody>
            {data.map((el) => (
               <TaskRow key={el.id} item={{ ...el }} />
            ))}
            <tr>
               <td></td>
               <td></td>
               <td></td>
               <td>Total:</td>
               <td>{data.reduce((acc, el) => acc + el.totalPrice, 0)}</td>
            </tr>
         </tbody>
      </table>
   );
};
