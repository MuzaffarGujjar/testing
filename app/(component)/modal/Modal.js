"use client"
import { useState } from "react"

export default function Modal() {
const [btn,setBtn] = useState(false)
  return (
    <>
     <div className='addModalBody'>
            <button
                // onClick={() => setShowModal(false)}
                className='close'
            >
                ✖
            </button>
            <h1>Add Todo</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter your First Name'
                    className='inputField'
                    // value={fName}
                    onChange={(e) => setFName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Enter your Last Name'
                    className='inputField'
                    // value={lName}
                    onChange={(e) => setLName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Enter your discription'
                    className='inputField'
                    // value={disc}
                    onChange={(e) => setDisc(e.target.value)}
                />
            </div>
            {
                btn ? <button className='bg-success addBtn'
                    // onClick={updateTodoHandler}
                >
                    Update Todo
                </button> :
                    <button className='bg-success addBtn'
                        // onClick={addTodoHandler}
                    >
                        Add Todo
                    </button>
            }

        </div></>
  )
}
