import React, { Component } from 'react'
import '../css/app.scss'

export class App extends Component {

  constructor (props) {
    super();
    this.state = {
      loading: true,
      loadingTime: 2000,
    };
  }

 componentDidMount (){
   //call one
   //call two
 }

render() {
    return (
      <div>
        <h1>Loading Screen</h1>
      </div>
    )
  }
}

export default App;
