// node.js only

export const flushPromises = () => {
    new Promise((res, rej) => {
        setImmediate(res, 1000)
    })
}