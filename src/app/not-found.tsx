import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // Importamos el ícono de FontAwesome

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-9xl font-extrabold tracking-tight text-slate-900">
          404
        </h1>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Página no encontrada
          </h2>
          <p className="text-slate-500">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>

        <Link href="/">
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
            <FaArrowLeft className="h-4 w-4" />
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
