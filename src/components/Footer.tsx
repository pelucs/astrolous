import { Facebook, Github, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default () => {
  return(
    <div className="py-10 flex flex-col md:flex-row items-center justify-center gap-20 text-sm text-zinc-400">
      <div className="grid grid-cols-2 items-center gap-10">
        <ol className="flex flex-col items-center gap-5">
          <Link href="/">Início</Link>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Guia</Link>
          <Link href="/">Blocos</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Termos de serviços</Link>
        </ol>

        <ol className="flex flex-col items-center gap-5">
          <Link href="/" className="flex items-center gap-2"><Instagram className="w-4 h-4"/> Instagram</Link>
          <Link href="/" className="flex items-center gap-2"><Facebook className="w-4 h-4"/> Facebook</Link>
          <Link href="/" className="flex items-center gap-2"><Twitter className="w-4 h-4"/> Pinterest</Link>
          <Link href="/" className="flex items-center gap-2"><Youtube className="w-4 h-4"/> Youtube</Link>
          <Link href="/" className="flex items-center gap-2"><Github className="w-4 h-4"/> Github</Link>
          <Link href="/" className="flex items-center gap-2"><Mail className="w-4 h-4"/> Email</Link>
        </ol>
      </div>

      <div className="space-y-5 flex flex-col items-center md:items-start">
        <p>Obrigado por visitar nosso perfil! <br/></p>
        <p>&copy;Astrolous</p>

        <div className="flex items-center gap-10 font-semibold text-white">
          <Link href="">Termos e usos</Link>
          <Link href="">Política de privacidade</Link>          
        </div>

        <h1 className="block underline">Desenvolvido por <Link href="https://pelucs.com">pelucs</Link></h1>        
      </div>
    </div>
  );
}
