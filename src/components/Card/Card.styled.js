import styled from 'styled-components';
import heroImg from '../../images/hero.png';

export const CardContainer = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 28px 0 36px 0;
  width: 380px;
  height: 460px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  fill: white;
  margin-left: 20px;
`;

export const HeroImg = styled.div`
  background-image: url(${heroImg});
  width: 308px;
  height: 168px;
  margin: auto;
  margin-top: 28px;
`;
export const AvatarContainer = styled.div`
  background-color: #5736a3;
  width: 64px;
  height: 64px;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: auto;
  position: relative; 
  &::before {
    content: "";
    height: 8px;
    width: 380px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); 
  }
`;



export const Avatar = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
`;

export const CardText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
export const CardTextContainer = styled.div`
  margin-top: 26px;
  text-align: center;
`;

export const FollowingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  /* max-width:196px; */

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  border: none;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 120px;
  /* max-width:196px; */

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 36px;
`;
