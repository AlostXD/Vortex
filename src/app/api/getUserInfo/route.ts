import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email do usuário não fornecido." }, { status: 400 });
  }

  try {
    // Busca registros pelo email do usuário
    const registros = await prisma.pontos.findMany({
      where: { userdiscordid: email },
    });

    if (!registros.length) {
      return NextResponse.json({ message: "Nenhum registro encontrado para este usuário." }, { status: 200 });
    }

    // Formata os registros para exibição
    const registrosFormatados = registros.map((registro) => {
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
        dia: entrada.toISOString().split("T")[0], // Apenas a data
        entrada: entrada.toLocaleTimeString(), // Formato HH:MM:SS
        saida: saida ? saida.toLocaleTimeString() : "Não registrado",
        total,
      };
    });

    return NextResponse.json(registrosFormatados, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao buscar registros:", error);
    return NextResponse.json(
      { error: "Erro interno ao buscar os registros. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}