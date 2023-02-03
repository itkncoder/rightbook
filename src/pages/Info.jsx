import silver from "../img/silver_book.jpg"
import green from "../img/green_book.jpg"
import gold from "../img/gold_book.jpg"

import { useLocation } from "react-router-dom"
import "./forpages.css"
import { useEffect, useState } from "react"

const Info = () => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const [img, setImg] = useState('')

	const images = [silver, green, gold]

	function findImg() {
		images.forEach((item, index) => {
			if(item.includes(params.get('img'))) {
				setImg(item)
			}
		})
	}
	useEffect(() => {
		findImg()
	}, [params.get('name')])

    return (
        <div>
			<main data-aos="fade-up">
	            <div>
	                <div className="flex justify-center items-center mt-10">
	                    <img data-aos="fade-top" src={img} alt="Book" className="book w-4/12 rounded-3xl border-2 border-slate-500 image-book" />
	                </div>
	                <div className="mt-10 flex justify-center items-center flex-col gap-4">
						<p className="text-xl flex justify-center items-center flex-col text-center">
	                        <span className="text-6xl block">{params.get("name")}</span><br />
	                        Golden Global 6.{params.get('version')}V<br />
	                        Betlar: {params.get('lists')}<br />
	                        Ovoz(O'zbekcha): Qiz bola<br />
	                        Ovoz(Koreyscha): Qiz/O'g'il bola<br />
							So'zlar: {params.get('words')} so'z {params.get('per')} kunda<br />
	                        Material: Audio-{params.get('audio')} Quality<br />
	                        Call Center: +998 (91) 130 40 31<br />
							Narxi: {params.get('narx')} so'm <br />
	                        Scanner: Bor <br />
	                    </p>
	                    <a href="https://t.me/rightbook_admin" className="btn ease-linear duration-200 hover:bg-slate-700 text-xl mt-2 border border-solid border-slate-800 px-10 py-2 rounded-3xl">Sotib olish</a>
	                </div>
	            </div>
        	</main>
		</div>
    )
}

export default Info