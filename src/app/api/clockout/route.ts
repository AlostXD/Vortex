import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userdiscordemail, saida } = await req.json();

    // Transformar o e-mail em letras minúsculas
    const lowercaseEmail = userdiscordemail.toLowerCase();

    // Atualizar o registro no banco de dados
    const ponto = await prisma.pontos.updateMany({
      where: {
        userdiscordid: lowercaseEmail,
        saida: null, // Apenas registra saída para registros sem saída
      },
      data: { saida: new Date(saida) },
    });

    if (ponto.count === 0) {
      return NextResponse.json(
        { error: "Nenhum registro de entrada encontrado." },
        { status: 404 }
      );
    }

    // Recuperar o registro atualizado
    const registroAtualizado = await prisma.pontos.findFirst({
      where: {
        userdiscordid: lowercaseEmail,
        saida: new Date(saida),
      },
    });

    if (!registroAtualizado) {
      return NextResponse.json(
        { error: "Erro ao recuperar o registro atualizado." },
        { status: 500 }
      );
    }

    // Calcular a diferença entre entrada e saída
    const entrada = new Date(registroAtualizado.entrada);
    const saidaDate = new Date(registroAtualizado.saida!); // Saída não será mais nula
    const totalMilliseconds = saidaDate.getTime() - entrada.getTime();

    // Calcular horas, minutos e segundos
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Formatar o tempo total como "X horas, X minutos e X segundos trabalhados"
    const totalFormatted = `${hours} horas, ${minutes} minutos e ${seconds} segundos trabalhados`;

    const total = await prisma.pontos.updateMany({
      where: {
        userdiscordid: lowercaseEmail,
        saida: new Date(saida),
      },
      data: { total: totalFormatted },
    });

    if (total.count === 0) {
      return NextResponse.json(
        { error: "Nenhum registro de tempo total encontrado." },
        { status: 404 }
      );
    }

    // Retornar os dados formatados
    return NextResponse.json(
      {
        message: "Ponto finalizado com sucesso!",
        total: totalFormatted,
        entrada: entrada.toISOString(),
        saida: saidaDate.toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erro ao finalizar ponto:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao finalizar ponto" },
      { status: 500 }
    );
  }
}
