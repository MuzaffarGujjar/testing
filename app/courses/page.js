import Link from 'next/link'
import React from 'react'

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
                        {/* <i className="fa-solid fa-users"></i>          */}
                        <p
                            style={{ paddingLeft: '5px', fontSize: '20px', color: 'white'}}
                        >Attendence</p>
                    </div>
                </div>
            </div>




            {/* <div className='container'>
                <div className="row">
                    <div className="col-md-8">
                        <h1>Dummy text</h1>
                    </div>
                </div>
            </div> */}


        </>
    )
}
