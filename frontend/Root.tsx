import * as React from "react"
import { hot } from "react-hot-loader"

const message: string = "O₂"

const Root: React.FunctionComponent = () => <div>{message}</div>

export default hot(module)(Root)
