import React from 'react'

const PromiseComponent = () => {

    const functionreturingpromise = (shouldreject, message) => {
        // console.log(shouldreject, message);
        return new Promise((resolve, reject) =>

        //This is start of promise object
        {
            //Some asyncronous task should be here,
            setTimeout(() => {
                if (shouldreject) {
                    reject(`${message}, Your Promise is rejected`)
                }
                resolve(`${message} Your promise is resolved`)
            }, 3000)
        }
            //This is end of promise object

        )

    }
    const getServerResponseLength = (msg) => {
        return functionreturingpromise(false, msg).then((data) => console.log(`${data} and its length is ${data.length}`)).catch((err) => console.error(err))
    }
    const syncCallsToServer = (msg1, msg2) => {
        return functionreturingpromise(false, msg1).then((data) => functionreturingpromise(false, console.log(data + msg2)))
    }
    return (
        <div>
            <button onClick={() => functionreturingpromise(false, "Hello").then((res) => console.log(res)).catch((err) => console.error(err))}> Promise</button>
            <button onClick={() => getServerResponseLength("I AM DON!!!!")}>Promise chaining </button>
            <button onClick={() => syncCallsToServer("Payal", "Thankyou!")}>Waterfall</button>
        </div>
    )
}

export default PromiseComponent;

// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if (shouldReject) {
//     reject(`error from server: ${msg}`);
//     }
//     resolve(`from server: ${msg}`);
//     }, 3000);
//     });
//     }