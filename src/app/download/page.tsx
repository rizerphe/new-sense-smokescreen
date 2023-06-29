export default function BetaVersionDownload() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <div className="text-4xl font-bold">Ми в рамках бета-тестування</div>
      <div className="flex flex-row items-center justify-center">
        <input
          className="w-1/2 p-2 m-2 border border-gray-400 rounded-md"
          type="email"
          placeholder="Введіть свій email"
        />
        <button className="w-1/2 p-2 m-2 border border-gray-400 whitespace-nowrap min-w-fit hover:bg-gray-100 rounded-md">
          Приєднатися до списку очікування
        </button>
      </div>
    </div>
  );
}
