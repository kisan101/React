import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component {
    render() {
        return(
            <h1>Hello</h1>
        )
    }
}
//function componen
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    )
}


ReactDOM.render(
    <Test />,
    document.getElementById('test')
);