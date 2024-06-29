import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className={css.list}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong! Try to reload the page!</p>}

      {filteredContacts.map((contact) => {
        return (
          <li className={css.card} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
