import Book from "../components/main/book/Book"
import namuna from "../audio/namuna.mp3"
import namuna2 from "../audio/namuna2.mp3"

import green from "../img/green_book.jpg"
import silver from "../img/silver_book.jpg"
import gold from "../img/gold_book.jpg"

const Main = () => {
	return (
		<div>
			<div  data-aos="fade-top" className="blocks mt-10 flex justify-between items-center gap-24 p-10 sm:gap-4 sm:flex-col lg:gap-24 lg:flex-row">
				<Book img={green} link="./info?name=Green&img=green&version=0&lists=38&words=990&per=66&audio=Good&narx=99 000" />
				<Book img={gold} link="./info?name=Golden&img=gold&version=5&lists=38&words=990&per=33&audio=High&narx=129 000" />
				<Book img={silver} link="./info?name=Silver&img=silver&version=3&lists=44&words=1000&per=40&audio=High&narx=119 000" />
			</div>
			<div className="audios flex justify-center items-center gap-20">
				<div className="flex items-center justify-center flex-col">
					<h1 className="text-3xl my-10 text-center">Yodlash mashqi namuna</h1>
					<audio src={namuna} controls className="border-0"></audio>
				</div>
				<div className="flex items-center justify-center flex-col">
					<h1 className="text-3xl my-10 text-center">Aniqlash mashqi namuna</h1>
					<audio src={namuna2} controls className="border-0"></audio>
				</div>
			</div>
		</div>
	)
}

export default Main