import * as React from "react"
import * as ReactDom from "react-dom"

import { default as Root } from "./Root"

const ROOT_ID = "root"

const render = (Component: typeof Root) => {
  document.body.innerHTML = `<div id=${ROOT_ID} />`
  ReactDom.render(
    React.createElement(Component),
    document.getElementById(ROOT_ID)
  )
}

// @ts-ignore
import("../pkg").catch(console.error)

render(Root)
