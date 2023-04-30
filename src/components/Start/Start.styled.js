import styled from 'styled-components';

export const StartContainer = styled.div`
  background: rgb(212, 19, 166);
  background: radial-gradient(
    circle,
    rgba(212, 19, 166, 1) 29%,
    rgba(38, 38, 39, 1) 80%,
    rgba(38, 38, 39, 1) 81%
  );
  width: 100vw;
  height: 100vh;
  padding: 35px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  fill: white;
  margin-left: 20px;
`;

export const Follow = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 110px;
  margin-top: 230px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;

  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  :not(:last-of-type) {
    margin-top: 100px;
  }
`;
export const InformContainer = styled.div`
  display: flex;
`;
export const SpinnerContainer = styled.div`
  margin-top: 220px;
  margin-left: 240px;
`;

export const WaveButton = styled.button`
  font-size: 20px;
  color: #fff;
  padding: 10px 30px;
  margin: 10px;
  border: none;
  outline: none;
  position: relative;
  background-color: #333;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  margin-top: 50px;

  &:hover {
    box-shadow: 0 0 20px #f0f, 0 0 40px #f0f, 0 0 80px #f0f;
    transform: scale(1.1);
  }

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background-color: #fff;
    z-index: -1;
    filter: blur(20px);
  }

  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    z-index: -1;
    background: linear-gradient(45deg, #f0f, #0ff, #f0f, #ff0);
    background-size: 400%;
    filter: blur(20px);
    animation: gradient 15s ease-in-out infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
