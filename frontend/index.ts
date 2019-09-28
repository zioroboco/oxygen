import * as React from "react"
import * as ReactDom from "react-dom"

import { default as Root, Props } from "./Root"

const ROOT_ID = "root"

const render = () => {
  document.body.innerHTML = `<div id=${ROOT_ID} />`
  import("../pkg")
    .then(engine => {
      ReactDom.render(
        React.createElement<Props>(Root, { engine }),
        document.getElementById(ROOT_ID)
      )
    })
    .catch(console.error)
}

render()
