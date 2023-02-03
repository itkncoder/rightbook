import {Routes, Route} from "react-router-dom"
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

import bookImg from "./img/book.png"

import Info from "./pages/Info"
import NotFound from "./pages/NotFound"
import Form from "./pages/Form"
import Main from "./pages/Main"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Navigation from "./components/main/nav/Navigation"

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className="App bg-slate-900">
      <div className="preloader absolute bg-slate-900 w-full h-full absolute flex justify-center items-center z-50 overfow-hidden">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <div className="wrapper max-w-7xl m-auto sm:max-w-full md:max-w-full lg:max-w-7xl xl:max-w-8xl 2xl:max-w-8xl">
        <Header />
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="info" element={<Info/>} />
      </Routes>

      <div className="order-block flex mt-14 justify-evenly">
        <img className="w-4/12 hover:scale-105 transition-all" src={bookImg} alt="bookimg" />
        <div className="my-10 py-5 px-10 w-fit flex flex-col items-center bg-slate-700 rounded-lg">
          <h1 className="text-center text-4xl">Buyurtma berish</h1>
          <p className="text-center text-center w-60">Tez orada adminlarimiz siz bilan bog'lanishadi!</p>
          <Form/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

document.body.onload = () => {
    setTimeout(() => {
        let preloader = document.querySelector(".preloader");
        let images = document.images;
        if(!preloader.classList.contains("done") && images) {
            preloader.classList.add("done");
        }
    }, 2000);
}

export default App;