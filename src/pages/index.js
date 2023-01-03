import * as React from "react"
import '../style/global.css'

const IndexPage = ({children}) => {
  return (
    <main >
      Heder
      {children}
      Footer
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
