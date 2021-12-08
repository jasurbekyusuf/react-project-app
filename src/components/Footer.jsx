import React from 'react';

function Footer({page , setPage ,user }) {

    function increment(){
        if (user.length){
            setPage(page+1)
        }
    }

    function decrement(){
        if (page > 1){
            setPage(page-1)
        }
    }

    return (
        <div>
            <button onClick={decrement} >prev</button>
            <span className={"font-22 mx-4"}>{page}</span>
            <button onClick={increment} >next</button>
        </div>
    );
}

export default Footer;
