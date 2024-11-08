import Image from "next/image";

export default function Navbar() {
    return (
        <>
        <div className="border-b-2 borber-b-black dark:border-b-white w-full bg-white dark:bg-neutral-900 text-black dark:text-white">
            <nav className="flex flex-col items-center gap-3 max-w-screen-lg m-auto p-2 md:flex-row md:justify-between">
                <a className="flex items-center justify-center gap-4" href="./">
                    <Image src="/vortex.svg" alt="Vortex" width={50} height={50} />
                    <h1 className="italic font-extrabold text-xl">Vortex</h1>
                </a>
                <ul className="flex flex-col items-center gap-12 font-bold sm:flex-row sm:justify-between">
                    <li className="transition duration-500 ease-in-out hover:scale-x-105 hover:text-gray-700">
                        <a href="./">Home</a>
                    </li >{/*
                    <li className="transition duration-500 ease-in-out hover:scale-x-105 hover:text-gray-700">
                        <a href="./bate-ponto">Bate-Ponto</a>
                    </li>*/}
                    <li className="transition duration-500 ease-in-out hover:scale-x-105 hover:text-gray-700">
                        <a href="./administrativo">Administrativo</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}