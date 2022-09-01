function styling(root, Button, main){
  const container = []
  container.push(`<${root} id="root"><${Button}></${Button}><${main}></${main}><${Button}></${Button}></${root}>`)
}

container("div","button","main")