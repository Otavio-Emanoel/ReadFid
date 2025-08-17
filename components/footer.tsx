import { BookOpen, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ReadFid</span>
            </div>
            <p className="text-gray-400">
              Sua plataforma favorita para descobrir e ler as melhores histórias em quadrinhos.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-pink-400 transition-colors">
                Início
              </a>
              <a href="/explore" className="block text-gray-400 hover:text-pink-400 transition-colors">
                Explorar HQs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Créditos</h3>
            <div className="space-y-2 text-gray-400">
              <p>Editora Kaiju</p>
              <p>Professor Fidelis</p>
              <p>Desenvolvedor Otavio</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-pink-500" /> para os amantes de HQs
          </p>
        </div>
      </div>
    </footer>
  )
}
