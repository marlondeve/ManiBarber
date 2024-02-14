import { useState } from "react";
//import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { InformationPricing } from "../information/InformationPricing";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="custom-block-subtitle">
              Elige tu combo favorito
            </span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
              Estos son nuestros combos
            </h2>
            <p className="mb-6 text-customGrayText">
              Selecciona el combo que deseas y disfruta de un servicio de
              excelente calidad.
            </p>
            {/* <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
              <input
                type="checkbox"
                className="peer appearance-none"
                checked={!isMonthly}
                onChange={handleChange}
              />
              <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
              <div className="flex absolute text-white text-sm font-bold">
                <div
                  className={
                    isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                  }
                >
                  Monthly
                </div>
                <div className={isMonthly && "text-gray-400"}>Yearly</div>
              </div>
            </label> */}
          </div>

          {/* CARDS */}
          <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
            {/* CARD */}
            {InformationPricing.map((item) => (
              <div key={item.id} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="bg-customDarkBg3 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="text-customGrayText mt-4 mb-6">
                    {item.description}
                  </p>
                  <span className="block text-3xl font-bold text-customPrimary mt-4 mb-6">
                    {item.price}
                  </span>
                  <ul className="text-left">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-white mb-3"
                      >
                        <CheckArrowIcon />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-customPrimary text-white font-bold rounded-lg px-6 py-3 mt-8 inline-block"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            ))}
            {/* FIN CARD */}
          </div>
          {/*  END CARDS */}
        </div>
      </div>
      {/* {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )} */}
    </section>
  );
};
