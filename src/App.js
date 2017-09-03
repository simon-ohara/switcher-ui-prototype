import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import './App.css';

const hexagons = [
  { q:-1,r:0,s:0, source: 'foo' },
  { q:-1,r:1,s:0 },

  { q:0,r:-1,s:0 },
  { q:0,r:0,s:0 },
  { q:0,r:1,s:0 },

  { q:1,r:-1,s:0 },
  { q:1,r:0,s:0, source: 'bar' },

  { q:2,r:-1,s:0 },
  { q:2,r:0,s:0 }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const ev = Object.assign({}, e);
    this.setState(prevState => ({
      destinations: !prevState.destinations
    }));
    window.ev = ev;
    console.log(ev.target);
  }

  render() {
    const { destinations } = this.state;

    return (
      <div className="App">
        <h1>Basic example of HexGrid usage.</h1>
        <HexGrid width={1200} height={825}>
          <Layout className={destinations ? "show-destinations" : "hide-destinations"} size={{ x:10, y:10 }} origin={{ x: -7, y: 0 }} spacing={1.2}>
            {
              hexagons.map((hex, i) => {
                const
                  classes = [ "destination" ],
                  text = `${hex.q}, ${hex.r}, ${hex.s}`;
                hex.source && classes.push("has-source");
                return (
                  <Hexagon className={classes.join(' ')} key={i} q={hex.q} r={hex.r} s={hex.s} onClick={this.handleClick}>
                    <Text>{text}</Text>
                  </Hexagon>
                );
              })
            }
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
