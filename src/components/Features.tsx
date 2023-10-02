import Image from 'next/image';
import { Sparkles, MoveRight } from 'lucide-react';

import clock from '../assets/clock.png';
import flute from '../assets/flute.png';
import hat from '../assets/hat.png';
import compass from '../assets/compass.png';
import Link from 'next/link';

export default () => {
  return(
    <div className="py-20 flex flex-col gap-10">
      <div className="flex flex-col space-y-8">
        <span>
          <Sparkles className="w-6 h-6 text-orange-500"/>
        </span>

        <strong className="text-4xl">
          Uma abordagem tecnológica para <br/> pagamentos e finanças
        </strong>

        <p className="w-full max-w-2xl text-sm text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur autem, fugit 
          laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla cupiditate nam consequatur 
          eligendi magni adipisci.
        </p>
      </div>

      <div className="mt-10 border border-zinc-700 rounded-2xl grid grid-cols-1 md:grid-cols-4
      divide-y-[1px] md:divide-y-0 md:divide-x-[1px] overflow-hidden divide-zinc-700">
        <div className="p-7 flex flex-col gap-4 group bg-zinc-600/50">
          <Image src={compass} alt="Illustration" className="w-12"/>

          <strong className="text-xl font-bol mt-5 group-hover:text-orange-500 transition-all">
            Lorem ipsum dolor
          </strong>

          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, veritatis mollitia amet.
          </p>

          <div className="flex items-center justify-between">
            <Link href="/" className="group-hover:text-orange-500 transition-all">Ler mais</Link>

            <MoveRight className="w-5 h-5 relative -left-3 opacity-0 group-hover:opacity-100 
            group-hover:left-0 transition-all text-orange-500"/>
          </div>
        </div>

        <div className="p-7 flex flex-col gap-4 group bg-zinc-600/50">
          <Image src={flute} alt="Illustration" className="w-12"/>

          <strong className="text-xl font-bol mt-5 group-hover:text-orange-500 transition-all">
            Lorem ipsum dolor
          </strong>

          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, veritatis mollitia amet.
          </p>

          <div className="flex items-center justify-between">
            <Link href="/" className="group-hover:text-orange-500 transition-all">Ler mais</Link>

            <MoveRight className="w-5 h-5 relative -left-3 opacity-0 group-hover:opacity-100 
            group-hover:left-0 transition-all text-orange-500"/>
          </div>
        </div>

        <div className="p-7 flex flex-col gap-4 group bg-zinc-600/50">
          <Image src={hat} alt="Illustration" className="w-12"/>

          <strong className="text-xl font-bol mt-5 group-hover:text-orange-500 transition-all">
            Lorem ipsum dolor
          </strong>

          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, veritatis mollitia amet.
          </p>

          <div className="flex items-center justify-between">
            <Link href="/" className="group-hover:text-orange-500 transition-all">Ler mais</Link>

            <MoveRight className="w-5 h-5 relative -left-3 opacity-0 group-hover:opacity-100 
            group-hover:left-0 transition-all text-orange-500"/>
          </div>
        </div>

        <div className="p-7 flex flex-col gap-4 group">
          <Image src={clock} alt="Illustration" className="w-12"/>

          <strong className="text-xl font-bol mt-5 group-hover:text-orange-500 transition-all">
            Lorem ipsum dolor
          </strong>

          <p className="text-zinc-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, veritatis mollitia amet.
          </p>

          <div className="flex items-center justify-between">
            <Link href="/" className="group-hover:text-orange-500 transition-all">Ler mais</Link>

            <MoveRight className="w-5 h-5 relative -left-3 opacity-0 group-hover:opacity-100 
            group-hover:left-0 transition-all text-orange-500"/>
          </div>
        </div>
      </div>
    </div>
  );
}