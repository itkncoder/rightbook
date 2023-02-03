import {Link} from "react-router-dom"
import logo from "../../img/logo.png"

const Header = () => {
	return (
		<header className="header h-32 flex items-center justify-between">
      		<div className="logos flex items-center justify-start w-full">
      			<Link to="./" className="ml-10">
      				<img className="logo w-44" src={logo} alt="logo" />
      			</Link>
      			<Link to="./" className="main__title text-4xl cursor-pointer ml-4">Right Book</Link>
      		</div>	
    	</header>
	)
}

export default Header;