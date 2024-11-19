import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userdiscordemail, saida } = await req.json();

    const ponto = await prisma.pontos.updateMany({
      where: {
        userdiscordid: userdiscordemail,
        saida: null, // Apenas registra saída para registros sem saída
      },
      data: {
        saida,
      },
    });

    if (ponto.count === 0) {
      return NextResponse.json({ error: "Nenhum registro de entrada encontrado." }, { status: 404 });
    }

    return NextResponse.json(ponto, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao finalizar ponto:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao finalizar ponto" },
      { status: 500 }
    );
  }
}