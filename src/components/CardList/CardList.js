import Card from 'components/Card/Card';
import { CardListBox,LoadMore,LoadMoreContainer } from './CardList.styled';
import { useState,useEffect } from 'react';

const CardList = ({ users }) => {
    // const [visibleCards, setVisibleCards] = useState(4);

      const [visibleCards, setVisibleCards] = useState(
    Number(localStorage.getItem('visibleCards')) || 4
  );

  useEffect(() => {
    localStorage.setItem('visibleCards', visibleCards);
  }, [visibleCards]);
    
  const loadMore = () => {
    setVisibleCards(visibleCards + 4);
    };
     const hidden = () => {
    setVisibleCards(visibleCards - 4);
  };
    
  return (
    <CardListBox>
      {users.slice(0, visibleCards).map(user => (
                    <Card key={user.id} user={user} />

      ))}
          {visibleCards < users.length &&  (
              <LoadMoreContainer>
                          <LoadMore onClick={loadMore}>Load More</LoadMore>
              </LoadMoreContainer>
          )}    
                    {visibleCards > 4 &&  (
              <LoadMoreContainer>
<LoadMore onClick={hidden}>Hide</LoadMore>
              </LoadMoreContainer>
          )}    
          
    </CardListBox>
  );
};

export default CardList;
