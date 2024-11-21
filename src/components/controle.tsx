"use client";

import { useEffect, useState } from "react";

interface Registro {
  entrada: string;
  saida: string;
  total: string;
}

interface UserData {
  userdiscordname: string;
  registros: Registro[];
}

export default function Controle() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/getUser");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Erro ao buscar usuários");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const selectedUserData = users.find(
    (user) => user.userdiscordname === selectedUser
  );

  const formatarDia = (hora: string): string => {
    if (!hora) return "Data não registrada";

    const parsedDate = new Date(hora);
    if (isNaN(parsedDate.getTime())) {
      console.warn(`Formato de horário inválido: ${hora}`);
      return "Data inválida";
    }

    return parsedDate.toLocaleDateString();
  };

  const formatarHora = (hora: string): string => {
    if (!hora) return "Horário não registrado";

    const parsedDate = new Date(hora);
    if (isNaN(parsedDate.getTime())) {
      console.warn(`Formato de horário inválido: ${hora}`);
      return "Horário inválido";
    }

    return parsedDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white text-black dark:bg-neutral-800 dark:text-white flex flex-col md:h-fit">
      <div className="flex flex-col gap-6 items-center p-6 md:p-10">
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Controle Administrativo
        </h1>
        <select
          className="appearance-none bg-gray-500 dark:bg-neutral-300 dark:text-black p-2 rounded-xl w-full max-w-md"
          onChange={handleUserChange}
          value={selectedUser}
        >
          <option value="">Selecione o funcionário</option>
          {users.map((user) => (
            <option key={user.userdiscordname} value={user.userdiscordname}>
              {user.userdiscordname}
            </option>
          ))}
        </select>
      </div>

      <div className="p-4">
        {selectedUserData ? (
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-4">
              {/* Cabeçalho */}
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 bg-gray-300 dark:bg-gray-700 text-center font-bold">
                <div className="p-2 border border-gray-400 dark:border-gray-600">
                  Dia
                </div>
                <div className="p-2 border border-gray-400 dark:border-gray-600">
                  Entrada
                </div>
                <div className="p-2 border border-gray-400 dark:border-gray-600">
                  Saída
                </div>
                <div className="p-2 border border-gray-400 dark:border-gray-600">
                  Total
                </div>
              </div>

              {/* Registros */}
              <ul className="flex flex-col">
                {selectedUserData.registros.map((registro, index) => (
                  <li
                    key={index}
                    className={`grid grid-cols-4 sm:grid-cols-4 text-center odd:bg-gray-100 even:bg-white dark:odd:bg-gray-700 dark:even:bg-gray-800 gap-2`}
                  >
                    <div className="p-2 border border-gray-400 dark:border-gray-600">
                      {formatarDia(registro.entrada)}
                    </div>
                    <div className="p-2 border border-gray-400 dark:border-gray-600">
                      {formatarHora(registro.entrada)}
                    </div>
                    <div className="p-2 border border-gray-400 dark:border-gray-600">
                      {registro.saida ? formatarHora(registro.saida) : "N/A"}
                    </div>
                    <div className="p-2 border border-gray-400 dark:border-gray-600">
                      {registro.total || "N/A"}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Selecione um funcionário.
          </p>
        )}
      </div>
    </div>
  );
}
