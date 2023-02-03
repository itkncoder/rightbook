import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios"

const Form = () => {

    const { register, handleSubmit } = useForm();

	const [name, setName] = useState("");
    const [surename, setSurename] = useState('')
    const [tgid, setTgid] = useState('')
    const [center, setCenter] = useState('')
    const [email, setEmail] = useState('')
    const [referalId, setReferalId] = useState('')

	const onSubmit = async (data) => {
        if(data.name) {
            const TOKEN = '5828222157:AAFlbvVhuxvdbwJHhSgHG0pdFm45_pUZAvY'
            const CHAT_ID = '-1001739067912'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let message = `<b>SOROVNOMA</b>\n`
            message += `<b>Ism: ${data.name}</b>\n`
            message += `<b>Familiya: ${data.surename}</b>\n`
            message += `<b>Email: ${data.email}</b>\n`
            message += `<b>Username: ${data.tgid}</b>\n`
            message += `<b>ReferalID: ${data.referal}</b>\n`
            message += `<b>Manzil: ${data.center}</b>`
            

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            }, setName(''), setSurename(""), setTgid(''), setEmail(''), setCenter(''), setReferalId('')).then(() => {
                setDone(true)
                setTimeout(() => setDone(false), 2000)  
            })
        }
    };

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="m-auto max-w-6xl py-3 px-3 flex justify-center items-center flex-col gap-4">
				<input value={name} onInput={(e) => {setName(e.target.value)}} {...register("name")} type="text" name="name" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Ismingiz..."/>
				<input value={surename} onInput={(e) => {setSurename(e.target.value)}} {...register("surename")} type="text" name="surename" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Familiyangiz..."/>
				<input value={email} onInput={(e) => {setEmail(e.target.value)}} {...register("email")} type="text" name="email" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Emailingiz..."/>
				<input value={tgid} onInput={(e) => {setTgid(e.target.value)}} {...register("tgid")} type="text" name="tgid" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Telegram..."/>
				<div className="flex items-center justify-center flex-col">
					<label className="text-sm" htmlFor="center">masalan: Uzbekistan, Tashkent, Yunusobod</label>
					<input value={center} onInput={(e) => {setCenter(e.target.value)}} {...register("center")} id="center" type="text" name="center" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Yashash joyingiz..."/>
				</div>
				<input value={referalId} onInput={(e) => {setReferalId(e.target.value)}} {...register("referal")} type="text" name="referal" className="bg-slate-800 outline-none border-none p-2 px-10 rounded" placeholder="Referal ID..."/>

				<input type="submit" className="hover:bg-gray-800 p-2 cursor-pointer border border-slate-400 rounded px-4" value="Jo'natish"/>
			</form>
		</div>
	) 
}

export default Form