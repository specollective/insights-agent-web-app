import Header from '../Header'

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