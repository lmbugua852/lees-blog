import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-5">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
