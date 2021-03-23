import React from 'react';
import './App.css';
import styles from '../src/Styles/Style.css';

class SampleComponent extends React.Component {

  render() {
    console.log(this.props.id);
    return (
      <div> 
        <h3>Component {this.props.componentName}</h3>
        <button>+++++++++++++++++++++++++++++</button>
      </div>
    );
  }

}

export default SampleComponent;