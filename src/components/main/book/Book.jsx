import {Link} from "react-router-dom"

const Book = ({img, link}) => {
	return (
		<div className="ease-linear duration-200 hover:bg-slate-800 flex flex-col flex-wrap gap-1 items-center border-2 border-solid border-slate-800 px-2 py-10 rounded-3xl">
			<img src={img} alt="book" className="mb-4 transition-all animate-mine w-10/12 block rounded-2xl hover:scale-105 ease-linear duration-200" />
			<Link to={link} className="ease-linear duration-200 hover:bg-slate-700 text-xl mt-2 border border-solid border-slate-800 px-14 py-1 rounded-3xl">To'liq</Link>
			<a href="https://t.me/rightbook_admin" target="blank" className="ease-linear duration-200 hover:bg-slate-700 text-xl mt-2 border border-solid border-slate-800 px-14 py-1 rounded-3xl">Sotib olish</a>
		</div>
	)
}

export default Book;