import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

function Registry(){
    const[registryData, setRegistryData]= useState([])
    const[textInput, setTextInput]= useState("")
    const[error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if (error) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
        
    }
    useEffect(() => {
        if(textInput.length > 10) setError(true);
        else setError(false)
    }, [textInput]
    )

    const removeItem = (index) => {
        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistryData(newData)
    }

    const editItem = (index =>{
        if(error|| textInput.length === 0) return;

        let newData = [...registryData]
        newData[index] = textInput;

        setRegistryData(newData)
    })
    
    
    return(
        <div>
            <h1 className="registry">Registry</h1>
            <Link className="App-link" to="/">Click here to go to home</Link>

            <form className="registry form" onSubmit={addItem}>
                <label>
            <input type="text" className="registry-input-text" value={textInput} onChange= {(e) => setTextInput(e.target.value)}/>
                </label>
                <input type="submit" value="submit" className="registry-input"/>
            </form>
            {error ? <span style={{color: "red"}}>Error occured.</span>: null}
            {
                registryData.map((item,index) => {
                    return(
                        <li className="li" key={index}>{item} <button onClick={()=> removeItem(index)}>Remove</button><button onClick={()=> editItem(index)}>Update</button></li>
                    )
                }
                )
            }


        </div>
    )
}

export default Registry;