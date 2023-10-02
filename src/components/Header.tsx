import Link from "next/link";

export default () => {
  return(
    <div className="py-5 flex flex-col gap-5 md:gap-0 md:flex-row items-center md:justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-start gap-1">
          <span className="w-4 h-4 rounded-full bg-white"/>
          <span className="w-2 h-7 bg-violet-500"/>
        </div>

        <h1 className="text-3xl font-bold">Astrolous</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition-all">
            Home
          </Link>

          <Link href="/" className="hover:text-white transition-all">
            Soluções
          </Link>

          <Link href="/" className="hover:text-white transition-all">
            Reviews
          </Link>

          <Link href="/" className="flex items-center gap-2 text-white">
            Premium

            <span className="py-[2px] px-2 bg-zinc-700 text-yellow-500 font-bold text-[10px] rounded-full">
              Novo
            </span>
          </Link>
        </nav>

        <button className="px-4 py-1 rounded-full bg-violet-500"> 
          Começar
        </button>
      </div>
    </div>
  );
}