export default function styling(element, bt, main){
  element.style.width = '100vw'
  element.style.height = '100vh'
  element.style.backgroundColor = 'skyblue'
  element.style.display = 'flex'
  element.style.justifyContent = 'center'
  element.style.alignItems = 'center'

  bt.style.width = '100px'
  bt.style.height = '100px'
  bt.style.borderRadius = '50%'
  bt.style.border = '0px'

  main.style.width = '800px'
  main.style.height = '400px'
  main.style.backgroundColor = 'white'
  main.style.border = '1px solid black'
}
