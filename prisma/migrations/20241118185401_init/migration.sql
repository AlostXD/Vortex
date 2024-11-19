-- CreateTable
CREATE TABLE "Pontos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "userDiscordId" TEXT,
    "userDiscordName" TEXT,
    "entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saida" TIMESTAMP(3),
    "total" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pontos_pkey" PRIMARY KEY ("id")
);
