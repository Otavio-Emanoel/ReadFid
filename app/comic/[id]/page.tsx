import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Eye, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Mock data - mesmo do explore
const comics = [
  {
    id: 1,
    title: "Ilíada",
    author: "Homero",
    genre: "Aventura",
    rating: 4.8,
    views: 19500,
    publishDate: "2023-12-01",
    pages: 400,
    cover: "https://segredosdomundo.r7.com/wp-content/uploads/2021/04/iliada-historia-e-curiosidades-sobre-o-poema-epico-1.jpg",
    description: "Uma épica jornada de heróis e deuses.",
    synopsis: "A Ilíada narra os eventos da Guerra de Troia, onde heróis lendários como Aquiles e Heitor lutam por glória e honra. A história é repleta de batalhas épicas, intrigas divinas e o destino trágico dos personagens. Homero nos transporta para um mundo onde a bravura e a tragédia se entrelaçam, revelando a complexidade da natureza humana diante da guerra.",
  },
  {
    id: 2,
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    genre: "Ficção",
    rating: 4.6,
    views: 12350,
    publishDate: "2023-09-15",
    pages: 320,
    cover: "https://m.media-amazon.com/images/I/71OL9RU2tJL._UF1000,1000_QL80_.jpg",
    description: "Um retrato intenso da vida e das relações em um cortiço carioca.",
    synopsis: "Memórias Póstumas de Brás Cubas é uma obra-prima do realismo brasileiro, onde o protagonista, Brás Cubas, narra sua vida após a morte. Com um olhar irônico e crítico, ele explora as hipocrisias da sociedade da época, questionando valores e convenções. Através de uma narrativa inovadora e provocativa, Machado de Assis nos convida a refletir sobre a condição humana e as armadilhas da ambição e do poder.",
  },
  {
    id: 3,
    title: "O Mito de Cthulhu",
    author: "H.P. Lovecraft",
    genre: "Terror Cósmico",
    rating: 4.8,
    views: 17200,
    publishDate: "2023-10-20",
    pages: 320,
    cover: "https://m.media-amazon.com/images/I/81PBlT3PS1L._UF1000,1000_QL80_.jpg",
    description: "Mistérios ancestrais e horrores vindos das profundezas do universo.",
    synopsis: "O Mito de Cthulhu reúne contos que exploram o terror cósmico, onde entidades ancestrais desafiam a sanidade humana e a insignificância do homem diante do universo. Lovecraft cria um universo sombrio e fascinante, repleto de mistérios e horrores indescritíveis.",
  },
  {
    id: 4,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Romance",
    rating: 4.6,
    views: 16000,
    publishDate: "2023-11-12",
    pages: 256,
    cover: "https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg",
    description: "A dúvida e o ciúme em uma das obras mais famosas da literatura brasileira.",
    synopsis: "Dom Casmurro narra a história de Bentinho e Capitu, marcada por dúvidas, ciúmes e memórias. Machado de Assis constrói um romance psicológico que explora as ambiguidades do amor e da confiança.",
  },
  {
    id: 5,
    title: "Odisseia",
    author: "Homero",
    genre: "Aventura",
    rating: 4.8,
    views: 19500,
    publishDate: "2023-12-01",
    pages: 500,
    cover: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-odisseia-homero-1048714.jpg",
    description: "A saga de Ulisses em sua jornada de volta para casa após a Guerra de Troia.",
    synopsis: "A Odisseia acompanha Ulisses em sua longa viagem de retorno a Ítaca, enfrentando monstros, deuses e desafios. Uma das maiores epopeias da literatura mundial, repleta de aventura e superação.",
  },
  {
    id: 6,
    title: "Invencível",
    author: "Robert Kirkman",
    genre: "Super-heróis",
    rating: 5,
    views: 14800,
    publishDate: "2003-01-18",
    pages: 144,
    cover: "https://superamiches.com/wordpress/wp-content/uploads/2013/10/36postercolor.jpg",
    description: "Mark Grayson era uma criança normal vivendo em um mundo cheio de super-heróis. Mas, ao alcançar a adolescência, ganhou poderes fantásticos graças ao seu pai, o Omni-Man.",
    synopsis: "Invencível conta a história de Mark Grayson, um jovem que descobre seus poderes e precisa lidar com responsabilidades e desafios de ser um super-herói, enquanto enfrenta ameaças cósmicas e dilemas familiares.",
  },
  {
    id: 7,
    title: "A Divina Comédia",
    author: "Dante Alighieri",
    genre: "Clássico",
    rating: 4.9,
    views: 21000,
    publishDate: "2023-08-10",
    pages: 432,
    cover: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-divina-comedia-dante-alighieri-jose-pedro-xavier-pinheiro-1048562.jpg",
    description: "Uma jornada épica pelos reinos do Inferno, Purgatório e Paraíso.",
    synopsis: "A Divina Comédia narra a viagem de Dante pelos três reinos da vida após a morte, guiado por Virgílio e Beatriz. Uma obra fundamental da literatura mundial, cheia de simbolismos e reflexões sobre a existência.",
  },
  {
    id: 8,
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    genre: "Realismo",
    rating: 4.7,
    views: 18500,
    publishDate: "2023-09-05",
    pages: 288,
    cover: "https://m.media-amazon.com/images/I/61hI7QLrTkL.jpg",
    description: "Um retrato intenso da vida e das relações em um cortiço carioca.",
    synopsis: "O Cortiço retrata o cotidiano de moradores de um cortiço no Rio de Janeiro, abordando temas como desigualdade, ambição e relações humanas. Uma obra marcante do realismo brasileiro.",
  },
]

interface ComicPageProps {
  params: {
    id: string
  }
}

export default function ComicPage({ params }: ComicPageProps) {
  const comic = comics.find((c) => c.id === Number.parseInt(params.id))

  if (!comic) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/explore"
          className="inline-flex items-center text-white hover:text-pink-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Explorar
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Cover Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30" />
            <Image
              src={comic.cover || "/placeholder.svg"}
              alt={comic.title}
              width={400}
              height={600}
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Comic Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white mb-4">{comic.genre}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{comic.title}</h1>
              <p className="text-xl text-gray-300 mb-6">por {comic.author}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-2xl font-bold text-white">{comic.rating}</p>
                  <p className="text-sm text-gray-400">Avaliação</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">{comic.views.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Visualizações</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">{comic.pages}</p>
                  <p className="text-sm text-gray-400">Páginas</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-lg font-bold text-white">
                    {new Date(comic.publishDate).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                    })}
                  </p>
                  <p className="text-sm text-gray-400">Publicação</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sinopse</h2>
              <p className="text-gray-300 leading-relaxed">{comic.synopsis}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/read/${comic.id}`} className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 text-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Começar a Ler
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Adicionar aos Favoritos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
