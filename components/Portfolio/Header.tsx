import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <header>
      {/* <Image src="/img/photo-square.jpg" width={150} height={150} className="avatar" /> */}
      {/* <h1>Lumen</h1> */}
      <h1>Vladislav Podchufarov</h1>
      {/* <h1>Vladislav Podchufarov</h1> */}
      {/* <h2>(aka Mike)</h2> */}
      <div className="tagline">Full-Stack Web Developer</div>
      <div className="email">lumenwrites@gmail.com</div>
      <a href="https://github.com/lumenwrites" target="_blank" rel="noopener noreferrer" className="link">
        github.com/lumenwrites
      </a>
      <a href="/files/Vladislav%20Podchufarov%20CV.pdf" target="_blank" rel="noopener noreferrer" className="cta">
        Hire me (See my CV)
      </a>
    </header>
  )
}
