import * as React from "react"
import * as ReactDOM from "react-dom"
import "../styles/notice.sass"

type NoticeProps = {
  text: string,
  icon?: React.ReactNode,
  linger?: number
  position?: {
    top?: string
    right?: string,
    left?: string
  }
}

const Notice: React.FC<NoticeProps> = ({text, icon, linger = 4000, position}) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setShow(true)
    window.setTimeout(() => setShow(false), linger)
  },[])

  return(
    ReactDOM.createPortal(
      <div className={"notice" + (show ? " show" : "")} style={position}>
        <div className={"notice-wrapper"}>
          {icon}
          {text}
        </div>
      </div>,
      document.body
    )
  )
}

Notice.displayName = "Notice"

export { Notice }



