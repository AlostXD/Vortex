import React from "react";
import { auth } from "@/auth"; // Certifique-se de que auth() está configurado corretamente
import { prisma } from "@/utils/prisma"; // Configuração do Prisma

interface Registro {
  dia: string;
  entrada: string;
  saida: string;
  total: string;
}

export default async function DisplayPontos() {
  // Autenticação no servidor
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div>
        <p className="text-red-500">
          Usuário não autenticado. Faça login para acessar os registros.
        </p>
      </div>
    );
  }

  // Buscar registros diretamente no servidor
  const registros = await prisma.pontos.findMany({
    where: { userdiscordid: session.user.email },
    orderBy: { entrada: "asc" },
  });

  const registrosFormatados: Registro[] = registros.map((registro) => {
    const entrada = new Date(registro.entrada);
    const saida = registro.saida ? new Date(registro.saida) : null;

    let total = "Ainda em progresso";
    if (entrada && saida) {
      const diff = saida.getTime() - entrada.getTime();
      const horas = Math.floor(diff / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);
      total = `${horas}horas, ${minutos}minutos e ${segundos}segundos`;
    }

    return {
      dia: entrada.toISOString().split("T")[0],
      entrada: entrada.toLocaleTimeString(),
      saida: saida ? saida.toLocaleTimeString() : "Não registrado",
      total,
    };
  });

  if (registrosFormatados.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Seus registros de ponto</h2>
        <p className="text-gray-400">Nenhum registro encontrado.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:gap-0 md:grid-cols-2 lg:grid-cols-4 w-full items-center justify-center gap-28 text-center p-4 h-fit">
        <div>
          <p className="border-y md:border-x border-black p-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">
            Registros de Entrada
          </p>
          <ul className="max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white">
            {registrosFormatados.map((registro: any, idx: number) => (
              <li key={idx} className="border-b md:border-x border-black">
                {registro.dia}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-y md:border-x border-black p-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">
            Registros de Entrada
          </p>
          <ul className="max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white">
            {registrosFormatados.map((registro: any, idx: number) => (
              <li key={idx} className="border-b md:border-x border-black">
                {registro.entrada}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-y md:border-x p-2 border-black bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">
            Registros de Saída
          </p>
          <ul className="max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white">
            {registrosFormatados.map((registro: any, idx: number) => (
              <li key={idx} className="border-b md:border-x border-black">
                {registro.saida || "N/A"}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="border-y md:border-x p-2 border-black bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black font-extrabold">
            Total
          </p>
          <ul className="max-h-full text-black bg-neutral-900 dark:bg-neutral-500 dark:text-white">
            {registrosFormatados.map((registro: any, idx: number) => (
              <li key={idx} className="border-b md:border-x border-black">
                {registro.total || "N/A"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
