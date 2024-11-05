import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, password, username} = body;


        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail){
            return NextResponse.json({ user: null, message:"Email já cadastrado"}, {status: 409});
        }

        //check if username already exists

        const existingUserByName = await db.user.findUnique({
            where: { username: username }
        });
        if(existingUserByName){
            return NextResponse.json({ user: null, message:"Usuário já cadastrado"}, {status: 409});
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                username
            }
        });
        

        return NextResponse.json({ user: newUser, message:"Usuário cadastrado com sucesso"}, {status: 201});
    } catch(error) {

    }
}