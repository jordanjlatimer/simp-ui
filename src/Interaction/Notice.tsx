import * as React from "react"
import "../styles/notice.sass"

type NoticeProps = {
  text: string,
  icon?: React.ReactNode,
  linger?: number
}

const Notice: React.FC<NoticeProps> = ({text, icon, linger = 4000}) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setShow(true)
    window.setTimeout(() => setShow(false), linger)
  },[])

  return(
    <div className={"notice" + (show ? " show" : "")}>
      {icon}
      {text}
    </div>
  )
}

Notice.displayName = "Notice"

export { Notice }



