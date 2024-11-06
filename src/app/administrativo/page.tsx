"use client";

import { useEffect, useState } from 'react';
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Image from "next/image"

export default function Controle() {
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/user/getUsers');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data); // Atualiza o estado com os dados dos usuários
                } else {
                    console.error("Erro ao buscar usuários");
                }
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUser(event.target.value);
    };

    const selectedUserData = users.find((user: any) => user.user_discord_name === selectedUser);

    return (
        <>
            <Navbar />
            <div className="bg-white text-black dark:bg-neutral-800 dark:text-white flex flex-col md:flex-row h-screen">
                <div className="flex flex-col gap-12 items-center left-0 p-20 justify-center">
                    <Image src="/vortex.svg" alt="Bate Ponto" width={150} height={150} className="rounded-full" />
                    <h2 className="font-extrabold text-xl italic">Vortex</h2>
                    <div className="relative">
                        <select className="appearance-none bg-gray-500 dark:bg-neutral-300 dark:text-black p-2 rounded-xl hover:cursor-pointer transition-all ease-in-out hover:bg-white hover:text-black hover:border-2 hover:border-black hover:p-[-5px]" onChange={handleUserChange}>
                            <option value="">Selecione o funcionário</option>
                            {users.map((user: any) => (
                                <option key={user.id} className="border p-2 mb-2 rounded">
                                    {user.user_discord_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/*<a className="bg-gray-500 p-2 rounded-xl transition-all ease-in-out hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black hover:cursor-pointer">Trocar de conta</a>*/}
                </div>
                <div className="w-full h-1 md:h-auto md:w-1 bg-black" ></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4 w-full items-center justify-center gap-28 text-center p-4 h-full">
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Nome</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                            {selectedUserData && (
                                <li className="border-b md:border-x">
                                    {selectedUserData.user_discord_name}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Entrada</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                            {selectedUserData && (
                                <li className="border-b md:border-x">
                                    {selectedUserData.entrada}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Saída</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                            {selectedUserData && (
                                <li className="border-b md:border-x">
                                    {selectedUserData.saida}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 bg-zinc-800 dark:bg-zinc-400 text-white dark:text-black">Total</p>
                        <ul className='max-h-full text-white bg-neutral-900 dark:bg-neutral-500 dark:text-black'>
                            {selectedUserData && (
                                <li className="border-b md:border-x">
                                    {selectedUserData.total}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}