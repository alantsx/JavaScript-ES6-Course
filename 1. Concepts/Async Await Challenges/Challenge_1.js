const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


async function umPorSegundo() {
    const response1 = await delay();
    console.log('1s');
    const response2 = await delay();
    console.log('2s');
    const response3 = await delay();
    console.log('3s');
}

umPorSegundo();
