import Image from "next/image";

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
>>>>>>> 5f89100dccf6672f866e7de1f850e57490761b44
  );
}
