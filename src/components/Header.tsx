import { PropsWithChildren, type FC } from "react"
import { HeaderT } from "./types"
type Props = PropsWithChildren<HeaderT>
const Header: FC<Props> = ({ image, children }) => {
  return <header>
    <img {...image} />
    {children}
  </header>
}

export default Header