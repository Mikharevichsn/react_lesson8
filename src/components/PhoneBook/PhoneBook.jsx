import { useCallback, useReducer, useMemo } from 'react';
import shortid from 'shortid';

const initList = {
  contacts: [
    { id: shortid(), name: 'Ivan', phone: '3453434534534' },
    { id: shortid(), name: 'Petr', phone: '987989879879' },
  ],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        error: null,
      };

    case 'DELETE_USER':
      if (Math.random() > 0.5) {
        return {
          ...state,
          error: 'Ошибка удаления!',
        };
      }

      return {
        ...state,
        contacts: state.contacts.filter((user) => user.id !== action.payload),
        error: null,
      };

    default:
      return state;
  }
};

export const PhoneBook = () => {
  const [list, dispatch] = useReducer(reducer, initList);

  console.log('list = ', list);

  const addUser = useCallback(() => {
    dispatch({
      type: 'ADD_USER',
      payload: { id: shortid(), name: 'Igor', phone: '111111111' },
    });
  }, [dispatch]);

  const deleteUser = useCallback(
    (id) => {
      dispatch({
        type: 'DELETE_USER',
        payload: id,
      });
    },
    [dispatch]
  );

  const countContacts = useMemo(() => {
    return list.contacts.length;
  }, [list]);

  return (
    <div>
      <h3>Телефонный справочник:</h3>
      <p style={{ color: 'red' }}>{list.error}</p>
      <ul>
        {list.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{' '}
            <button type='button' onClick={() => deleteUser(contact.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <div>Всего пользователей: {list.contacts.length}</div>
      <div>Всего пользователей: {countContacts}</div>

      {/* <button type="button" onClick={() => addUser()}>Добавить пользователя</button>
      <button type="button" onClick={(event) => addUser()}>Добавить пользователя</button>
      <button type="button" onClick={(event) => addUser(event)}>Добавить пользователя</button> */}
      <button type='button' onClick={addUser}>
        Добавить пользователя
      </button>
    </div>
  );
};
