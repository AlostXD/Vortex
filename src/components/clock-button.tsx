"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ClockButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isClockedIn, setIsClockedIn] = useState(false);

  useEffect(() => {
    // Lógica para verificar se o usuário já está "em serviço".
    // Exemplo: poderia fazer uma chamada à API para verificar o status atual do usuário.
    setIsClockedIn(false); // Inicializa como não "em serviço".
  }, []);

  const handleClock = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!session || !session.user) {
      setError("Usuário não autenticado. Por favor, faça login.");
      setLoading(false);
      return;
    }

    const url = isClockedIn ? "/api/clockout" : "/api/clockin"; // Alterna entre entrada e saída
    const body = isClockedIn
      ? {
          userdiscordemail: session.user.email, // ID ou email único do usuário
          saida: new Date(),
        }
      : {
          userdiscordname: session.user.name, // Nome do usuário do GitHub
          userdiscordemail: session.user.email, // ID ou email único do usuário
        };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(isClockedIn ? "Serviço finalizado com sucesso:" : "Serviço iniciado com sucesso:", data);
        setSuccess(true);
        setIsClockedIn(!isClockedIn); // Alterna o estado do botão
      } else {
        const errorData = await response.json();
        console.error(isClockedIn ? "Erro ao finalizar serviço:" : "Erro ao iniciar serviço:", errorData.error);
        setError(errorData.error || "Erro ao processar o serviço");
      }
    } catch (err: any) {
      console.error("Erro inesperado:", err);
      setError("Erro inesperado ao processar o serviço.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleClock} className="flex flex-col items-center justify-center p-4 font-extrabold">
      <button
        type="submit"
        className={`p-2 rounded-xl transition-all ${
          isClockedIn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white`}
        disabled={loading}
      >
        {loading ? "Processando..." : isClockedIn ? "Finalizar serviço" : "Entrar em serviço"}
      </button>
      {success && <p className="text-green-500 mt-2">Operação realizada com sucesso!</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
