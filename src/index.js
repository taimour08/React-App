import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const myFirstElement = <h1>Hey you!</h1>


const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');

let x = 5
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

class Jeep extends React.Component {
  render() {
    return <h2>Hi, I am a Cr!</h2>;
  }
}

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Jeep />);
