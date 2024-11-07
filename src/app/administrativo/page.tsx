"use client";

import { useEffect, useState } from 'react';
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Image from "next/image"

export default function Controle() {
<<<<<<< HEAD
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/user/getUsers');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
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

    // Filtra o usuário selecionado e exibe todos os registros de bate-ponto
    const selectedUserData = users.find((user: any) => user.user_discord_name === selectedUser);

=======
>>>>>>> refs/remotes/origin/main
    return (
        <>
            <Navbar />
            <div className="bg-white text-black dark:bg-neutral-800 dark:text-white flex flex-col md:flex-row md:h-screen">
                <div className="flex flex-col gap-12 items-center left-0 p-20 justify-center">
                    <Image src="/vortex.svg" alt="Bate Ponto" width={150} height={150} className="rounded-full" />
                    <h2 className="font-extrabold text-xl italic">Vortex</h2>
                    <div className="relative">
<<<<<<< HEAD
                        <select className="appearance-none bg-gray-500 dark:bg-neutral-300 dark:text-black p-2 rounded-xl"
                                onChange={handleUserChange}>
                            <option value="">Selecione o funcionário</option>
                            {users.map((user: any) => (
                                <option key={user.user_discord_name} value={user.user_discord_name}>
                                    {user.user_discord_name}
                                </option>
                            ))}
                        </select>
=======
>>>>>>> refs/remotes/origin/main
                    </div>
                </div>
                <div className="w-full h-1 md:h-auto md:w-1 bg-black dark:bg-white"></div>
                <div className="grid grid-cols-1 sm:gap-0 md:grid-cols-3 w-full items-center justify-center gap-28 text-center p-4 h-full">
                    <div>
<<<<<<< HEAD
                        <p className="border-y md:border-x border-black p-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">Registros de Entrada</p>
                        <ul className='max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white'>
                            {selectedUserData && selectedUserData.registros.map((registro: any, index: number) => (
                                <li key={index} className="border-b md:border-x border-black">
                                    {registro.entrada}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 border-black bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">Registros de Saída</p>
                        <ul className='max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white'>
                            {selectedUserData && selectedUserData.registros.map((registro: any, index: number) => (
                                <li key={index} className="border-b md:border-x border-black">
                                    {registro.saida || "N/A"}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="border-y md:border-x p-2 border-black bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">Total</p>
                        <ul className='max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white'>
                            {selectedUserData && selectedUserData.registros.map((registro: any, index: number) => (
                                <li key={index} className="border-b md:border-x border-black">
                                    {registro.total || "N/A"}
                                </li>
                            ))}
=======
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
>>>>>>> refs/remotes/origin/main
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
