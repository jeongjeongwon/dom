import styling from "./style"
const root = document.getElementById('root')
const A = []
function test(bt, main){
  A.push(`<${bt}></${bt}><${main}></${main}><${bt}></${bt}>`)
}
test("button", "main")
root.innerHTML = A.join('')

styling(root, '100vw', '100vh', 'skyblue')