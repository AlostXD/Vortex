import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 p-14">
        <h1 className="text-4xl text-center italic">Sobre a VORTEX</h1>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-52">
        <div className="text-center max-w-full flex flex-col gap-4">
          <p>
            Com o avanço das tecnologias de automação e inteligência artificial, chatbots
            têm otimizado processos em diversos setores, incluindo a gestão de recursos humanos.
            O controle de ponto dos colaboradores, que historicamente era manual e, mais recentemente, eletrônico, ainda
            enfrenta desafios como a precisão dos dados, conformidade legal e usabilidade dos sistemas.
            Nesse cenário, a “Vortex” surge como uma solução eficiente, automatizando o registro de horários de trabalho.
          </p>

          <p>
            Devido a isso, nossa empresa desenvolveu um site utilizando Next.JS juntamente com uma funcionalidade para o Discord
            utilizando sua API e  o banco de dados PostgreSQL que registra automaticamente as horas de entrada, saída e o tempo
            de serviço dos colaboradores, armazenando as informações no banco de dados. O site proporciona um  acesso fácil e
            intuitivo aos dados para os colaboradores e gestores por meio de comandos e da Dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/vortex.svg" alt="Vortex" width={300} height={300} />
          <h1 className="italic text-6xl">VORTEX</h1>
        </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto max-w-screen-lg h-auto gap-4 p-14">
        <h1 className="italic text-4xl text-center">Um pouco mais sobre a vortex</h1>
        <ul className="flex flex-col max-w-screen-lg gap-4 lg:flex-row">
          <li className="bg-neutral-800 w-full flex flex-col items-center justify-evenly p-6 rounded-xl">
            <h2 className="text-xl font-extrabold">Objetivo do Projeto</h2>
            <p className="italic">
              Desenvolver um Bot e um site de bate-ponto utilizando a API do Discord e, 
              o framework Next.JS com um banco de dados relacional chamado PostgreSQL 
              que registra automaticamente as horas de entrada, saída e também o tempo total trabalhado.
               O relatórios será disponibilizado para as empresas  pelo nosso Dashboard.
            </p>
          </li>
          <li className="bg-neutral-800 w-full flex flex-col items-center justify-evenly p-6 rounded-xl">
            <h2 className="text-xl font-extrabold">Metodologias</h2>
            <p className="italic">
              O projeto utiliza de linguagens e frameworks com o foco no Backend, porém, ainda 
              com o Next.JS para a criação do Frontend.
               Os requisitos solicitados pelo projeto incluem: Estudo de Banco de dados, Estudos de
                Linguagens Backend, Estudos de Frameworks e de APIs.
            </p>
          </li>
          <li className="bg-neutral-800 w-full flex flex-col items-center justify-evenly p-6 rounded-xl">
            <h2 className="text-xl font-extrabold">Tecnologias</h2>
            <ul className="flex flex-col gap-4 italic">
              <li>Discord API: Utilizada para a comunicação e funcionamento do BOT do Discord.</li>
              <li>Node.js: Framework backend do Javascript. Essencial para a comunicação com a API do Discord.</li>
              <li>Discord: Aplicativo utilizado para testes e funcionalidade do BOT.</li>
              <li>VS Code: IDE de programação.</li>
              <li>Next.js: Framework Front/Back-end desenvolvido pela Host Vercel, que possui comunicação via Route Pages para a criação dos sites.</li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
