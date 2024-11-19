import { prisma } from "@/utils/prisma";
import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { userdiscordname, userdiscordid } = await req.json();
        const entrada = new Date();

        const ponto = await prisma.pontos.create({
            data: {
                userdiscordname,
                userdiscordid,
                entrada,
            },
        });

        return NextResponse.json(ponto, { status: 201 });
    } catch (error: Error | any) {
        console.error('Erro ao registrar ponto:', error);
        return NextResponse.json({ error: (error as any).message || 'Erro ao registrar ponto' }, { status: 500 });
    }
}