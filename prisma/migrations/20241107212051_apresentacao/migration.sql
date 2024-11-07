-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_discord_name" TEXT NOT NULL,
    "entrada" TIMESTAMP(3) NOT NULL,
    "saida" TIMESTAMP(3),
    "total" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
