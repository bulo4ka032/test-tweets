import styled from '@emotion/styled';

export const UserItem = styled.li`
  position: relative;
  display: flex;
  padding: 28px 36px 36px;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 20px;
`;

export const MainImg = styled.img`
margin-bottom: -4px;
`


export const Avatar = styled.img`
border-radius: 85.9232px;
`;

export const Root = styled.div`
top: 28px;
left: -36px;
    position: relative;
    width: 123.5%;
    height: 8px;
    background-color: rgb(235, 216, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px, rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`
export const Border = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: rgb(235, 216, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px, rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
    border-radius: 50%;
`

export const Container = styled.div``;

export const Name = styled.p``;

export const DescrT = styled.p`
margin-top: 62px;

font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
text-align: center;
color: #EBD8FF;
`;

export const DescrF = styled.p`

font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
text-align: center;

color: #EBD8FF;`;


export const Button = styled.button`
  width: 196px;
  padding: 14px 28px;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
font-size: 18px;
line-height: 22px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
color: #373737;
margin-left: auto;
margin-right: auto;
transition: background 250ms ease; 
cursor: pointer;

&:hover, &:focus {
    background: #5CD3A8;
}

&[data-follow='true'] {
        background: #5CD3A8;
}
`;
