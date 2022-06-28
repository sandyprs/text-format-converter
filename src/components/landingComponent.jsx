import { wait } from "@testing-library/user-event/dist/utils";
import React,{Component} from "react";


class LandingComponent extends Component{


    constructor(props){
        super(props)

        this.state = {
            textToConvert:"",
            convertedText:""
        }

        this.toUpperCase = this.toUpperCase.bind(this)
        this.toLowerCase = this.toLowerCase.bind(this)
        this.capitalize = this.capitalize.bind(this)
        this.handleInputBox = this.handleInputBox.bind(this)
    }

    toUpperCase(){
        this.setState(
            {convertedText : this.state.textToConvert.toUpperCase()}
        )

    }

    toLowerCase(){
        this.setState(
            {convertedText : this.state.textToConvert.toLowerCase()}
        )

    }

    capitalize(){

        let capital = this.state.textToConvert

        capital = this.state.textToConvert.charAt(0).toUpperCase() + this.state.textToConvert.substring(1).toLowerCase()
        this.setState(
            {convertedText :capital }
        )

    }

    handleInputBox(event){
        this.setState(
            {
                [event.target.name]: event.target.value 
            }
        )

    }

    render(){
        return(
            <div className="container">
                <h1 style={{color:"blueviolet", fontFamily:"cursive"}}>Text Format Converter App</h1>
                <div> <textarea placeholder="type here" style={{width:"60%"}} className="" type="text" onChange={this.handleInputBox} name="textToConvert" value={this.state.textToConvert}/></div>
                <div> 
                    <button style={{margin:"4px", padding:"4px"}} className="btn btn-success" onClick={this.toUpperCase}>Upper Case</button>
                    <button style={{margin:"4px", padding:"4px"}}  className="btn btn-success" onClick={this.toLowerCase}>Lower Case</button>
                    <button style={{margin:"4px", padding:"4px"}}  className="btn btn-success" onClick={this.capitalize}>Capitalize word</button>
                 </div>
                <p style={{margin:"4px", padding:"4px", color:"green"}}>{this.state.convertedText}</p>
                

            </div>
        )
    }

}

export default LandingComponent