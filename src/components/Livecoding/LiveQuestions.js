import React, { useState } from 'react'

const LiveQuestions = () => {
    const [list, setList] = useState([{ name: 'John Doe', age: '34' }, { name: 'Sara Smith', age: '21' }, { name: 'Lee', age: '15' }])

    const mynamelength = (l) => {
        alert(`OMG! my name is ${l} char long`);
    }
    const strlength = (name, mynamelength) => {
        const l = name.length;
        mynamelength(l);
    }
    const successcallback = (message) => {
        console.log(message);
    }
    const failurecallback = (message) => {
        console.log(message)
    }
    const willthanoskillme = (name, successcallback, failurecallback) => {
        const numberofcharacters = name.length;
        if (numberofcharacters % 2 === 0) {
            const successmessage = 'Yay! I am alive!'
            successcallback(successmessage);
        }
        else {
            const failuremessage = 'Give my bose speakers and headphones to my sister'
            failurecallback(failuremessage);
        }
    }
    const learnsetTimeout = (message) => {
        setTimeout(() => console.log(message), 5000);
    }
    const learnsetInterval = (message) => {
        const id = setInterval(() => alert(message), 1000);
        console.log("ID for clearing interval is ", id);
        clearInterval(id);
    }
    const printbangbang = (num) => {
        const id = setInterval(() => {
            for (var i = 1; i <= num; i++) {
                alert(num - i);
                if (num - i === 0) {
                    alert("Bang bang");
                    clearInterval(id);
                }
            }
        }, 5000)
    }
    const printinnertext = (e) => {
        console.log(e.target.innerText);
    }
    const mylistitem = (obj) => {
        alert(`You clicked ${obj.name} and ${obj.age}`)
    }

    return (
        <div>
            <button onClick={() => strlength("Payal", mynamelength)}>CallbackEX1</button>
            <button onClick={() => willthanoskillme("Payal", successcallback, failurecallback)}>Two callbacks</button>
            <button onClick={() => learnsetTimeout("I belong to team scope in Neog Camp!!!")}>setTimeout</button>
            <button onClick={() => learnsetInterval("I belong to team scope in Neog Camp!!!")}>setInterval</button>
            <button onClick={() => printbangbang(4)}>Bang bang!</button>
            <button onClick={(e) => printinnertext(e)}>Inner Text</button>
            {
                list && list.map((obj, index) => (
                    <div key={index}>
                        <li onClick={() => mylistitem(obj)}>{` My name is ${obj.name}  and I am ${obj.age} old`}</li>

                    </div>

                ))
            }
        </div>
    )
}

export default LiveQuestions;