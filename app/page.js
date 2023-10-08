"use client"
import { db } from "@/config/Firebase"
import { getDocs, collection } from "firebase/firestore"
import Modal from "./(component)/modal/Modal"
import { FaUsersLine } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  const fetchDocs = async () => {
    try {
      // const collectionName = collection(db, 'users'); 
      // const docs = await getDocs(collectionName);
      // console.log("fettching data from firebase", docs)
      // const studentsData = []
      // docs.forEach((doc)=>{
      //   studentsData.push({
      //     id:doc.id,
      //     ...doc.data()
      //   })
      // })
      // console.log("data is ",studentsData)
      // docs.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
      // });
  

      const response = await getDocs(collection(db, "users"));
    const fetchedData = response?.docs?.map((doc) => ({
      _id: doc?.id,
      ...doc?.data()
    }));
    console.log('data is ',fetchedData)
    } catch (err) {
      console.error('Error in fetching', err);
    }
}
return (
  <div className="root_div">
    {/* <button onClick={fetchDocs}>Click</button> */}
    {/* <Modal /> */}

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
          style={{ padding: '10px', color: "white" }}
        >Muzaffar</h1>
      </Link>
      <div className="Icon_div">
        <Link href='/courses'>
          {/* <i className="fa-solid fa-handshake"></i> */}
          <p
            style={{ paddingLeft: '5px', fontSize: '20px', color: "white"}}
          >Courses</p>

        </Link>
      </div>
      <div className="Icon_div">
        <Link href='/totaluser'>
          {/* <i className="fa-solid fa-user"></i> */}
          <p
            style={{ paddingLeft: '5px', fontSize: '20px', color: "white" }}
          >User</p>

        </Link>
      </div>
      <div className="Icon_div">
        <Link href='/presentuser'>
          {/* <i className="fa-solid fa-users"></i>          */}
          <p
            style={{ paddingLeft: '5px', fontSize: '20px', color: "white"}}
          >Attendence</p>
        </Link>
      </div>
    </div>

    <div className="display_div">
      <div className="cards_div">
        <div className="cards">
          <Link href='/presentuser'>
            {/* <i className="fa-light fa-screen-users"></i> */}
            <h2>200</h2>
            <h5>Present Student</h5>
          </Link>
        </div>
        <div className="cards">
          <Link href='/courses'>
            {/* <i className="fa-light fa-screen-users"></i> */}
            <h2>7</h2>
            <h5>Amount of Coruces</h5>
          </Link>
        </div>
        <div className="cards">
          <Link href='/totaluser'>
            {/* <i className="fa-light fa-screen-users"></i> */}
            <h2>500</h2>
            <h5>Total Student</h5>
          </Link>
        </div>

      </div>
    </div>

  </div>
)
}
