"use client";

import { useState } from 'react';

export default function Cadastro()
    {const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, phone }),
        });

        if (response.ok) {
            alert('Registrado com sucesso!');
        } else {
            alert('Erro no registro.');
        }
    };

    return (
        <>
            {/* Fundo com efeito de blur */}
            <div className="absolute inset-0 bg-[url('./img/background-login.png')] bg-cover bg-center filter blur-sm -z-10"></div>

            {/* Conteúdo */}
            <div className="relative z-10 flex justify-center items-center h-screen">
                
                <div className="flex flex-col max-w-fit gap-4 w-full items-center justify-center bg-neutral-900 bg-opacity-80 p-6 rounded-lg shadow-lg border">
                    <div className="flex flex-col items-center justify-center p-4 gap-4 w-full">
                        <h2 className="text-2xl font-semibold mb-4">Cadastro</h2>
                        <form className="flex flex-col gap-10 w-full items-center justify-center" onSubmit={handleRegister}>
                            <input type="text" placeholder="Nome da Empresa" className="p-2 border rounded-xl bg-neutral-900 placeholder-white placeholder-opacity-50 w-96" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input type="password" placeholder="Senha" className="p-2 border rounded-xl bg-neutral-900 placeholder-white placeholder-opacity-50 w-96" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <input type="text" placeholder="Telefone da Empresa | +55 (99) 9 9999-9999" className="p-2 border rounded-xl bg-neutral-900 placeholder-white placeholder-opacity-50 w-96" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            <input type="email" placeholder="Email" className="p-2 border rounded-xl bg-neutral-900 placeholder-white placeholder-opacity-50 w-96" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <p>Em caso de perca de senha de usuário, entre em contato com seu supervisor.</p>
                            <button type="submit" className="bg-neutral-800 text-white p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out w-32">Cadastrar</button>
                        </form>
                        <a href="/login" className="underline">Já possui uma conta? Entre já</a>
                    </div>
                </div>
            </div>
        </>
    );
}
