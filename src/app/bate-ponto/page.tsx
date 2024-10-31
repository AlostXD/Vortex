import Navbar from "@/app/components/navbar";
import Image from "next/image"
import logo from "@/app/img/teste.jpg"


export default function BatePonto() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:max-w-4xl items-center justify-content mx-auto max-w-screen-lg h-auto p-14 gap-4">
                <div className="flex flex-col gap-4 items-center justify-start">
                    <Image src={logo} alt="Bate Ponto" width={150} height={150} className="rounded-full"/>
                    <h2 className="font-extrabold text-xl">Nome do Funcionário</h2>
                    <h3 className="text-lg italic font-bold">Empresa</h3>
                    <p>Total trabalhado: </p>
                    <a className="bg-neutral-800 p-2 rounded-xl transition-all ease-in-out hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black">Trocar de conta</a>
                    <button className="bg-neutral-800 p-2 rounded-xl transition-all ease-in-out hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black">Iniciar serviço</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4 w-full items-center justify-center gap-28 border text-center">
                    <div>
                        <p className="border-y md:border-x bg-neutral-600">Dia</p>
                        <ul>
                            <li className="border-b md:border-x">21/02/2006</li>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x bg-neutral-600">Entrada</p>
                        <ul>
                            <li className="border-b md:border-x">08:00</li>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x bg-neutral-600">Saída</p>
                        <ul>
                            <li className="border-b md:border-x">12:00</li>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x bg-neutral-600">Total</p>
                        <ul>
                            <li className="border-b md:border-x">4 Horas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}