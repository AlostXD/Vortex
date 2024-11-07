import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}

export const getUserFromDb = async (email: string, password: string) => {
    const user = await db.user.findFirst({
        where: {
            AND: [
                { email: { equals: email } },
                { password: { equals: password } }
            ]
        } as any
    });

    return user
}

export const db = prisma;