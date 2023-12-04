import Image from "next/image";
async function loadSimuled() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return true;
}

export default async function Home() {
  await loadSimuled();
  return (
    <>
      <div className="bg-background-black flex flex-row justify-center items-center h-screen ">
        <div className="text-xl">
          Bienvenido al mejor sistema del mundo BIT COST
        </div>
      </div>
    </>
  );
}
