import Image from "next/image";
async function loadSimuled() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return true;
}

export default async function Home() {
  await loadSimuled();
  return (
    <div className="flex h-screen bg-premios-bit bg-no-repeat bg-center bg-cover">
      <div className="bg-background-black w-11/12 md:w-10/12 h-5/6 md:h-5/6 m-auto flex flex-col md:flex-row justify-center items-center rounded-xl backdrop-blur-md">
        <div className="md:flex-1 md:w-1/2 h-full flex flex-col justify-end md:justify-center items-center">
          <h1 className="text-white text-2xl md:text-3xl my-3 md:text-center">
            Bienvenido a BITCOST
          </h1>
          <p className="text-white text-sm md:text-base text-center m-3 md:text-justify md:px-10">
            Estamos procesando su solicitud de ingreso, porfavor espere. No haga
            nada solo espere!!!
          </p>
          <div className="my-3">
            <Image
              src="/assets/getsitelogo.png"
              alt="img"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="md:flex-1 md:w-1/2 h-full flex justify-center items-center p-3">
          <img
            src="/assets/Premios-BIT.png"
            alt="img"
            className=" w-full md:w-11/12 h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
