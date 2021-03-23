import React from 'react';
import GridLayout from 'react-grid-layout';
import SampleComponent from './SampleComponent';
import Page01 from './Page01';
import styles from '../src/Styles/Style.css';


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      cols: 12,
      rowHeight: 30,
      width: window.parent.screen.width
    }

    this.layouts = [
      { i: 'a', x: 0, y: 0, w: 2, h: 4 },
      { i: 'b', x: 2, y: 0, w: 4, h: 4 },
      { i: 'c', x: 6, y: 0, w: 2, h: 8 },
      { i: 'd', x: 0, y: 4, w: 5, h: 5 },
      { i: 'e', x: 0, y: 9, w: 5, h: 2 },
      { i: 'f', x: 6, y: 11, w: 2, h: 2 },
    ];
  }



  render() {
    return (
      <>
        <GridLayout
          className="layout"
          layout={this.layouts}
          cols={this.state.cols}
          rowHeight={this.state.rowHeight}
          width={this.state.width}
        >

          <div key="a" style={{ border: "solid", backgroundColor: "#ffffff", textAlign: "center", overflow: "hidden" }}><Page01 componentName="A" /></div>
          <div key="b" style={{ border: "solid", backgroundColor: "#EEEEEE", textAlign: "center", overflow: "hidden" }}><SampleComponent componentName="B" /></div>
          <div key="c" style={{ border: "solid", backgroundColor: "#EEEEEE", textAlign: "center", overflow: "hidden" }}><SampleComponent componentName="C" /></div>
          <div key="d" style={{ border: "solid", backgroundColor: "#EEEEEE", textAlign: "center", overflow: "hidden" }}><SampleComponent componentName="D" /></div>
          <div key="e" style={{ border: "solid", backgroundColor: "#EEEEEE", textAlign: "center", overflow: "hidden" }}><SampleComponent componentName="E" /></div>
          <div key="f" style={{ border: "solid", backgroundColor: "#EEEEEE", textAlign: "center", overflow: "hidden" }}><SampleComponent componentName="F" /></div>
        </GridLayout>
      </>
    );
  }
}

export default App;
