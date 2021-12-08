import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Body({user, setUser, check, inpvalue, modalVisible2, toggle, checkbox , editUser , setEditUser ,page ,setPage}) {


    function deleteBtn(id) {
        const a = user.filter(item => item.id !== id)
        setUser(a)
    }

    function drawCheck(e) {
        const a = [...user]
        a.forEach(item => {
            if (item.userName === e.target.value) {
                item.isActive = e.target.checked
            }
        })
        setUser(a)
    }

    function calculate(id, boolean) {
        boolean ? user.map(item => item.id === id ? item.count += 1 : null) :
            user.map(item => item.id === id ? item.count -= 1 : null)
        setUser([...user])
    }

    function saveUser() {
        toggle()
         let a =  user.map(item=>item.id === editUser.id ? editUser : item)
        setUser(a)
    }
   const handleValue =name =>(e)=>{
      setEditUser(prev=>(
          {...prev , [name] : e.target.value}
      ))
   }

    return (
        <div>
            <Modal isOpen={modalVisible2} toggle={toggle} >
                <ModalHeader>Edit user</ModalHeader>
                <ModalBody>
                    <input
                        type="text"
                        defaultValue={editUser?.firstName}
                        placeholder={"firstName"}
                        className={"form-control"}
                        onChange={handleValue("firstName")}
                    />
                    <input
                        type="text"
                        defaultValue={editUser?.lastName}
                        placeholder={"lastName"}
                        className={"form-control"}
                        onChange={handleValue("lastName")}
                    />
                    <input
                        type="text"
                        defaultValue={editUser?.userName}
                        placeholder={"userName"}
                        className={"form-control"}
                        onChange={handleValue("userName")}
                    />
                </ModalBody>
                <ModalFooter>
                    <button className={"btn btn-success"} onClick={saveUser}>save</button>
                </ModalFooter>
            </Modal>

            <table className={"table table-hover table-dark table-striped table-bordered"}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Count</th>
                    <th>Active</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.filter((item,index)=>index >=0 && index <3).filter(item => {
                        if (inpvalue === "") {
                            return item
                        } else if (item.firstName.toLowerCase().includes(inpvalue.toLowerCase())
                            || item.lastName.toLowerCase().includes(inpvalue.toLowerCase()) ||
                            item.userName.toLowerCase().includes(inpvalue.toLowerCase())
                        ) {
                            return item
                        }
                    }).filter(item => item.isActive === check).filter((item,index)=>index >= (page-1)*3 && page*3).map((item, index) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.userName}</td>
                            <td>
                                <button onClick={() => calculate(item.id, true)}>+</button>
                                {item.count}
                                <button onClick={() => calculate(item.id, false)}>-</button>
                            </td>
                            <td><input value={item.userName} onChange={drawCheck} checked={item.isActive}
                                       className={"checkBOX"} type="checkbox"/></td>
                            <td>
                                <button onClick={()=>toggle(item.id)}>edit</button>
                                <button onClick={() => deleteBtn(item.id)}>del</button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>

        </div>
    );
}

export default Body;