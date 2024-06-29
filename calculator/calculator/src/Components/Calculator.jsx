// import React from 'react'
import { useState } from 'react'
import './Calculator.css'
import { IoBackspaceOutline } from "react-icons/io5";

const Calculator = () => {
    const [data, setData] = useState("")
    const clickValue = (e) => {
        e.preventDefault()
        const val = e.target.value
        setData(data.concat(val))
        console.log(val)
    }
    const onEvalution = () => {
        setData(eval(data).toString())
        // console.log(res)
    }
    const allClear = () => {
        setData("")
    }
    const clearOnce = () => {
        setData(data.slice(0, -1))
    }
    const handleChange = (e) => {
        setData(e.target.value)
    }


    return (
        <div className='calculator'>
            <div className="container">
                <div className="input">
                    <input type="text" onChange={handleChange} value={data} placeholder='0' />
                </div>
                <div className="buttons">
                    <button onClick={clickValue} value="%">%</button>
                    <button onClick={allClear} value="AC">AC</button>
                    <button onClick={clearOnce} value="Back">{<IoBackspaceOutline size={17} />}</button>
                    <button onClick={clickValue} value="/">/</button><br />
                    <button onClick={clickValue} value="7">7</button>
                    <button onClick={clickValue} value="8">8</button>
                    <button onClick={clickValue} value="9">9</button>
                    <button onClick={clickValue} value="*">*</button><br />
                    <button onClick={clickValue} value="4">4</button>
                    <button onClick={clickValue} value="5">5</button>
                    <button onClick={clickValue} value="6">6</button>
                    <button onClick={clickValue} value="-">-</button><br />
                    <button onClick={clickValue} value="1">1</button>
                    <button onClick={clickValue} value="2">2</button>
                    <button onClick={clickValue} value="3">3</button>
                    <button onClick={clickValue} value="+">+</button><br />
                    <button onClick={clickValue} value="0">0</button>
                    <button onClick={clickValue} value=".">.</button>
                    <button onClick={onEvalution} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator