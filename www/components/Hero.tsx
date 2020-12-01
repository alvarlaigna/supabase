import Link from 'next/link'
import Button from 'components/Button'

const Hero = () => {
  return (
    <div className="relative bg-dark-500 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-16 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
            <svg
              className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
              width="364"
              height="384"
              viewBox="0 0 364 384"
              fill="none"
            >
              <defs>
                <pattern
                  id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
            </svg>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">

                  <div className="sm:mx-auto md:w-3/4 lg:w-full lg:mx-0">
                    <h1 className="mt-4 text-4xl text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="md:block">The Open Source</span>
                      <span className="text-brand-400 ml-2 md:ml-0 md:block">Firebase Alternative</span>
                    </h1>
                    <p className="mt-5 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Create your new project backend in less than 2 minutes with easy to use Postgres Database and Authentication.
                    </p>
                    <p className="mt-3 text-base text-dark-100">
                      Storage and serverless functions coming soon
                    </p>

                    <Button className="mt-10 py-3" text="Start your project" url="#"/>

                    <p className="mt-8 text-sm text-gray-400 tracking-wide sm:mt-10">
                      backed by
                    </p>
                    <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                      <div className="flex flex-wrap items-center sm:justify-center lg:justify-start">
                        <img className="h-8 sm:h-10 pr-10" src="images/logos/yc--grey.png" alt="Y Combinator" />
                        <img className="relative -top-1 h-5 sm:h-7 pr-10" src="images/logos/mozilla--grey.png" alt="Mozilla" />
                        <img className="h-3 sm:h-5 pr-10" src="images/logos/coatue.png" alt="Coatue" />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="shadow-lg relative w-full rounded-md">
                    <div className="w-full rounded-t-md h-5 bg-dark-400 flex items-center justify-start px-2">
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500"/>
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500"/>
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500"/>
                    </div>
                    <div className="relative bg-red" style={{ padding: '56.25% 0 0 0' }}>
                      <iframe
                        className="absolute w-full h-full"
                        src="https://www.youtube.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1"
                        style={{ top: 0, left: 0 }}
                        frameBorder="0"
                        allow="autoplay"
                      />
                    </div>
                    {/* 
                      Replace src with the following if have preference:
                      Vimeo:   https://player.vimeo.com/video/485959063?loop=1&autoplay=1
                      Youtube: https://www.youtube.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1
                     */}
                  </div>
                </div>        
              </div>
            </div>
          </main>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero