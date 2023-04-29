import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';
import CardList from './CardList/CardList';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);



  useEffect(() => {
 dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <div>
      <CardList users={users}/>
    </div>
  );
};
