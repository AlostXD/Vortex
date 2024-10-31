


export default function Footer() {
    return (
        <>
        <footer className="bg-neutral-900 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 p-4 text-center list-none md:flex-row md:items-start">
                <li className="p-3 flex flex-col gap-2">
                    <h3 className="font-extrabold text-2xl">Suporte</h3>
                    <p className="italic">Email: <a href="mailto:vortexhelp@gmail.com" className="underline underline-offset-1">vortexhelp@gmail.com</a></p>
                    <p className="italic">Celular: <a href="">+99 (34) 9 9999-9999</a></p>
                </li>
                <li className="p-3 flex flex-col gap-2">
                    <h3 className="font-extrabold text-2xl">Equipe</h3>
                    <h4 className="font-bold">Resp. Geral</h4>
                    <p className="italic">Vanderlei Ribeiro</p>
                    <h4 className="font-bold">Equipe de Desenvolvimento</h4>
                    <p className="italic">Ketley Souza</p>
                    <p className="italic">Maria Eduarda</p>
                    <p className="italic">João Cunha</p>
                    <p className="italic">Gabriel Guimarães</p>
                </li>
                <li className="p-3 flex flex-col gap-2">
                    <h3 className="font-extrabold text-2xl">Tecnologias</h3>
                    <p className="italic">Discord.js</p>
                    <p className="italic">Node.js</p>
                    <p className="italic">Next.js</p>
                    <p className="italic">VS Code</p>
                    <p className="italic">PostgreSQL</p>
                    <p className="italic">Express.js</p>
                </li>
            </div>
        </footer>
        </>
    )
}