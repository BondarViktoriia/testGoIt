import styled from 'styled-components';

export const CardContainer = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  width: 380px;
  height: 460px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  fill: white;
  margin: 20px 0 0 20px;
`;
export const HeroImg = styled.img`
  margin: 0 36px 0 36px;
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
export const AvatarLine = styled.div`
  height: 8px;
  width: 380px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  position: absolute;
  left: 0;
`;
