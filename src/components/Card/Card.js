import {
  CardContainer,
  Logo,
  HeroImg,
  AvatarContainer,
  Avatar,
  AvatarImg,
  AvatarLine,
  CardText,
  FollowingButton,
  CardTextContainer,
  FollowButton,
  ButtonContainer,
} from './Card.styled';
import logo from '../../images/logo.svg';
import heroImg from '../../images/hero.png';
import defaultAvatar from '../../images/defaultAvatar.png';

const Card = ({ id,avatar,tweets,followers }) => {
  return (

<CardContainer key={id}>
          <Logo src={logo} alt="logo" />
          <HeroImg src={heroImg} alt="hero" />

          <Avatar>
            <AvatarLine />
            <AvatarContainer>
              {!avatar ? (
                <AvatarImg src={defaultAvatar} alt="avatar" />
              ) : (
                <AvatarImg src={avatar} alt="avatar" />
              )}
                  </AvatarContainer>
          </Avatar>
          <CardTextContainer>
            <CardText> {tweets} tweets</CardText>
            <CardText>{followers} Followers</CardText>
          </CardTextContainer>
          <ButtonContainer>
            <FollowButton>Follow</FollowButton>
          </ButtonContainer>
          {/* <ButtonContainer>
                   <FollowingButton>Following</FollowingButton>
             </ButtonContainer> */}
        </CardContainer>
  );
};

export default Card;
