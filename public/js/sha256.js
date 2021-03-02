var sha = new Object();

sha.h0 = 0x6a09e667;
sha.h1 = 0xbb67ae85;
sha.h2 = 0x3c6ef372;
sha.h3 = 0xa54ff53a;
sha.h4 = 0x510e527f;
sha.h5 = 0x9b05688c;
sha.h6 = 0x1f83d9ab;
sha.h7 = 0x5be0cd19;

sha.k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]

sha.ch = function(x, y, z){
    return (x & y) ^ ( (~x) & z);
}

sha.ma = function(x, y, z){
    return (x & y) ^ (x & z) ^ (y & z);
}

function loopMove(x, k){
    return (x >>> k) | ((x & ((1 << k) - 1) ) << (32 - k));
}

sha.Sgm0 = function(x){
    return loopMove(x, 2) ^ loopMove(x, 13) ^ loopMove(x, 22);
}

sha.Sgm1 = function(x){
    return loopMove(x, 6) ^ loopMove(x, 11) ^ loopMove(x, 25);
}

sha.sgm0 = function(x){
    return loopMove(x, 7) ^ loopMove(x, 18) ^ (x >>> 3);
}

sha.sgm1 = function(x){
    return loopMove(x, 17) ^ loopMove(x, 19) ^ (x >>> 10);
}

function changeStr(str, index, changeStr){
    if(index == 0){
        return changeStr + str.substr(index + changeStr.length);
    } else if(index == str.length - 1){
        return str.substr(0, index) + changeStr;
    } else {
        return str.substr(0, index) + changeStr + str.substr(index + changeStr.length);
    }
}

function shaFill(text){
    var n = text.length * 8;
    if(text.length % 64 != 0) {
        text += String.fromCharCode(0x80);
    }
    while(text.length % 64 != 56){
        text += "\0";
    }
    for(var i = 0; i < 8; i++)
        text += "\0";
    var idx=1;
    while(n){
        text = changeStr(text, text.length - idx, String.fromCharCode(n % 256) );
        n >>>= 8;
        idx++;
    }
    return text;
}

function shaOutputNumber(x){
    var res = "";
    var num0 = (x >>> 24) & 0xFF;
    if(num0 < 16) res += "0";
    res += num0.toString(16);
    var num1 = (x >>> 16) & 0xFF;
    if(num1 < 16) res += "0";
    res += num1.toString(16);
    var num2 = (x >>> 8) & 0xFF;
    if(num2 < 16) res += "0";
    res += num2.toString(16);
    var num3 = x & 0xFF;
    if(num3 < 16) res += "0";
    res += num3.toString(16);
    return res;
}

function shaGen(userText){
    sha.h0 = 0x6a09e667;
    sha.h1 = 0xbb67ae85;
    sha.h2 = 0x3c6ef372;
    sha.h3 = 0xa54ff53a;
    sha.h4 = 0x510e527f;
    sha.h5 = 0x9b05688c;
    sha.h6 = 0x1f83d9ab;
    sha.h7 = 0x5be0cd19;
    userText = shaFill(userText);
    console.log(userText.length);
    var filledNum = new Array(userText.length / 4);
    for(var idx = 0; idx < userText.length; idx += 4){
        filledNum[idx/4] =
            userText.charCodeAt(idx+3) |
            userText.charCodeAt(idx+2) << 8 |
            userText.charCodeAt(idx+1) << 16 |
            userText.charCodeAt(idx) << 24;
    }

    var cnt = userText.length / 64;
    for(var curIdx = 0; curIdx < cnt; curIdx++){
        shaDeal(filledNum.slice(curIdx * 16, (curIdx + 1) * 16));
    }
    var result = "";
    result += shaOutputNumber(sha.h0);
    result += shaOutputNumber(sha.h1);
    result += shaOutputNumber(sha.h2);
    result += shaOutputNumber(sha.h3);
    result += shaOutputNumber(sha.h4);
    result += shaOutputNumber(sha.h5);
    result += shaOutputNumber(sha.h6);
    result += shaOutputNumber(sha.h7);
    return result;
}

function shaDeal(M){
    console.log(M);
    var i;
    var T1 = 0, T2 = 0;
    var W = new Array(64);
    var A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
    for(i = 0; i < 16; i++){
        W[i] = M[i];
    }
    for(i = 16; i < 64; i++){
        W[i] = (sha.sgm1(W[i-2]) + W[i-7] + sha.sgm0(W[i-15]) + W[i-16]) % 0x100000000;
    }
    A = sha.h0;
    B = sha.h1;
    C = sha.h2;
    D = sha.h3;
    E = sha.h4;
    F = sha.h5;
    G = sha.h6;
    H = sha.h7;
    for(i = 0; i < 64; i++){
        T1 = (H + sha.Sgm1(E) + sha.ch(E, F, G) + sha.k[i] + W[i]) % 0x100000000;
        T2 = (sha.Sgm0(A) + sha.ma(A, B, C)) % 0x100000000;
        H = G;
        G = F;
        F = E;
        E = (D + T1) % 0x100000000;
        D = C;
        C = B;
        B = A;
        A = (T1 + T2) % 0x100000000;
    }
    sha.h0 = (sha.h0+A) % 0x100000000;
    sha.h1 = (sha.h1+B) % 0x100000000;
    sha.h2 = (sha.h2+C) % 0x100000000;
    sha.h3 = (sha.h3+D) % 0x100000000;
    sha.h4 = (sha.h4+E) % 0x100000000;
    sha.h5 = (sha.h5+F) % 0x100000000;
    sha.h6 = (sha.h6+G) % 0x100000000;
    sha.h7 = (sha.h7+H) % 0x100000000;
}

function loginClick() {
    loginform.password.value=shaGen(loginform.password.value);
}

function registerClick() {
    registerform.password.value=shaGen(registerform.password.value);
}

function changeClick() {
    changeform.oldpwd.value=shaGen(changeform.oldpwd.value);
    changeform.password.value=shaGen(changeform.password.value);
}