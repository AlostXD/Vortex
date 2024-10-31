import Image from "next/image";

export default function Login() {
    return (
        <>
            {/* Fundo com efeito de blur */}
            <div className="absolute inset-0 bg-[url('./img/background-login.png')] bg-cover bg-center filter blur-sm -z-10"></div>

            {/* Conteúdo */}
            <div className="relative z-10 flex justify-center items-center h-screen">
                
                <div className="flex flex-col max-w-sm w-full items-center justify-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form className="flex flex-col gap-4 w-full">
                        <input type="text" placeholder="Usuário" className="p-2 border rounded-xl" />
                        <input type="password" placeholder="Senha" className="p-2 border rounded-xl" />
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    );
}