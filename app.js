import readline from 'readline';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Tap a sequece: ", (resp) => {
    const validation = isValid(resp);
    console.log("Your sequence is", validation ? "valid!" : "invalid!")
    reader.close();
});

const isValid = (resp) => {
    let list = [];
    let simbols = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < resp.length; i++) {
        if (resp[i] === '(' || resp[i] === '{' || resp[i] === '[') {
            list.push(resp[i]);
        } else {
            let last = list.pop();
            if (resp[i] !== simbols[last]) { return false };
        }
    }
    if (list.length !== 0) { return false };
    return true;
}

