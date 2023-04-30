import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';
import CardList from './CardList/CardList';

import Start from './Start/Start';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/cards" element={<CardList users={users} />} />
      </Routes>
    </>
  );
};
