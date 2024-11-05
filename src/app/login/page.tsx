"use client";

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('token', token);
            alert('Login realizado com sucesso!');
        } else {
            alert('Credenciais inválidas');
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
                        <h2 className="text-2xl font-semibold mb-4">Login</h2>
                        <form className="grid grid-cols-1 gap-10 w-full items-center" onSubmit={handleLogin}>
                            <input type="email" placeholder="Usuário" className="p-2 border rounded-xl bg-neutral-900 placeholder-white" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Senha" className="p-2 border rounded-xl bg-neutral-900 placeholder-white" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <p>Em caso de perca de senha de usuário, entre em contato com seu supervisor.</p>
                            <button type="submit" className="bg-neutral-800 text-white p-2 rounded-xl hover:bg-white hover:text-black transition-all ease-in-out w-32">Entrar</button>
                        </form>
                        <a href="/cadastro" className="underline">Novo por aqui? Cadastre-se</a>
                    </div>
                </div>
            </div>
        </>
    );
}