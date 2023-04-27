import {
  CardContainer,
  Logo,
  HeroImg,
    AvatarContainer,
  Avatar,
    AvatarImg,
  AvatarLine
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
      </CardContainer>
    </>
  );
};

export default Card;
