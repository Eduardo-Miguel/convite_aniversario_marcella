/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const ComponentePrincipal = () => {
  const [sugestoes, setSugestoes] = useState(false);

  const handleSugestoes = () => {
    setSugestoes(!sugestoes);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <video src="convite_marcella.mp4"></video>
        {sugestoes && <img className="z-50 absolute top-0" src="/sugestoes.png" alt="" width={480} height={672} />}
      </div>
      <div className="mt-2 flex justify-between h-40 gap-4">
        <a
          href="https://web.whatsapp.com/send?phone=5567992044898&text=Oiiii%2C%20passando%20para%20confirmar%20presen%C3%A7a%20na%20festa%20da%20Marcella%21"
          className="flex-1 flex flex-col border justify-center items-center text-center"
        >
          <img src="/iconecoracao.svg" height={100} width={100} alt="" />
          Confirmar presença!
        </a>
        <a
          href="https://maps.app.goo.gl/dxoi69qp5qvqP2ym6"
          className="flex-1 flex flex-col border justify-center items-center text-center"
        >
          <img src="/iconelocal.svg" width={100} height={100} alt="" />
          Local
        </a>
        <div onClick={handleSugestoes} className="flex-1 flex flex-col border justify-center items-center text-center">
          <img src="/iconepresente.png" height={100} width={100} alt="" />
          Sugestão de Presentes
        </div>
      </div>
    </div>
  );
};

export default ComponentePrincipal;