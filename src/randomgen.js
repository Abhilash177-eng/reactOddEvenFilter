import React, { Component } from 'react'
import './App.css'
class randomgen extends Component {

    constructor() {
        super();
        this.state = {
            x: 0,
            y:0,
            odd: [],
            even: [],
        }
    }
    render() {
        let arr = [];
        let even = [];
        let odd = [];
        let oddIndex = 0;
        let evenIndex = 0;
        const bstyle = {
            width: "50%",
            height: "70%",
            position: 'absolute',
            backgroundColor: 'white',
            marginTop: "8%",
            marginLeft: "25%",
        };

        let randomGen = () => {
            for (let i = 0; i < document.getElementById('input').value; i++) {
                arr[i] = Math.floor(Math.random() * 101);
            }
            console.log(arr);
        }

        let filterOddNum = () => {
            
                console.log(arr);
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 !== 0) {
                        odd[oddIndex] = arr[i];
                        oddIndex += 1;
                    }
                }
                this.setState({
                    x: 1,
                    odd: odd
                });
                console.log(this.state.odd);
        }

        let filterEvenNum = () => {
            console.log(arr);
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        even[evenIndex] = arr[i];
                        evenIndex += 1;
                    }
                }
                this.setState({
                    y: 1,
                    even:even
                });
                console.log(even);
            
        }

        return (
            <div style={bstyle}>
                <h1 style={{ color: 'black', marginLeft: "-5%" }}> Number Filter</h1>
                <input id="input" type="number" className='inputclass' placeholder="Enter number"></input>
                <button onClick={randomGen} className="buttonclass"> Generate Numbers </button>
                <button onClick={filterOddNum} className="buttonclass" style={{ marginTop: "25%", marginLeft: "-40%", width: "20%" }}>odd</button>
                <button onClick={filterEvenNum} className="buttonclass" style={{ marginTop: "25%", marginLeft: "15%", width: "20%" }}>even</button>
                {this.state.x === 1 ?
                <div style={{ marginTop: "40%" }}>
                 <h1>{this.state.odd.join(", ")}</h1>
                 </div> : <h1></h1>}

                 {this.state.y === 1 ?
                <div style={{ marginTop: "43%" }}>
                 <h1>{this.state.even.join(", ")}</h1>
                 </div> : <h1></h1>}
                
                
            </div>
        )
    }
}

export default randomgen
