export default () => {
  return(
    <div className="mt-24 flex flex-col items-center text-center space-y-10">
      <div className="flex flex-col gap-6">
        <strong className="text-4xl md:text-6xl">
          Moldando um mundo <br/> com reimaginação.
        </strong>

        <p className="w-full max-w-3xl text-sm text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error 
          totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="px-4 py-2 rounded-full bg-violet-500">
          Começar
        </button>

        <button className="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700">
          Saiba mais
        </button>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-3 py-5 border-y border-zinc-700">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            O preço mais baixo
          </h1>

          <p className="text-sm text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt saepe eveniet obcaecati.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            O mais rápido do mercado
          </h1>

          <p className="text-sm text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt saepe eveniet obcaecati.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            O mais amado
          </h1>

          <p className="text-sm text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt saepe eveniet obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
}
