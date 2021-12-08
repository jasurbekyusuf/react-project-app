import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./main.css"

function App(props) {

    const [user,setUser] = useState([])
    const [check , setChecked] = useState(false)
    const [inpValue , setInpValue] = useState("")
    const [modalvisible , setModalvisible] = useState(false)
    const [modalvisible2 , setModalvisible2] = useState(false)
    const [editUser , setEditUser] = useState({})
    const [page , setPage] = useState(1)

    function openModal(){
        setModalvisible(prev=>!prev)
    }

    function handlesubmit(e){
        e.preventDefault()
        const firstName = e.target[0].value
        const lastName = e.target[1].value
        const userName = e.target[2].value
        const a = [...user]
        a.push( {id : user.length+1 , firstName:firstName , lastName: lastName , userName: userName , count: 0 , isActive: false})
        setUser(a)
        openModal()
        localStorage.setItem("user" ,JSON.stringify(a))
    }

    function toggle(id){
        setModalvisible2(prev => !prev)
        let arr = user.filter(item => item.id === id)
        setEditUser(arr[0])
    }


    useEffect(()=>{
        let a = localStorage.getItem("user")
        if (a){
            let b = JSON.parse(a)
            setUser(b)
        }
    },[])

    return (
        <div className={"container"} >
            <div className="row my-5">
                <div className="col-md-12">
                    <Header handleSubmit={handlesubmit} openModal={openModal} modalVisible={modalvisible} check={check} inpvalue={inpValue} setInpValue={setInpValue} setChecked={setChecked} />
                    <Body page={page} setPage={setPage} editUser={editUser} setEditUser={setEditUser} toggle={toggle} modalVisible2={modalvisible2} setModalVisible={setModalvisible2} check={check} inpvalue={inpValue} user={user} setUser={setUser} />
                    <Footer page={page} user={user} setPage={setPage} />
                </div>
            </div>
        </div>
    );
}

export default App;
