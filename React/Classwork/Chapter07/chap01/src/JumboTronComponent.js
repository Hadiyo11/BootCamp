import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
class JumboTronComponent extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>
          {this.props.children}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    );
  }
}
export default JumboTronComponent;
//U won't be able to use Jumbotron as it is no longer available in the latest Bootstrap 5
//import {Jumbotron} from  "reactstrap";  in Home.js won't work if u have the latest Bootstrap as it was removed.
//Add the below CSS in App.css file  and insted of using <Jumbotron></Jumbotron> use <div class="jumbotron">
