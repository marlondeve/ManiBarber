import React, { useState } from "react";
import { InvitationModal } from "./InvitationModal";
//import dashboard from "../assets/images/dashboard.jpg";

function CurrentMonth() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="current-month">
      {month} {year}
    </div>
  );
}

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <div className="text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
          La barbería que cambia vino a cambiar el juego
        </div>

        <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4">
          <span className="inline md:hidden">¡Bienvenido a Mani!</span>
          <span className="hidden md:inline">¡Bienvenido a Mani!</span>
        </div>
        {/* <div className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24">
          Por tu estilo
        </div> */}

        <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
          Agenda tu cita con Mani Barber hoy mismo y déjanos transformar tu look desde la comodidad de tu hogar.
        </div>

        <form
          action="../../index.php"
          method="post"
          className="flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center"
        >
          <select
            id="servicio"
            name="servicio"
            className="ps-2 w-full h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
          >
            <option value="CO">Solo Corte</option>
            <option value="US">Solo Barba</option>
            <option value="CA">Corte y Barba</option>
            <option value="FR">Corte y Ceja</option>
            <option value="DE">Corte, Barba y Ceja</option>
          </select>
          <label
            htmlFor="servicio"
            className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tipo de servicio
          </label>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="name"
              name="nombre"
              id="nombre"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Nombres y apellidos"
              required
            />
            {/* <label
              htmlFor="nombre"
              className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label> */}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="numero"
              id="numero"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Numero de telefono"
              required
            />
            {/* <label
              htmlFor="numero"
              className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Número
            </label> */}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>

                <input
                  id="fecha"
                  name="fecha"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  placeholder="Seleccione una fecha"
                  value={new Date().toISOString().split("T")[0]}
                />
              </div>
              <label
                htmlFor="fecha"
                className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Día
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="hora"
                name="hora"
                className="ps-2 w-full h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
              >
                <option value="8AM">8:00 AM</option>
                <option value="US">9:30 AM</option>
                <option value="CA">11:00 AM</option>
                <option value="FR">2:00 PM</option>
                <option value="DE">3:30 PM</option>
                <option value="DE">5:00 PM</option>
                <option value="DE">6:30 PM</option>
              </select>
              <label
                htmlFor="hora"
                className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Hora
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <button
              type="submit"
              className="w-64 sm:w-full h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
            >
              Agendar
            </button>
          </div>
        </form>

        {/* <div className="relative w-screen flex justify-center ">
          <img
            src={dashboard}
            alt="123"
            className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
          />
        </div> */}

        {/* <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div> */}
      </div>
      {/* MODAL */}
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
