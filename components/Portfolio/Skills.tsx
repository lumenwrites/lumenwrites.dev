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
          React, Redux, TypeScript, jQuery, HTML, CSS, JS, Sass, Tailwind,
          Webflow, UI/UX Design in Figma.
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'server']} />
          <h2>Backend</h2>
          Next.js, Node, Express, Django, GraphQL, Apollo, Nexus, Prisma,
          MongoDB, Postgres, Supabase.
          {/* REST APIs, , SQL, Python, */}
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'tools']} />
          <h2>Tools</h2>
          AWS, Vercel, Digital Ocean, Linux, <br />
          Git, Webpack, Jest, Docker, Nginx, <br />
          Stripe, Sendgrid, Python, SQL.
          {/* Sendgrid Jest/Enzyme. Java. Cypress, Storybook */}
        </div>
        <div className="skill">
          <FontAwesomeIcon className="skill-icon" icon={['fas', 'lightbulb']} />
          <h2>Other</h2>
          Technical and creative writing, teaching programming, internet
          marketing, SEO, 3D graphic design.
          {/* Machine Learning Libraries (scikit-learn, pandas, keras, etc.) */}
          {/* Product management, Business skills */}
        </div>
      </div>
    </div>
  )
}
