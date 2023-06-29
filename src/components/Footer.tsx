export default function Footer() {
  return (
    <div className="w-full p-8 bg-gray-800 flex flex-row flex-wrap gap-8 justify-around items-start">
      <div className="flex flex-row justify-start items-center gap-1">
        <span className="text-gray-500 text-small font-bold">Email:</span>
        <span className="text-gray-300 text-small font-bold">
          contact@newsense.com
        </span>
      </div>
      <div className="flex flex-row justify-start items-center gap-1">
        <span className="text-gray-500 text-small font-bold">Phone:</span>
        <span className="text-gray-300 text-small font-bold">
          1-800-555-5555
        </span>
      </div>
      <div className="flex flex-row justify-start items-center gap-1">
        <span className="text-gray-500 text-small font-bold">Twitter:</span>
        <span className="text-gray-300 text-small font-bold">@newsense</span>
      </div>
    </div>
  );
}
