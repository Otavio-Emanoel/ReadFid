import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Zap, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Mergulhe no
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Universo{" "}
                </span>
                das HQs
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Descubra histórias incríveis, personagens únicos e aventuras épicas. Sua próxima obsessão está a apenas
                um clique de distância.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/explore">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explorar HQs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full bg-transparent"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <Image
                src="https://assets.gamearena.gg/wp-content/uploads/2023/10/30152822/Spider-Man-Meets-Invincible-1024x621.jpg"
                alt="Hero Comics"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Por que escolher nossa plataforma?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos a melhor experiência de leitura digital com recursos inovadores
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Leitura Rápida",
                description: "Interface otimizada para uma experiência de leitura fluida e responsiva",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Biblioteca Vasta",
                description: "Centenas de títulos disponíveis para todos os gostos e idades",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Comunidade",
                description: "Conecte-se com outros fãs e descubra novas recomendações",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Alta Qualidade",
                description: "Todas as HQs em alta resolução para a melhor experiência visual",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Pronto para começar sua jornada?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de leitores que já descobriram seu novo mundo favorito
            </p>
            <Link href="/explore">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
