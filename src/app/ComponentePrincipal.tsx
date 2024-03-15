/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";

const ComponentePrincipal = () => {
  const [abriuSugestoes, setAbriuSugestoes] = useState(false);
  const [abriuConvite, setAbriuConvite] = useState(false);
  const [abrindoConvite, setAbrindoConvite] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAbrirConvite = () => {
    if (abriuConvite) {
      return;
    }

    setAbrindoConvite(true);

    setTimeout(() => {
      setAbrindoConvite(false);
      setAbriuConvite(true);
    }, 1000);

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleSugestoes = () => {
    setAbriuSugestoes(!abriuSugestoes);
  };

  return (
    <div className="flex flex-col">
      <div className="relative min-w-60">
        <video
          ref={videoRef}
          autoPlay
          loop
          className={`transition-opacity duration-1000 ${abriuConvite ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/convite_marcella_animado.mp4" type="video/mp4" />
        </video>

        <div
          onClick={handleAbrirConvite}
          className={`z-50 absolute top-40 w-full text-center font-black cursor-pointer
              transition-opacity duration-1000 ${abrindoConvite || abriuConvite ? "opacity-0" : "opacity-100"}`}
        >
          <img onClick={handleAbrirConvite} className="m-auto" src="/icone_carta.svg" alt="" width={150} height={150} />
          Abrir convite!
        </div>

        <div
          className={`z-30 absolute top-36 w-full text-center font-black cursor-pointer 
              transition-opacity duration-1000 ${abrindoConvite ? "opacity-100" : "opacity-0"}`}
        >
          <img className="m-auto" src="/icone_carta_aberta.svg" alt="" width={150} height={150} />
        </div>

        {abriuSugestoes && (
          <div onClick={handleSugestoes}>
            <img className="z-40 absolute top-0" src="/sugestoes.png" alt="" width={480} height={672} />
            <div className="z-50 absolute bottom-14 w-full text-center font-black cursor-pointer">
              <img className="m-auto" src="iconevoltar.svg" alt="" width={50} />
              voltar
            </div>
          </div>
        )}
      </div>

      <div
        className={`mt-2 flex justify-between h-28 gap-4
          transition-opacity duration-1000 ${abriuConvite ? "opacity-100" : "opacity-0"}`}
      >
        <a
          href="https://wa.me/5567992044898?text=Oiiii%2C%20passando%20para%20confirmar%20presen%C3%A7a%20na%20festa%20da%20Marcella%21"
          className="flex-1 flex flex-col border justify-center items-center text-center"
        >
          <img src="/iconecoracao.svg" height={50} width={50} alt="" />
          Confirmar presença!
        </a>
        <a
          href="https://maps.app.goo.gl/dxoi69qp5qvqP2ym6"
          className="flex-1 flex flex-col border justify-center items-center text-center"
        >
          <img src="/iconelocal.svg" width={50} height={50} alt="" />
          Local
        </a>
        <div
          onClick={handleSugestoes}
          className="flex-1 flex flex-col border justify-center items-center text-center cursor-pointer"
        >
          <img src="/iconepresente.png" height={50} width={50} alt="" />
          Sugestão de Presentes
        </div>
      </div>
    </div>
  );
};

export default ComponentePrincipal;
