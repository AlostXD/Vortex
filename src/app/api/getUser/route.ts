import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Obtém todos os usuários e agrupa entradas pelo nome
        const users = await prisma.pontos.groupBy({
            by: ['userdiscordname'],
            _min: {
                entrada: true,
            },
            _max: {
                saida: true,
            },
        });

        // Mapeia para incluir uma lista de registros detalhados
        const groupedUsers = await Promise.all(users.map(async user => {
            const registros = await prisma.pontos.findMany({
                where: { userdiscordname: user.userdiscordname },
            });
            return {
                userdiscordname: user.userdiscordname,
                registros,
            };
        }));

        return NextResponse.json(groupedUsers, { status: 200 });
    } catch (error: Error | any) {
        console.error('Erro ao buscar usuários:', error);
        return NextResponse.json({ error: error.message || 'Erro ao buscar usuários' }, { status: 500 });
    }
}