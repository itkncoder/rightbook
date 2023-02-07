import {Link} from "react-router-dom"

const Navigation = () => {
	return (
		<nav>
      <ul className="nav__ul flex justify-center items-center gap-14 mt-16 sm:mt-10 lg:flex">
        <Link data-aos="fade-left" to="./info?name=Green&img=green&version=0&lists=38&words=990&per=66&audio=Good&narx=99 000 / 55 000" className="ease-linear duration-200 hover:bg-slate-800 text-lg p-2 cursor-pointer border border-solid border-slate-800 px-10 rounded-2xl"><li>Green</li></Link>

        <Link data-aos="fade-right" to="./info?name=Golden&img=gold&version=5&lists=38&words=990&per=33&audio=High&narx=129 000 / 55 000" className="ease-linear duration-200 hover:bg-slate-800 text-lg p-2 cursor-pointer border border-solid border-slate-800 px-10 rounded-2xl"><li>Golden</li></Link>

        <Link data-aos="fade-up" to="./info?name=Silver&img=silver&version=3&lists=44&words=1000&per=40&audio=High&narx=119 000 / 55 000" className="ease-linear duration-200 hover:bg-slate-800 text-lg p-2 cursor-pointer border border-solid border-slate-800 px-10 rounded-2xl"><li>Silver</li></Link>
      </ul>
    </nav>
	)
}

export default Navigation;