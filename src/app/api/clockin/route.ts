import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userdiscordname, userdiscordemail } = await req.json();
    
    // Criar data ajustada para UTC-3
    const entrada = new Date();
    entrada.setHours(entrada.getHours() - 3);

    // Transformar os campos em letras minúsculas
    const lowercaseName = userdiscordname.toLowerCase();
    const lowercaseEmail = userdiscordemail.toLowerCase();

    const ponto = await prisma.pontos.create({
      data: {
        userdiscordname: lowercaseName,
        userdiscordid: lowercaseEmail,
        entrada,
      },
    });

    return NextResponse.json(ponto, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao registrar ponto:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao registrar ponto" },
      { status: 500 }
    );
  }
}
