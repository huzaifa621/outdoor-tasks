export const TaskRow = ({ item }) => {
   return (
      <tr>
         <td>{item.id}</td>
         <td>{item.itemName}</td>
         <td>{item.quantity}</td>
         <td>{item.price}</td>
         <td>{item.totalPrice}</td>
      </tr>
   );
};
