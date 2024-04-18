import React, {Component} from "react"
import DisplayNumber from "../components/AddNumber"

export default class DisplayNumberRoot extends Component{
    render(){
      return (
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumber></DisplayNumber>
        </div>
      )
    }
  }