import { type PropsWithChildren, type FC } from "react";
import { InfoBoxT } from "./types";

type Props = PropsWithChildren<InfoBoxT>

const InfoBox: FC<Props> = (props) => {
  const { mode, children } = props

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  }

  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>WARNING</h2>
      <p>{children}</p>
    </aside>
  )
}

export default InfoBox;