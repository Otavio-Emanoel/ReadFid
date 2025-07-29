import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - em um projeto real, isso viria de uma API ou arquivo JSON
const comics = [
  {
    id: 1,
    title: "Ilíada",
    author: "Homero",
    genre: "Aventura",
    rating: 4.8,
    views: 19500,
    publishDate: "2023-12-01",
    cover: "https://segredosdomundo.r7.com/wp-content/uploads/2021/04/iliada-historia-e-curiosidades-sobre-o-poema-epico-1.jpg",
    description: "Uma épica jornada de heróis e deuses.",
  },
  {
    id: 2,
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    genre: "Ficção",
    rating: 4.6,
    views: 12350,
    publishDate: "2023-09-15",
    cover: "https://m.media-amazon.com/images/I/71OL9RU2tJL._UF1000,1000_QL80_.jpg",
    description: "Um retrato intenso da vida e das relações em um cortiço carioca.",
  },
  {
    id: 3,
    title: "O Mito de Cthulhu",
    author: "H.P. Lovecraft",
    genre: "Terror Cósmico",
    rating: 4.8,
    views: 17200,
    publishDate: "2023-10-20",
    cover: "https://m.media-amazon.com/images/I/81PBlT3PS1L._UF1000,1000_QL80_.jpg",
    description: "Mistérios ancestrais e horrores vindos das profundezas do universo.",
  },
  {
    id: 4,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Romance",
    rating: 4.6,
    views: 16000,
    publishDate: "2023-11-12",
    cover: "https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg",
    description: "A dúvida e o ciúme em uma das obras mais famosas da literatura brasileira.",
  },
  {
    id: 5,
    title: "Odisseia",
    author: "Homero",
    genre: "Aventura",
    rating: 4.8,
    views: 19500,
    publishDate: "2023-12-01",
    cover: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-odisseia-homero-1048714.jpg",
    description: "A saga de Ulisses em sua jornada de volta para casa após a Guerra de Troia.",
  },
  {
    id: 6,
    title: "Invencível",
    author: "Robert Kirkman",
    genre: "Super-heróis",
    rating: 5,
    views: 14800,
    publishDate: "2003-01-18",
    cover: "https://superamiches.com/wordpress/wp-content/uploads/2013/10/36postercolor.jpg",
    description: "Mark Grayson era uma criança normal vivendo em um mundo cheio de super-heróis. Mas, ao alcançar a adolescência, ganhou poderes fantásticos graças ao seu pai, o Omni-Man.",
  },
  {
    id: 7,
    title: "A Divina Comédia",
    author: "Dante Alighieri",
    genre: "Clássico",
    rating: 4.9,
    views: 21000,
    publishDate: "2023-08-10",
    cover: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-divina-comedia-dante-alighieri-jose-pedro-xavier-pinheiro-1048562.jpg",
    description: "Uma jornada épica pelos reinos do Inferno, Purgatório e Paraíso.",
  },
  {
    id: 8,
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    genre: "Realismo",
    rating: 4.7,
    views: 18500,
    publishDate: "2023-09-05",
    cover: "https://m.media-amazon.com/images/I/61hI7QLrTkL.jpg",
    description: "Um retrato intenso da vida e das relações em um cortiço carioca.",
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Explore Nossas
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> HQs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra histórias incríveis de diversos gêneros e autores talentosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comics.map((comic) => (
            <Card
              key={comic.id}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={comic.cover || "/placeholder.svg"}
                  alt={comic.title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">{comic.genre}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-semibold">{comic.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {comic.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">por {comic.author}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{comic.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(comic.publishDate).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{comic.views.toLocaleString()}</span>
                  </div>
                </div>

                <Link href={`/comic/${comic.id}`}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold">
                    Ver Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
