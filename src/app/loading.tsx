import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex h-screen bg-premios-bit bg-no-repeat bg-center bg-cover">
      <div className="bg-background-black w-11/12 md:w-10/12 h-max md:h-5/6 m-auto flex flex-col justify-evenly items-center rounded-xl backdrop-blur-md">
        <img
          src="/assets/getsitelogo.png"
          alt="img"
          className="md:w-80 2xl:w-1/4"
        />
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 md:w-1/2 h-full flex flex-col justify-end md:justify-center items-center">
            <h1 className="text-white text-xl md:text-2xl my-3 md:text-justify 2xl:text-5xl">
              Bienvenido a BITCOST
            </h1>
            <iframe
              src="https://lottie.host/embed/f307a772-7157-4502-9f14-870480fa7dce/ccpYXvhBo4.json"
              className="w-32 h-32 2xl:w-64 2xl:h-64"
            ></iframe>
            <p className="text-white text-xs md:text-sm 2xl:text-2xl text-center m-3 mx-6 md:text-justify 2xl:mx-40">
              Estamos procesando su solicitud de ingreso, porfavor espere. No
              haga nada solo espere!!!
            </p>
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
    </div>
  );
}

export default Loading;
