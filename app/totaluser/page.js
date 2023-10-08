import React from 'react'
import Link from "next/link";

export default function page() {
    return (
        <>

            <div className="root_div">
                <div
                    style={{
                        width: "20%",
                        height: "100vh",
                        color: "white",
                        backgroundColor: "black"
                    }}
                >
                    <Link href='/'>
                        <h1
                            style={{ padding: '10px', color: 'white'}}
                        >Muzaffar</h1>
                    </Link>
                    <div className="Icon_div">
                        {/* <i className="fa-solid fa-handshake"></i> */}
                        <p
                            style={{ paddingLeft: '5px', fontSize: '20px', color: 'white'}}
                        >Courses</p>

                    </div>
                    <div className="Icon_div">
                        {/* <i className="fa-solid fa-user"></i> */}
                        <p
                            style={{ paddingLeft: '5px', fontSize: '20px', color: 'white'}}
                        >User</p>

                    </div>
                    <div className="Icon_div">
                        {/* <i className="fa-solid fa-users"></i>  */}
                        <p
                            style={{ paddingLeft: '5px', fontSize: '20px', color: 'white'}}
                        >Attendence</p>
                    </div>
                </div>




                <div className='container'>
                    <table>
                        <tr>
                            <td>id</td>
                            <td>Student Name</td>
                            <td>Student email</td>
                            <td>Student course</td>
                            <td>Student delete</td>
                            <td>Student update</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>
    )
}
