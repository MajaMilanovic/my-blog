const DATA = [];
let counter = 0;

const keepStateInData = (state) => {
    state.id = counter;
    counter++;
    DATA.push(state);
    console.log(DATA);

}

const getPostFromData = () => {
    let item=DATA[DATA.length - 1];
    return item
    // or you could do it : DATA.slice(-1)[0]
    console.log(item);
    
}

export {
    keepStateInData,
    getPostFromData
}