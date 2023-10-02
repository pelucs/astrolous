import Image from "next/image";

import img1 from '../assets/avatar.webp';
import img2 from '../assets/avatar-1.webp';
import img3 from '../assets/avatar-2.webp';
import img4 from '../assets/avatar-3.webp';
import img5 from '../assets/avatar-4.webp';

export default () => {
  return(
    <div className="py-20 flex flex-col items-center text-center gap-5">
      <div className="mt-3 flex -space-x-2">
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={img1} alt=""/>
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={img2} alt=""/>
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={img3} alt=""/>
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={img4} alt=""/>
        <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={img5} alt=""/>
      </div>
      
      <div className="">
        <h1 className="text-4xl font-bold leading-loose">Começe agora mesmo</h1>
        <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit, enim amet nemo aspernatur quos architecto tempora.</p>
      </div>

      <div className="flex items-center gap-5">
        <button className="px-4 py-2 rounded-full bg-violet-500">
          Começar
        </button>

        <button className="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700">
          Saiba mais
        </button>
      </div>
    </div>
  );
}