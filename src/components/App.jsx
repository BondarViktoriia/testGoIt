// import Card from "./Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers, selectIsLoading, selectError } from 'redux/users/usersSelectors';
import CardList from './CardList/CardList';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
 dispatch(fetchUsers());
  }, [dispatch]);
  console.log('error', error);
  console.log('isLoading', isLoading);
  return (
    <div>
      <CardList users={users}/>
      {/* <Card users={users} /> */}
    </div>
  );
};
