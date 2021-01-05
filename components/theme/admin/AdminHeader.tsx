import Link from 'next/link'

type AdminHeaderProps = {};

const AdminHeader = (props: AdminHeaderProps) => (
  <div>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
      </nav>
    </header>
  </div>
);
export default AdminHeader;