const captcha = (input) => {
    let sum = 0;
    const iArr = ('' + input).split('')
    for (var i=1; i<iArr.length; i++) {
        if (iArr[i] === iArr[i-1]) sum += +iArr[i]
    }
    if (iArr[iArr.length-1] === iArr[0]) sum += +iArr[0]
    return sum;
}

module.exports = {
    run: captcha
}
