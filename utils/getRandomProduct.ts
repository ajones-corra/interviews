const sleep = (delayMs: number) => new Promise((resolve) => setTimeout(resolve, delayMs))

export const getRandomProductFromDb = async () => {
    await sleep(1000)
    const productId = Math.floor(Math.random() * 100)
    return {
        name: `Product ${productId}`,
        price: Math.floor(Math.random() * 1000)/100,
        id: productId
    }
}
