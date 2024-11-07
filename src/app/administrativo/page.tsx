"use client";

import { useEffect, useState } from 'react';
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Image from "next/image"

export default function Controle() {
    return (
        <>
            <Navbar />
            <div className="bg-white text-black dark:bg-neutral-800 dark:text-white flex flex-col md:flex-row md:h-screen">
                <div className="flex flex-col gap-12 items-center left-0 p-20 justify-center">
                    <Image src="/vortex.svg" alt="Bate Ponto" width={150} height={150} className="rounded-full" />
                    <h2 className="font-extrabold text-xl italic">Vortex</h2>
                    <div className="relative">
                    </div>
                    {/*<a className="bg-gray-500 p-2 rounded-xl transition-all ease-in-out hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black hover:cursor-pointer">Trocar de conta</a>*/}
                </div>
                <div className="w-full h-1 md:h-auto md:w-1 bg-black" ></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4 w-full items-center justify-center gap-28 text-center p-4 h-full">
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Nome</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Entrada</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Saída</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Total</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}