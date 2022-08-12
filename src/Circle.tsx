import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps){
    const [value, setValue] = useState<number|string>(0);
    setValue(0)
    setValue("hello")
    return <Container bgColor={bgColor} borderColor={borderColor ?? "red"} />;
}

export default Circle;

interface PlayerShape {
    name: string;
    age: string;
}

const sayHello = (playerObj: PlayerShape) => 
    `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name:"nico", age:"12"});
