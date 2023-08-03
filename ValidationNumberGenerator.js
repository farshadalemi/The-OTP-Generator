
function OTP(limit){
    let digits = '0123456789';
    let OTP = '';
    for(let i = 0; i < limit; i++){
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

console.log(OTP(4))
console.log(OTP(5))
console.log(OTP(6))
console.log(OTP(7))
console.log(OTP(8))
console.log(OTP(9))
