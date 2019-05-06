import React, { Component } from 'react'
import '../css/app.scss'
import axios from "axios";
import Maps from './map'

export class App extends Component {
         constructor(props) {
           super();
           this.state = {
             loading: true,
             loadingTime: 2000,
             returnData: []
           };
         }

         componentDidMount() {
           axios
             .get(
               `https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json`
             )
             .then(response => {
               this.setState({ returnData: response.data });

              let MyLoading = this;

              setTimeout(function() {
                MyLoading.setState({
                  loading: false
                });
              }, 1000);
             })
             .catch(function(error) {
               // handle error
               console.log(error);
             })
             .then(function() {
               // always executed
             });
         }

         render() {
           const { loading } = this.state;

           if (loading) {
             // if your component doesn't have to wait for an async action, remove this block
             return (
               <div className="loadingGif">
                 <div className="loadingimage" />
               </div>
             ); // render null when app is not ready
           }

           return (
             <div>
               <Maps locations={this.state.returnData} />
             </div>
           );
         }
       }

export default App;
