import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li><a href="">A Lorem ipsum.</a></li>
                <li><a href="">B Lorem ipsum.</a></li>
                <li><a href="">C Lorem ipsum.</a></li>
                <li><a href="">D lorem2</a></li>
                <li><a href="">F Lorem ipsum.</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul{
    gap: 30px;
    display: flex;
    color: darkgoldenrod;
  }

`