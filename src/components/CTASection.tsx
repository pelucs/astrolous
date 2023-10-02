import { MapPin, MessageCircle, PieChart } from "lucide-react";

import illustration from '../assets/illustration.svg';
import Image from "next/image";

export default () => {
  return(
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col space-y-8">
        <span>
          <PieChart className="w-6 h-6 text-orange-500"/>
        </span>

        <strong className="text-4xl">
          O desenvolvimento é realizado por profissionais apaixonados.
        </strong>

        <p className="w-full max-w-2xl text-sm text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit 
          laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur 
          eligendi magni adipisci.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit 
          laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur 
          eligendi magni adipisci.
        </p>

        <div className="divide-y-[1px] divide-zinc-800">
          <div className="py-5 flex items-center gap-5">
            <span className="w-12 h-12 rounded-full centralized bg-violet-800/20">
              <MessageCircle className="w-6 h-6 text-violet-500"/>
            </span>
            
            <div>
              <h1 className="text-violet-500 font-bold">Chat online</h1>
              <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="py-5 flex items-center gap-5">
            <span className="w-12 h-12 rounded-full centralized bg-green-800/20">
              <MapPin className="w-6 h-6 text-green-500"/>
            </span>
            
            <div>
              <h1 className="text-green-500 font-bold">Localização em tempo real</h1>
              <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="centralized">
        <Image src={illustration} alt="Ilustração"/>
      </div>
    </div>
  );
}