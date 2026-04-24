import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to CronoMesh
          </h1>
          <p className="mt-3 text-2xl text-gray-600 dark:text-gray-300">
            Your all-in-one schedule management system.
          </p>
        </div>
      </main>
    </div>
  );
}
