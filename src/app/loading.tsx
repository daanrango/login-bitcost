import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex h-screen bg-gray-700 opacity-80">
      <div className="bg-slate-800 w-9/12 h-5/6 m-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl">Bienvenido a Icaro</h1>
        <p className="text-white">
          Estamos procesando su solicitud de ingreso, porfavor espere.
        </p>
        <Image
          src="/assets/getsitelogo.png"
          alt="img"
          width={300}
          height={150}
        />
        <Image
          src="/assets/bussines-one.png"
          alt="img"
          width={100}
          height={100}
          className="w-2/6 h-2/5"
        />
      </div>
    </div>
  );
}

export default Loading;
