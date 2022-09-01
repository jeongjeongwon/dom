import styling from "./style.js"
const root = document.getElementById('root')
const A = []
function test(bt, main){
  A.push(`<${bt}></${bt}><${main}></${main}><${bt}></${bt}>`)
}
test("button", "main")
root.innerHTML = A.join('')

const Button = document.querySelectorAll('button')
console.dir(Button)
const set = document.querySelector('main')
console.dir(set)
styling(root, Button, set);