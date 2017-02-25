function funA() {
    funB();
}

function funB() {
    funC();
}

function funC() {
    console.log(Error().stack);
}

funA();