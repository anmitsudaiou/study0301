/**
 *  メイン処理
 *  lines: Array<string> 入力された行(末尾は必ず改行)分の配列
 */
 const main = () => {
    const a = lines[0]
    const b = lines[1]
    if(a >= 0 && a <= 100){
        if(b >= 0 && b <= 100){
            let result = a * b
            console.log(result);
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
