import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Obtém todos os usuários e agrupa entradas pelo nome
        const users = await db.user.groupBy({
            by: ['user_discord_name'],
            _min: {
                entrada: true,
            },
            _max: {
                saida: true,
            },
        });

        // Mapeia para incluir uma lista de registros detalhados
        const groupedUsers = await Promise.all(users.map(async user => {
            const registros = await db.user.findMany({
                where: { user_discord_name: user.user_discord_name },
            });
            return {
                user_discord_name: user.user_discord_name,
                registros,
            };
        }));

        return NextResponse.json(groupedUsers, { status: 200 });
    } catch (error: any) {
        console.error('Erro ao buscar usuários:', error);
        return NextResponse.json({ error: error.message || 'Erro ao buscar usuários' }, { status: 500 });
    }
}





/*


import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
    return NextResponse.json({ message: "Rota de API funcionando!" });
}

export async function POST(request: Request) {
    console.log("Rota API chamada");
    try {
        const body = await request.json();
        const {username, password, email} = body;
        if(existingUserByName){
            return NextResponse.json({ user: null, message:"Usuário já cadastrado"}, {status: 409});
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
                total: "0" // Add the total property with a default value
            }
        });
        

        return NextResponse.json(user, { status: 201 });
    } catch(error) {
        console.error('Erro ao criar usuário:', error);
        return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
    }
}


*/