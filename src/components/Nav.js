
import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import "./style.css"

const NavLink = styled(Link)`
font-size: 2rem;
color:white;
text-decoration:none;
width: auto;
padding:1em;
height: auto;
width: 33%;
display: flex;
justify-content: center;
cursor: pointer;
text-align:center;

@media screen and (max-width:830px){
font-size: 1em;
min-height: 60px;
align-items: center;


}
` 

const NavContainer = styled.div`
display: flex;
justify-content:space-around;
border-bottom: 8px white solid;
align-items: center;
width: 100%;


`
export default function Nav() {
    return (
        <div>
            <NavContainer>
            <NavLink to="/Productivity-App"> Daily</NavLink>
            <NavLink to="/Productivity-App/custom" className="side-border"> Custom</NavLink>
            <NavLink to="/Productivity-App/long"> Long Term</NavLink>
            </NavContainer>
        </div>
    )
}
