import {Link} from "react-router-dom"

import insta from "../../img/insta.png"
import facebook from "../../img/facebook.png"
import telegram from "../../img/telegram.png"

const Footer = () => {
	return (
		<div>
			<footer className="mt-10 h-32 flex justify-center items-center flex-col flex-wrap" data-aos="fade-up">
			    <div className="flex justify-center items-center gap-4">
		        <a href="https://instagram.com/rightbook_uz" target="blank">
			      	<img src={insta} alt="instagram" className="w-8 ease-linear duration-200 hover:scale-105" />
			      </a>
			      <a href="https://www.facebook.com/people/Right-Book/100081929276469/" target="blank">
			        <img src={facebook} alt="facebook" className="w-8 ease-linear duration-200 hover:scale-105" />
			      </a>
			      <a href="https://t.me/Right_Book_Rasmiy_bot" target="blank">
			        <img src={telegram} alt="telegram" className="w-8 ease-linear duration-200 hover:scale-105" />
			      </a>
			    </div>
			    <Link to="./" className="ease-linear duration-200 text-center block mt-2 hover:underline">rightbook.uz</Link>
    		</footer>
		</div>
	)
}

export default Footer;