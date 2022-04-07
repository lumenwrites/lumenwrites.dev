import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <header>
      {/* <Image src="/img/photo-square.jpg" width={150} height={150} className="avatar" /> */}
      <h1>Vladislav Podchufarov</h1>
      <div className="tagline">
        Full-stack web developer specializing in building interactive websites
        and SaaS applications using modern technologies.
      </div>
      {/* <div className="email">lumenwrites@gmail.com</div> */}
      {/* <a href="https://github.com/lumenwrites" target="_blank" rel="noopener noreferrer" className="link">
        github.com/lumenwrites
      </a> */}
      <a
        href="/files/Vladislav%20Podchufarov.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cta"
      >
        Hire me (See my CV)
      </a>
    </header>
  )
}
