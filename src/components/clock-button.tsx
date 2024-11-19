"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function ClockButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleClockIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!session || !session.user) {
      setError("Usuário não autenticado. Por favor, faça login.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/clockin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userdiscordname: session.user.name, // Nome do usuário do GitHub
          userdiscordemail: session.user.email, // ID ou email único do usuário
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Ponto registrado com sucesso:", data);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Erro ao registrar ponto:", errorData.error);
        setError(errorData.error || "Erro ao registrar ponto");
      }
    } catch (err: any) {
      console.error("Erro ao registrar ponto:", err);
      setError("Erro inesperado ao registrar ponto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleClockIn} className="flex flex-col items-center justify-center p-4">
      <button
        type="submit"
        className="p-2 bg-zinc-500 text-white rounded hover:bg-zinc-800 transition-all"
        disabled={loading}
      >
        {loading ? "Registrando..." : "Entrar em serviço"}
      </button>
      {success && <p className="text-green-500 mt-2">Ponto registrado com sucesso!</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}