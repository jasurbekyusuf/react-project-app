import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Header({check , setChecked , inpvalue , setInpValue , openModal , modalVisible , handleSubmit}) {

    function handleCheck(e){
        setChecked(e.target.checked)
    }
    function handleChange(e){
        setInpValue(e.target.value)
    }

    return (
        <div>
            <div className="row my-4">
                <div className="col-md-4"><input type="text" value={inpvalue} onChange={handleChange} placeholder={"Search"} className={"form-control rounded-pill "}/></div>
                <div className="col-md-4">
                    <label>
                        <span className={'font-22'} >Active</span>
                        <input onChange={handleCheck} checked={check} className={'mx-3 checkBOX'} type="checkbox"/>
                    </label>
                </div>
                <div className="col-md-4 text-right">
                    <button className={"btn btn-dark"} onClick={openModal} >openModal</button>
                </div>
            </div>

            <Modal isOpen={modalVisible} toggle={openModal} >
                <ModalHeader>Add user</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit} id={"myForm"}  >
                        firstName
                        <input required={true} type="text" className={"form-control"} />
                        lastName
                        <input required={true} type="text" className={"form-control"} />
                        userName
                        <input required={true} type="text" className={"form-control"} />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form={"myForm"} className={"btn btn-success"}>save</button>
                    <button onClick={openModal} className={"btn btn-danger"}>cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Header;
