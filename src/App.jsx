import CustomInput, {CustomInput as UnMemoizedInput} from "./CustomInput.jsx";
import {useCallback, useState} from "react";
function App() {
  const [value,setValue] = useState('')
  const [value1,setValue1] = useState('')
  const [value2,setValue2] = useState('')
  const onWrite = useCallback((event)=>{
    setValue(event.target.value)
  },[])
  const onWrite1 = useCallback((event)=>{
    setValue1(event.target.value)
  },[])
  return (
      <>
      <div className="App">
        <h6>
          <CustomInput value={value} placeholder={"password"} onChange={onWrite}  />
          </h6>
          <h6>
            <CustomInput value={value1} placeholder={"email"} onChange={onWrite1}  />
          </h6>
        <h6>
          <UnMemoizedInput value={value2} placeholder={"full name"} onChange={e=>setValue2(e.target.value)}  />
        </h6>
      </div>
      </>
  )
}

export default App
