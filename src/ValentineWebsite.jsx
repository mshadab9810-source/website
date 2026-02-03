import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, Gift, Mail } from 'lucide-react';

const ValentineWebsite = () => {
  const [stage, setStage] = useState('hero'); // hero, confirmed, main
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noButtonText, setNoButtonText] = useState('No 💔');
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [revealedSurprises, setRevealedSurprises] = useState(new Set());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const noButtonMessages = [
    'Are you sure? 🥺',
    'Really? 😢',
    'Think again! 💭',
    'Please? 🙏',
    'Last chance! ⏰',
    'You know you want to! 😊'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoButtonPos({ x: newX, y: newY });
    
    const randomMsg = noButtonMessages[Math.floor(Math.random() * noButtonMessages.length)];
    setNoButtonText(randomMsg);
  };

  const dateIdeas = [
    { emoji: '🌙', title: 'Stargazing Night', desc: 'Blankets, warm drinks, and counting stars together' },
    { emoji: '🍿', title: 'Movie Marathon', desc: 'Your favorite films and endless snacks' },
    { emoji: '🍝', title: 'Cooking Together', desc: 'Making a mess and memories in the kitchen' },
    { emoji: '🎨', title: 'Art & Wine Night', desc: 'Painting our masterpieces (or disasters)' },
    { emoji: '🌅', title: 'Sunrise Picnic', desc: 'Coffee and pastries as the world wakes up' },
    { emoji: '🎮', title: 'Game Night', desc: 'Competitive cuddles and playful rivalry' }
  ];

  const memories = [
    { id: 1, caption: 'Our first adventure', image: 'PASTE_YOUR_IMAGE_URL_HERE' },
    { id: 2, caption: 'That unforgettable sunset', image: 'PASTE_YOUR_IMAGE_URL_HERE' },
    { id: 3, caption: 'Silly moments together', image: 'PASTE_YOUR_IMAGE_URL_HERE' },
    { id: 4, caption: 'Your beautiful smile', image: 'PASTE_YOUR_IMAGE_URL_HERE' },
    { id: 5, caption: 'Our cozy evenings', image: 'PASTE_YOUR_IMAGE_URL_HERE' },
    { id: 6, caption: 'Making memories', image: 'PASTE_YOUR_IMAGE_URL_HERE' }
  ];

  const surprises = [
    { id: 1, icon: '💝', message: 'You make every day brighter just by existing' },
    { id: 2, icon: '✨', message: 'Your laugh is my favorite sound in the world' },
    { id: 3, icon: '🌸', message: 'I fall for you more deeply every single day' },
    { id: 4, icon: '💫', message: 'You are my safe place and my adventure' },
    { id: 5, icon: '🎀', message: 'Thank you for being perfectly imperfect with me' },
    { id: 6, icon: '🌺', message: 'Forever grateful the universe brought us together' }
  ];

  const toggleSurprise = (id) => {
    const newRevealed = new Set(revealedSurprises);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealedSurprises(newRevealed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-x-hidden">
      {/* Animated cursor trail */}
      <div 
        className="pointer-events-none fixed w-8 h-8 transition-all duration-300 ease-out z-50"
        style={{ 
          left: mousePos.x - 16, 
          top: mousePos.y - 16,
          opacity: 0.6
        }}
      >
        <Heart className="w-full h-full text-pink-400 animate-pulse" fill="currentColor" />
      </div>

      {/* Floating hearts background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-15 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${50 + Math.random() * 30}s`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
          >
            {['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      {stage === 'hero' && (
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center animate-fade-in">
            <div className="mb-8 animate-bounce-slow">
              <div className="text-9xl mb-4">💖</div>
              <Sparkles className="w-16 h-16 text-pink-400 mx-auto animate-spin-slow" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 animate-gradient leading-tight">
              Farin Will you be my<br />Valentine?
            </h1>
            
            <p className="text-2xl text-rose-400 mb-12 font-light italic">
              Choose your heart's answer...
            </p>
            
            <div className="flex gap-6 justify-center items-center relative">
              <button
                onClick={() => setStage('confirmed')}
                className="group relative px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Yes 💗
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                className="px-12 py-6 text-2xl font-bold text-rose-400 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rose-200"
                style={{
                  position: noButtonPos.x !== 0 ? 'fixed' : 'relative',
                  left: noButtonPos.x !== 0 ? `${noButtonPos.x}px` : 'auto',
                  top: noButtonPos.y !== 0 ? `${noButtonPos.y}px` : 'auto',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}
              >
                {noButtonText}
              </button>
            </div>
            
            <p className="mt-8 text-rose-300 italic text-lg">
              (Hint: There's only one right answer 😉)
            </p>
          </div>
        </div>
      )}

      {/* Confirmation Screen */}
      {stage === 'confirmed' && (
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center animate-scale-in">
            <div className="mb-8">
              <div className="text-9xl mb-6 animate-bounce">🎉</div>
              <div className="flex justify-center gap-4 text-6xl">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>✨</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              Good choice baby 💕
            </h2>
            
            <p className="text-3xl text-rose-400 mb-8 font-light">
              I knew you couldn't resist!
            </p>
            
            <div className="mb-12">
              <div className="text-7xl animate-pulse">💑</div>
            </div>
            
            <button
              onClick={() => setStage('main')}
              className="px-16 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
            >
              Let's Begin Our Journey 💫
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {stage === 'main' && (
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 space-y-32">
          
          {/* Virtual Date Ideas */}
          <section className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Our Virtual Date Ideas 💌
              </h2>
              <p className="text-xl text-rose-400 font-light italic">
                Adventures waiting for us...
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dateIdeas.map((idea, idx) => (
                <div
                  key={idx}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {idea.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-rose-600 mb-2">{idea.title}</h3>
                  <p className="text-rose-400">{idea.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Secret Note */}
          <section className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Secret Note for You 💌
              </h2>
              <p className="text-xl text-rose-400 font-light italic">
                Click to reveal my heart...
              </p>
            </div>
            
            <div className="flex justify-center">
              <div
                onClick={() => setEnvelopeOpen(!envelopeOpen)}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className={`relative w-80 h-80 ${envelopeOpen ? 'animate-envelope-open' : ''}`}>
                  {/* Envelope */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg shadow-2xl transition-all duration-700 ${envelopeOpen ? 'rotate-12 translate-y-8' : ''}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Mail className="w-24 h-24 text-white opacity-50" />
                    </div>
                  </div>
                  
                  {/* Letter */}
                  <div className={`absolute inset-x-8 top-8 bg-white rounded-lg shadow-xl p-8 transition-all duration-700 ${envelopeOpen ? 'translate-y-[-120px] opacity-100' : 'translate-y-0 opacity-0'}`}>
                    <p className="text-lg text-rose-600 leading-relaxed italic">
                      "Every moment with you feels like a dream I never want to wake up from. 
                      You are my yesterday, my today, and all of my tomorrows. 
                      Thank you for being the most incredible person in my life. 
                      I love you more than words could ever express. 💕"
                    </p>
                    <p className="text-right mt-4 text-rose-400 font-bold">
                      - Forever Yours
                    </p>
                  </div>
                  
                  {/* Hearts decoration */}
                  {envelopeOpen && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-pink-400 text-2xl animate-float-up"
                          style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        >
                          💖
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="animate-fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Our Favorite Memories 📸
              </h2>
              <p className="text-xl text-rose-400 font-light italic">
                Captured moments of us...
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {memories.map((memory, idx) => (
                <div
                  key={memory.id}
                  className="group relative aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Image or placeholder */}
                  {memory.image ? (
                    <>
                      <img 
                        src={memory.image} 
                        alt={memory.caption}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Caption overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <p className="text-white text-center font-bold text-xl">
                          {memory.caption}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* Placeholder with camera icon */
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <Camera className="w-20 h-20 text-white/50 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-white text-center font-medium text-lg">
                        {memory.caption}
                      </p>
                      <div className="mt-4 text-4xl group-hover:animate-bounce">
                        💕
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sweet Surprises */}
          <section className="animate-fade-in-up pb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Sweet Surprises 🍬
              </h2>
              <p className="text-xl text-rose-400 font-light italic">
                Click each card to unwrap my love notes...
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {surprises.map((surprise, idx) => (
                <div
                  key={surprise.id}
                  onClick={() => toggleSurprise(surprise.id)}
                  className="cursor-pointer group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-64 perspective-1000">
                    <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${revealedSurprises.has(surprise.id) ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl shadow-xl flex flex-col items-center justify-center backface-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                        <div className="text-7xl mb-4">{surprise.icon}</div>
                        <Gift className="w-12 h-12 text-white/50" />
                        <p className="text-white font-medium mt-4">Click to reveal</p>
                      </div>
                      
                      {/* Back */}
                      <div className="absolute inset-0 bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center backface-hidden rotate-y-180">
                        <div className="text-center">
                          <div className="text-5xl mb-4">{surprise.icon}</div>
                          <p className="text-rose-600 text-lg leading-relaxed italic">
                            "{surprise.message}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-12 border-t-2 border-pink-200">
            <p className="text-3xl text-rose-500 font-bold mb-4">
              Forever & Always 💕
            </p>
            <p className="text-rose-400 text-lg italic">
              This is just the beginning of our beautiful story...
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Quicksand', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Caveat', cursive;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-80px) rotate(120deg);
            opacity: 0.2;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-up {
          animation: float-up 2s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ValentineWebsite;