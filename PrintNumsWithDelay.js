for (i = 0; i <= 10; i++) {
    print(i);
}
function print(i) {
    setTimeout(function () {
        console.log(i)
    }, i * 2000
    );
}


