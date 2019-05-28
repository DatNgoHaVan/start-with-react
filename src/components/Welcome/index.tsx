import React from 'react';

interface IProps {
    name?: string;
}

const Welcome = (props: IProps) => (
    <h1>Welcome, {props.name} </h1>
);

export default Welcome;
