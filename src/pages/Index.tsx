import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Icon name="Music" size={28} className="text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              ROCK EMPIRE
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#music" className="text-white hover:text-orange-500 transition-colors font-medium">
              Музыка
            </a>
            <a href="#videos" className="text-white hover:text-orange-500 transition-colors font-medium">
              Видео
            </a>
            <a href="#contact" className="text-white hover:text-orange-500 transition-colors font-medium">
              Контакты
            </a>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Слушать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(/img/d5200f58-f154-4117-8cf1-4a1f48f582b2.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none font-oswald">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              АГРЕССИВНЫЙ
            </span>
            <br />
            <span className="text-white">РОК</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Энергичная музыка для тех, кто живет на полную мощность. 
            Чистый адреналин в каждой ноте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Послушать треки
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Video" size={20} className="mr-2" />
              Смотреть клипы
            </Button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-orange-500" />
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                МУЗЫКА
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Коллекция треков, которые зажигают сцену и взрывают сознание
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Огненная Буря", duration: "3:45", plays: "15.2K" },
              { title: "Металлический Гром", duration: "4:12", plays: "22.1K" },
              { title: "Адреналин", duration: "3:28", plays: "18.7K" },
              { title: "Битва Титанов", duration: "5:03", plays: "31.4K" },
              { title: "Черная Молния", duration: "3:51", plays: "12.8K" },
              { title: "Восстание", duration: "4:35", plays: "25.6K" }
            ].map((track, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon name="Music" size={24} className="text-white" />
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0"
                    >
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span>{track.duration}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Headphones" size={14} />
                      {track.plays}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gradient-to-l from-purple-900 via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                ВИДЕО
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Визуальная энергия наших выступлений и клипов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Video */}
            <Card className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/img/fa555029-83fe-4b11-ba57-bd9dc1266073.jpg" 
                    alt="Featured Concert" 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-orange-500/90 hover:bg-orange-600 text-white rounded-full w-16 h-16 p-0"
                    >
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Огненная Буря - Live</h3>
                    <p className="text-gray-300">Концерт в Москве 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Металлический Гром", views: "45K", duration: "4:12" },
              { title: "Адреналин - Клип", views: "67K", duration: "3:28" },
              { title: "Behind the Scenes", views: "23K", duration: "8:15" },
              { title: "Битва Титанов Live", views: "89K", duration: "5:03" },
              { title: "Studio Sessions", views: "34K", duration: "12:45" },
              { title: "Восстание - Клип", views: "78K", duration: "4:35" }
            ].map((video, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                      <Icon name="Video" size={24} className="text-white" />
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute inset-0 m-auto bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0"
                    >
                      <Icon name="Play" size={16} />
                    </Button>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{video.title}</h4>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span>{video.duration}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      {video.views}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              ПРИСОЕДИНЯЙСЯ
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Будь частью рок-движения. Следи за новыми треками и концертами.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full text-lg"
            >
              <Icon name="Music" size={20} className="mr-2" />
              Подписаться на обновления
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: "Youtube", label: "YouTube" },
              { icon: "Instagram", label: "Instagram" },
              { icon: "Music", label: "Spotify" },
              { icon: "Headphones", label: "Apple Music" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-orange-500 transition-colors p-3"
              >
                <Icon name={social.icon as any} size={24} />
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2024 Rock Empire. Вся энергия защищена законом.
          </p>
        </div>
      </footer>
    </div>
  );
}