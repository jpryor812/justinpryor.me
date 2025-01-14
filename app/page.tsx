import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/*Left side of the header*/}
          <div>
            <a href="/" className="text-lg font-medium">
              Justin Pryor
            </a>
          </div>
          {/*Right side of the header*/}
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="/" className="text-blue-500 text-sm sm:text-base">Home</a>
            <a href="https://docs.google.com/document/d/1en4LjA52kor9kICJB1j14FYuVs7WxZsbtIvLAqA0diU/edit?tab=t.0" className="text-sm sm:text-base">Resume</a>
            <a href="mailto:jpryor812@gmail.com" className="hover:text-gray-600 text-sm sm:text-base">Email Me</a>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left side - Text */}
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              I'm Justin, a founder, builder, and fanatic of excellent user experiences that save time and frustration.
            </h1>
          </div>

          {/* Right side - Image with gradient background */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative">
              {/* Blue background - positioned relative to the wrapper */}
              <div 
                className="absolute w-full h-full bg-blue-200 rounded-lg -translate-x-4 -translate-y-4"
                style={{
                  background: 'linear-gradient(140deg, #CEE3FF 0%, #006FFF 70%)'
                }}
              ></div>
              
              {/* Image */}
              <img 
                src="/profile picture.jpg"
                alt="Justin Pryor"
                className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Some Projects I've Worked On:
        </h2>
      </section>


    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="relative">
    {/* Light blue backdrop */}
    <div className="bg-blue-50 rounded-lg w-full h-84 sm:h-96"></div>
    
    {/* NUFRIENDS image positioned over the backdrop */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        src="/nufriends_logo_final.png"
        alt="NUFRIENDS"
        className="w-auto h-96 object-contain" // This will make it slightly smaller than container
      />
    </div>
    
    {/* Text overlaying both backdrop and image */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 
                className="text-4xl sm:text-5xl font-bold"
                style={{
                  color: 'black',
                  textShadow: `
                    -2px -2px 0 #fff,
                     2px -2px 0 #fff,
                    -2px  2px 0 #fff,
                     2px  2px 0 #fff
                  `
                }}
              >
        NUFRIENDS
      </h2>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* UserJourney.blog container */}
    <div className="relative w-full aspect-[6/5]"> {/* 6:5 aspect ratio */}
      {/* Blue backdrop */}
      <div className="bg-purple-100 rounded-lg absolute inset-0"></div>
      
      {/* Image positioned over the backdrop */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img 
          src="/UJ2.png"
          alt="UserJourneys.blog"
          className="w-auto h-full max-h-full object-contain"
        />
      </div>
            {/* Text overlay with outline effect */}
            <div className="absolute inset-0 flex items-center justify-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold"
          style={{
            color: 'black',
            textShadow: `
              -2px -2px 0 #fff,
               2px -2px 0 #fff,
              -2px  2px 0 #fff,
               2px  2px 0 #fff
            `
          }}
        >
          User Journeys
        </h2>
      </div>
    </div>

    {/* allthingsvc.blog container */}
    <div className="relative w-full aspect-[6/5]"> {/* 6:5 aspect ratio */}
      {/* Cream/peach backdrop */}
      <div className="bg-orange-50 rounded-lg absolute inset-0"></div>
      
      {/* Image positioned over the backdrop */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img 
          src="/ATVC_homepage.png"
          alt="allthingsvc.blog"
          className="w-auto h-full max-h-full object-contain"
        />
      </div>
      {/* Text overlay with outline effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold"
          style={{
            color: 'black',
            textShadow: `
              -2px -2px 0 #fff,
               2px -2px 0 #fff,
              -2px  2px 0 #fff,
               2px  2px 0 #fff
            `
          }}
        >
          allthingsvc.blog
        </h2>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
