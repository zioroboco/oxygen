import * as React from "react"
import { hot } from "react-hot-loader"
import * as engine from "../pkg"

export type Props = { engine: typeof engine }

const Root: React.FunctionComponent<Props> = ({ engine }) => (
  <div>{engine.message()}</div>
)

export default hot(module)(Root)
