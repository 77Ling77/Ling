function isPlindrome(array) {
    
    const len = array.length;
    
    if (len % 2 == 0) return false;
    for(let i = 0; i < array.length; i++){
        if (arr [i] == arr[len - i -1]) return false;
    }
    return true;
}
console.log(isPlindrome([1,2,3,4,5,6,7,8]));
