import {
  CardContainer,
  Logo,
  HeroImg,
    AvatarContainer,
  Avatar,
    AvatarImg,
  AvatarLine,CardText,FollowingButton,CardTextContainer,FollowButton,ButtonContainer
} from './Card.styled';
import logo from '../../images/logo.svg';
import heroImg from '../../images/hero.png';
import defaultAvatar from '../../images/defaultAvatar.png';

const Card = () => {
  return (
    <>
      <CardContainer>
        <Logo src={logo} alt="logo" />
        <HeroImg src={heroImg} alt="hero" />
       
                  <Avatar>
                      <AvatarLine />
                       <AvatarContainer>
                        <AvatarImg src={defaultAvatar} alt="avatar" />
                 </AvatarContainer>
              </Avatar>
              <CardTextContainer>
                     <CardText> 777 tweets</CardText>   
              <CardText>100,500 Followers</CardText>
              </CardTextContainer>
              <ButtonContainer>
                    <FollowButton>Follow</FollowButton>
              </ButtonContainer>
              <ButtonContainer>
                   <FollowingButton>Following</FollowingButton>
             </ButtonContainer>

             
      </CardContainer>
    </>
  );
};

export default Card;
