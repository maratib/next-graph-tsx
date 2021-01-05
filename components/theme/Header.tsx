import Link from 'next/link'

type HeaderProps = {};

const Header = (props: HeaderProps) => (
  <div>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/admin">
          <a>Admin</a>
        </Link>{' '}
        |
      </nav>
    </header>
  </div>
);
export default Header;