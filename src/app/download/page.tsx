"use client";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

export default function BetaVersionDownload() {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [emailFieldHasError, setEmailFieldHasError] = useState(false);
  const [useCaseFieldHasError, setUseCaseFieldHasError] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const joinWaitlist = async (email: string, useCase: string) => {
    if (!email) {
      setEmailFieldHasError(true);
      return;
    }
    if (!useCase) {
      setUseCaseFieldHasError(true);
      return;
    }
    if (!validateEmail(email)) {
      setEmailFieldHasError(true);
      return;
    }
    setEmailFieldHasError(false);
    setUseCaseFieldHasError(false);
    const result = await fetch("/joinWaitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, reason: useCase }),
    });
    if (result.status === 200) {
      setMessage("Вітаємо! Ви успішно приєдналися до списку очікування.");
    }
    if (result.status === 409) {
      setMessage("Ви вже приєдналися до списку очікування.");
    }
    if (result.status === 400) {
      setMessage("Ви ввели некоректний email або ви вказали причину.");
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <div className="text-4xl font-bold">Ми в рамках бета-тестування</div>
      <div className="text-sm w-1/2">
        Ми вже майже готові до публічного запуску, а поки що ви можете
        приєднатися до списку очікування - ми повідомимо вас, як тільки ви
        отримаєте доступ до нашого сервісу.
      </div>
      <div className="flex flex-col gap-0 items-center justify-center">
        <input
          className={`w-full p-2 m-2 border rounded-md ${
            useCaseFieldHasError ? "border-red-400" : "border-gray-400"
          }`}
          type="text"
          placeholder="Як ви плануєте використовувати наш сервіс?"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
        />
        <div className="w-full m-2 gap-4 flex flex-row items-center justify-center">
          <input
            className={`w-1/2 p-2 border rounded-md ${
              emailFieldHasError ? "border-red-400" : "border-gray-400"
            }`}
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="flex flex-row items-center gap-1 w-1/2 p-2 border border-gray-400 whitespace-nowrap min-w-fit hover:bg-gray-100 rounded-md"
            onClick={() => joinWaitlist(email, useCase)}
          >
            Приєднатися до списку очікування <MdNavigateNext />
          </button>
        </div>
        {message && (
          <div className="text-sm text-center text-gray-500">{message}</div>
        )}
      </div>
    </div>
  );
}
