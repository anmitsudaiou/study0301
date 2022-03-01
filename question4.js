/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {
     
    const str_1 = lines[0]
    const str_2 = lines[1]
    if((str_1.length >= 0 && str_1.length <= 100) && (str_2.length >= 0 && str_2.length <= 100)){
        if(str_1 === str_2){
            console.log('ok');
        } else {
            console.log('NG');
        }
    } 
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