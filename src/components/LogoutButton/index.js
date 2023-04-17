// Write your JS code here
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const LogOut = () => {
    history.replace('/login')
  }
  return (
    <div className="">
      <button className=" " type="button" onClick={LogOut}>
        Logout
      </button>
    </div>
  )
}
export default LogoutButton
