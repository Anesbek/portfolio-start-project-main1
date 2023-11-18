import React from 'react';
import styled from "styled-components";
import photo from '../../../assects/images/img/photo_1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
           <FlexWrapper align={"center"} justify={"space-around"}>
               <div>
                   <Hi>Hi there</Hi>
                   <SecondTitle>I am Frontend DEV Kazah</SecondTitle>
                   <MainTitle>Frontend Developer</MainTitle>
               </div>
               <SryledPhoto src={photo} alt=""/>

           </FlexWrapper>
        </StyledMain>
);
};

const StyledMain = styled.div`
min-height: 100vh;
background-color: darkcyan;
`

const SryledPhoto = styled.img`
width: 350px;
height: 450px;
object-fit: cover;

`

const MainTitle = styled.h1`
color: crimson;
  
`
const SecondTitle = styled.h2`
color: darkorange;
`
const Hi = styled.span`
  color: darkred;
  font-family: cursive;
  font-size: 30px;
  

`