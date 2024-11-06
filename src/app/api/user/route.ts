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