import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTasks} from '../../redux/operations.js'


import css from '../Contact/Contact.module.css'

export const Contact = ({ contact: { id, name, number } }) => {
      const dispatch = useDispatch();
  
    
    const onDeleteContact = (id) => {
        dispatch(deleteTask(id));
        dispatch(fetchTasks())
        // console.log(id);
 }
//  dispatch(fetchTasks())
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);
    return (
        <>
            <div>
                <p><IoPerson />  { name}</p>
                <p><IoCall />  {number}</p>
            </div>
            <button onClick={() => onDeleteContact(id)} type="button" className={ css.btnDelete}>Delete</button>
        </>
    )
}
