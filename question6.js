/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {
    
    let answer;
    const customerInfo = lines[0].split('')
    const n = Number(customerInfo[0])
    const m = Number(customerInfo[1])
    const chair = new Array(n)

    for(let i = 0;i < m;i++){
        const groupInfo = lines[i+1].split('')
        const a = Number(groupInfo[0])
        const b = Number(groupInfo[1])
        for(let num = 0;num < a;num++){
            if(chair[b-1]){
                chair[b-1] = false
                answer++
            }
        }
    }


    // console.log(chair);
 
    // for(let num = 0;num < countOfGroup;num++){
    //     for(let people = 0;)
    // }
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