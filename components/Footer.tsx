import Link from 'next/link'

const Footer = () => {
    return (
      <footer >
        <ul >
          <li>
            <Link href='/imprint'>Impressum</Link>
          </li>
          <li>
            <Link href='/privacy'>Privacy Policy</Link>
          </li>
          <li>
            <Link href='/settings'>Einstellungen</Link>
          </li>
          {/* <li>
            <Link href='/login'>Anmelden</Link>
          </li> */}
        </ul>
      </footer>
    )
  }
  
  export default Footer