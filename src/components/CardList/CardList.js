import Card from 'components/Card/Card';
import { CardListBox,LoadMore,LoadMoreContainer } from './CardList.styled';
import { useState } from 'react';

const CardList = ({ users }) => {
    const [visibleCards, setVisibleCards] = useState(4);
    
  const loadMore = () => {
    setVisibleCards(visibleCards + 4);
  };
    
  return (
    <CardListBox>
      {users.slice(0, visibleCards).map(user => (
          <Card key={user.id} id={user.id} avatar={user.avatar} tweets={user.tweets} followers={user.followers } />
      ))}
          {visibleCards < users.length && (
              <LoadMoreContainer>
                          <LoadMore onClick={loadMore}>Load More</LoadMore>

              </LoadMoreContainer>
      )}    
    </CardListBox>
  );
};

export default CardList;
