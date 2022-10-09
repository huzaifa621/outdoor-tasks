import { useContext, useReducer } from "react";
import { AllTasksContext } from "../Contexts/AllTasksProvider";
import styles from "./addTask.module.css";

const initialState = {
   itemName: "",
   quantity: 1,
   price: 0,
};

const reducer = (state, action) => {
   switch (action.type) {
      case "itemName":
         return { ...state, itemName: action.payload };
      case "quantity":
         return { ...state, quantity: parseInt(action.payload) };
      case "price":
         return { ...state, price: parseInt(action.payload) };
      case "reset":
         return initialState;
      default:
         return state;
   }
};

export const AddTask = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const { data, addData } = useContext(AllTasksContext);

   const handleChange = (e) => {
      dispatch({ type: e.target.name, payload: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addData({
         ...state,
         id: data.length + 1,
         totalPrice: state.quantity * state.price,
      });
      dispatch({ type: "reset" });
   };

   return (
      <>
         <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="item">Item Name:</label>
            <input
               onChange={handleChange}
               value={state.itemName}
               name="itemName"
               id="item"
               type="text"
            />
            <br />
            <label htmlFor="qty">Qty:</label>
            <select
               onChange={handleChange}
               value={state.quantity}
               name="quantity"
               id="qty"
            >
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="1">10</option>
            </select>
            <br />
            <label htmlFor="price">Price</label>
            <input
               onChange={handleChange}
               value={state.price}
               name="price"
               id="price"
               type="number"
            />
            <br />
            <button type="submit">Add</button>
         </form>
      </>
   );
};
