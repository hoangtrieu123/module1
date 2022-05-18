function test(){
    let n = document.getElementById("number").value
    let flag = true
    if (n < 2)
        flag = false
    for (let i = 2; i < n; i++) {
        if (n % i == 0){
            flag = false
            break
        }
    }
    if (flag == true)
        document.write(n + " là số nguyên tố")
    else
        document.write(n + " không là số nguyên tố")
}
