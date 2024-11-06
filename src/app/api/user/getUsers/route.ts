import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await db.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return NextResponse.json({ error: 'Erro ao buscar usuários' }, { status: 500 });
    }
}