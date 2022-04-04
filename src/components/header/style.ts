import styled from "styled-components";

export interface MobileProps {
  open: boolean
}

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 5px;
  background: #00A09A;

  span{
    color: #fff;
    font-size: 22px;
  }

  @media (min-width: 768px){
    justify-content: space-around;
  }
`

export const Ul = styled.ul<MobileProps>`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  list-style: none;

  li{
    padding: 18px 10px;
    color: #fff;
    text-align: center;

    a{
      color: #fff;
      font-size: 24px;

      @media (min-width: 768px){
        font-size: 18px;
      }
    }
  }

  @media(max-width: 768px){
    flex-flow: column nowrap;
    background: #00A09A;
    transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
    position: fixed;
    top:0;
    right:0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
  }

`

export const MobileStyle = styled.div<MobileProps>`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 3;

  @media (max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open})=> open ? "#ccc": "#333"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    

    &:nth-child(1){
      transform: ${({open}) => open ? "rotate(45deg)": "rotate(0)"};
    }
    &:nth-child(2){
      transform: ${({open}) => open ? "translateX(100%)": "translateX(0)"};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3){
      transform: ${({open}) => open ? "rotate(-45deg)": "rotate(0)"};
    }
  }
`