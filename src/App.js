import React from 'react';
import styled from "styled-components"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./components/style.css"
import TodoComplete from "./components/Todo/TodoComplete"
import TaskComplete from "./components/Task/TaskComplete"
import GoalComplete from "./components/Goal/GoalComplete"



const Container = styled.div`
width: 70vw;
height: auto;
background-color:#2E2727;
margin:auto;
top:0;

padding-bottom: 3%;
min-height:75vh;


@media screen and (max-width:600px){
width: 90vw;
position: absolute;
left:5%;

}
`



function App() {

  return (
    
<Router>
<Container>
<Nav />
<Route path="/Productivity-App" exact  component={TodoComplete} />
<Route path="/Productivity-App/custom" exact component={TaskComplete} />
<Route path="/Productivity-App/long" exact component={GoalComplete} />
</Container>
</Router>

  );
}

export default App;
