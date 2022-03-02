/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {
    
    let answer = 0
    const customerInfo = lines[0].split(' ')
    const n = Number(customerInfo[0])
    const m = Number(customerInfo[1])
    // console.log(m);
    const chair = new Array(n)
    // console.log(chair.length);
    for(let i = 0;i < chair.length;i++){
        chair[i] = 1
    }
    // console.log(chair[3])

    for(let i = 0;i < m;i++){
        const groupInfo = lines[i+1].split(' ')
        let a = Number(groupInfo[0])
        let b = Number(groupInfo[1])
        for(let num = 1;num <= a;num++){
            if(chair[b - 1]){
                chair[b - 1] = 0
                answer++
            }else{
                num -= 1
                answer -= num 
                break
            }
            b++
            if(b > n){
                b = 1
            }
        }
    }
    console.log(answer);
    console.log('');
}

/**
* 標準入出力のための処理
*/
const reader = require('readline')

process.stdin.resume()
process.stdin.setEncoding('utf8')
const rl = reader.createInterface({
   input: process.stdin,
   output: process.stdout
})

let lines = []
rl.on('line', (line) => {
   lines.push(line)
})

rl.on('close', main)