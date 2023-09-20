import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {
  return (
    <div className="skills">
      <div className="wrapper">
        <div className="skill">
          <FontAwesomeIcon
            className="skill-icon"
            icon={['fas', 'laptop-code']}
          />
          <h2>Frontend</h2>
          React, Redux, TypeScript, Tailwind, Sass, HTML, CSS, JS, jQuery, UI/UX
          Design in Figma.
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'server']} />
          <h2>Backend</h2>
          Next.js, Prisma, Supabase, Node, Express, Django, GraphQL, Apollo,
          Nexus, MongoDB, Postgres.
          {/* REST APIs, , SQL, Python, */}
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'tools']} />
          <h2>Tools</h2>
          Vercel, Digital Ocean, Linux, AWS, <br />
          Git, Webpack, Jest, Docker, Nginx, <br />
          Stripe, Sendgrid, Python, SQL.
          {/* Sendgrid Jest/Enzyme. Java. Cypress, Storybook */}
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'lightbulb']} />
          <h2>Other</h2>
          Technical and creative writing, teaching programming, internet
          marketing, 3D graphic design.
          {/* Machine Learning Libraries (scikit-learn, pandas, keras, etc.) */}
          {/* Product management, Business skills */}
        </div>
      </div>
    </div>
  )
}
