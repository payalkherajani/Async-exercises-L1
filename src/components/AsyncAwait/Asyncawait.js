import React from 'react'

const Asyncawait = () => {
    const myfakefetch = (shouldreject, msg) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (shouldreject) {
                    reject(` ${msg} Your Promise is rejected`)
                }
                resolve(`${msg} Your promise is resolved`)
            }, 3000)
        })

    }

    const learntouseasyncawait = async () => {
        try {
            const response = await myfakefetch(false, "Hello, User");
            console.log(response);
        } catch (e) {
            console.error(e.message)
        }

    }

    const syncCallsToServer = async (msg1, msg2) => {
        try {
            const response1 = await myfakefetch(false, msg1);
            console.log(response1, "1")
            const response2 = await myfakefetch(false, response1 + msg2);
            console.log(response2, "2")
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div>
            <button onClick={() => learntouseasyncawait()}>Async Await</button>
            <button onClick={() => syncCallsToServer("Payal", "Thankyou!!!")}>Waterfall</button>
        </div>
    )
}

export default Asyncawait;