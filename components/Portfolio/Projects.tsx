import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {/* <div className="wrapper subtitle">
        <p> All the projects below have been designed and developed by me, from idea to launch. </p>
      </div> */}
      <div className="wrapper projects-wrapper">
        <ProjectCard
          title="Writing Streak"
          href={'https://writingstreak.io'}
          img={'/projects/writingstreak.png'}
          tags={['react', 'redux', 'node', 'express']}
        >
          <p>
            Writing and publishing platform that helps writers to build a
            writing habit by tracking their analytics. 5000+ users from organic
            growth by word of mouth, the most active users use it for 100s days
            in a row.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Nulis"
          href={'https://nulis.io'}
          img={'/projects/nulis.png'}
          tags={['react', 'redux', 'node', 'express']}
        >
          <p>
            Mind-mapping software that helps writers collect and organize their
            knowledge, develop their ideas.
            <br />
            1500+ users.
          </p>
        </ProjectCard>

        <ProjectCard
          title="RPG Adventures"
          href={'https://rpgadventures.io'}
          img={'/projects/rpgadventures.jpg'}
          tags={['next.js (static generation)', 'mdx', 'vercel', 'stripe']}
        >
          <p>
            A platform for publishing adventures for table-top roleplaying
            games. It is also used to host my{' '}
            <a
              href="https://rpgadventures.io/course/adventure-academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              adventure writing course
            </a>
            . 300+ students are attending my creative writing workshops.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Godot Assets"
          href={'https://godotassets.io'}
          img={'/projects/godotassets.jpg'}
          tags={['next.js', 'react', 'aws', 'prisma', 'vercel', 'stripe']}
        >
          <p>
            A marketplace where people can discover, publish, and sell assets
            for the Godot game engine (most assets you see on the website have
            also been developed by me).
            <br />
            1600+ subscribers on the mailing list.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Godot Academy"
          href={'https://godotacademy.io'}
          img={'/projects/godotacademy.png'}
          tags={['next.js (static generation)', 'mdx', 'vercel', 'stripe']}
        >
          <p>
            My gamedev tutorials. Uses the same platform as RPG Adventures, but
            showcases my tutorial making and technical writing skills.
            <br />
            2300+ YouTube subscribers.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Sketch Club"
          href={'https://sketchclub.io'}
          img={'/projects/sketchclub.png'}
          tags={['next.js', 'react', 'aws', 'graphql', 'prisma', 'nexus']}
        >
          <p>
            My CS MSc project. Instagram-inspired web application that helps art
            students to regularly practice their drawing skills. See the
            detailed project report{' '}
            <a
              href="/files/Sketch%20Club%20Project%20Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . <br />
            1700+ Discord members.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Lumiverse"
          href={'https://lumiverse.io'}
          img={'/projects/lumiverse.png'}
          tags={['python', 'django', 'bootstrap', 'jquery']}
        >
          <p>
            Discovery platform for educational videos. Old project, no longer
            maintained, but it had 37,000 visitors per month at its peak.
          </p>
        </ProjectCard>
{/* 
        <ProjectCard
          title="Helix"
          href={'https://helix.startuplab.io'}
          img={'/projects/helix.png'}
          tags={['react', 'redux', 'node', 'express']}
        >
          <p>
            A habit tracking app - simple, but I think it turned out pretty
            well, I’m proud of its design.
          </p>
        </ProjectCard> */}

        <ProjectCard
          title="Webacademy"
          href={'https://webacademy.io'}
          img={'/projects/webacademy.png'}
          tags={['python', 'django', 'bootstrap', 'jquery']}
        >
          <p>
            Discover the best tutorials and courses submitted by the programming
            community.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Digital Mind"
          href={'https://digitalmind.io'}
          img={'/projects/digitalmind.png'}
          tags={['next.js (static generation)', 'mdx', 'vercel', 'stripe']}
        >
          <p>My Machine Learning notes.</p>
        </ProjectCard>
        <ProjectCard
          title="Digital Art"
          href={'http://artstation.com/lumenwrites'}
          img={'/projects/digital-art.png'}
          tags={['houdini', 'maya', 'photoshop', 'affinity']}
        >
          <p>Computer Graphics and Digital Art I&apos;m creating.</p>
        </ProjectCard>
        <ProjectCard
          title="Nexy"
          href={'https://nexy.io'}
          img={'/projects/nexy.png'}
          tags={['next.js', 'prisma', 'vercel', 'aws']}
        >
          <p>
            A publishing platform and a community of digital writers who
            exchange advice and feedback and help each other get better at
            writing (early beta, work in progress).
          </p>
        </ProjectCard>
        {/* <ProjectCard
          title="Nexy Labs"
          href={'https://nexylabs.io'}
          img={'/projects/nexylabs.png'}
          tags={['Web Design', 'Web Development', 'Marketing']}
        >
          <p>
            Nexy Labs is an agency that provides a full-range of web design,
            development, and marketing services, helping people to build,
            launch, and grow websites and SaaS applications.
          </p>
        </ProjectCard> */}
      </div>
    </div>
  )
}
