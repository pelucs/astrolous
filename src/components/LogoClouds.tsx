import Image from "next/image";

import microsoft from '../assets/microsoft.svg';
import googleCloud from '../assets/google-cloud.svg';
import google from '../assets/google.svg';
import netflix from '../assets/netflix.svg';
import airbnb from '../assets/airbnb.svg';
import ge from '../assets/ge.svg';
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default () => {
  return(
    <div className="py-20 flex flex-col items-center gap-10">
      <div className=" flex items-center justify-between flex-wrap gap-10">
        <Image src={google} alt="Logo" className="w-[130px] grayscale hover:grayscale-0 transition-all"/>
        <Image src={googleCloud} alt="Logo" className=" grayscale hover:grayscale-0 transition-all"/>
        <Image src={ge} alt="Logo" className=" grayscale hover:grayscale-0 transition-all"/>
        <Image src={netflix} alt="Logo" className="w-[130px] grayscale hover:grayscale-0 transition-all"/>
        <Image src={microsoft} alt="Logo" className="w-[130px] grayscale hover:grayscale-0 transition-all"/>
        <Image src={airbnb} alt="Logo" className="w-[130px] grayscale hover:grayscale-0 transition-all"/>
      </div>

      <div className="w-fit px-4 py-2 text-sm rounded-full bg-zinc-800/80 border border-zinc-700 
      centralized flex-col md:flex-row gap-2">
        <p className="text-center text-zinc-400">
          Mais de 2.500 empresas usam nossas ferramentas para melhorar seus negócios.
        </p>

        <Link href="/" className="text-violet-500 flex items-center gap-2">
          Ler mais <MoveRight className="w-4 h-4"/>
        </Link>
      </div>
    </div>
  );
}