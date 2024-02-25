import { Contact } from '../Contact/Contact'
import css from '../ContactList/ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks} from '../../redux/operations'
import { useEffect } from 'react'

export const ContactList = () => {
    // // console.log(typeof(AllContacts));
   
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchTasks());
    // }, [dispatch]);
     const contacts = useSelector(state => state.contacts.items);
    console.log(contacts);
    const filterValue = useSelector(state => state.filters);
 


    const allContacts = contacts.filter(user =>
    user.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
    )

  
    return (<div>
        <ul className={ css.allContacts}>
            {
                allContacts.map(value => (
                    
                    <li className={css.contactContainet} key={ value.id}>
                         <Contact  contact={value} />
                    </li>
            )) }
        
        </ul>
    </div>
)
}