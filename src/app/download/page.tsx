export default function BetaVersionDownload() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full">
      <div className="text-4xl font-bold">We are in a limited beta</div>
      <div className="flex flex-row items-center justify-center">
        <input
          className="w-1/2 p-2 m-2 border border-gray-400 rounded-md"
          type="email"
          placeholder="Enter your email"
        />
        <button className="w-1/2 p-2 m-2 border border-gray-400 hover:bg-gray-100 rounded-md">
          Join the waitlist
        </button>
      </div>
    </div>
  );
}
