import { Header } from './index.jsx'

export default function Layout(props) {
  return(
    <>
      <Header />
      <div>
        {props.children}
      </div>
    </>
  )
}