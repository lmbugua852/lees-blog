import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I'm an independent Software Consultant based in Huntington
            Beach, California. I enjoy tickering with new tech and crafting
            beautiful front-end experiences.
          </h1>
          <p>These pretzels are making me thirsty.</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/beach.jpg"
          alt="beach life"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
