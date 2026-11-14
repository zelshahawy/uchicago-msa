import { Header } from "@/components/header";
import { Arrow, Ornament } from "@/components/ornament";
import { communityLinks, resources } from "@/lib/community";

const pillars = [
  { number: "01", arabic: "إيمان", translation: "Īmān · Faith", title: "Room for your faith.", description: "A moment to pause. A space to pray. A community to grow alongside, wherever you are on your journey.", link: "Explore prayer spaces", href: communityLinks.prayer, className: "faith" },
  { number: "02", arabic: "صحبة", translation: "Ṣuḥbah · Companionship", title: "Find your people.", description: "Shared meals, new friendships, and the small moments that turn a campus into a community.", link: "Join our community", href: communityLinks.whatsapp, className: "friendship" },
  { number: "03", arabic: "علم", translation: "ʿIlm · Knowledge", title: "Keep growing, together.", description: "Bring your questions and your curiosity. Make room for meaningful conversations and new perspectives.", link: "Stay in the loop", href: communityLinks.mailingList, className: "learning" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero container" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="little-star">✳</span> MUSLIM STUDENTS ASSOCIATION</p>
            <h1 id="hero-title">Rooted in faith.<br />Connected by<br /><em>community.</em></h1>
            <p className="hero-description">Your home away from home at UChicago.<br className="desktop-break" /> A place to find your people, grow in faith,<br className="desktop-break" /> and make a little room for belonging.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#resources">Find your community <Arrow /></a>
              <a className="text-link" href="#community">Get to know us <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-location"><span className="location-dot" /> ALL ARE WELCOME</div>
          </div>
          <div className="hero-art">
            <div className="art-corner art-corner-top" aria-hidden="true"><Ornament /></div>
            <div className="welcome-orbit" aria-hidden="true" />
            <span className="art-note art-note-top">A LITTLE PIECE OF HOME</span>
            <div className="hero-calligraphy" lang="ar" dir="rtl" aria-label="أهلًا وسهلًا — Welcome">
              <span className="calligraphy-first">أهلًا</span>
              <span className="calligraphy-second">وسهلًا</span>
            </div>
            <div className="calligraphy-spark spark-one" aria-hidden="true">✦</div>
            <div className="calligraphy-spark spark-two" aria-hidden="true">✧</div>
            <div className="art-corner art-corner-bottom" aria-hidden="true"><Ornament /></div>
            <div className="art-translation"><span /> AHLAN WA SAHLAN <span /></div>
            <p className="art-welcome">You are welcome here.</p>
          </div>
        </section>

        <div className="greeting-band" aria-label="Faith, community, and belonging">
          <div className="greeting-inner container">
            <span lang="ar" dir="rtl">إيمان</span><Ornament /><span>FAITH</span><Ornament />
            <span lang="ar" dir="rtl">صحبة</span><Ornament /><span>COMMUNITY</span><Ornament />
            <span lang="ar" dir="rtl">انتماء</span><Ornament /><span>BELONGING</span>
          </div>
        </div>

        <aside className="prayer-notice container" aria-label="Prayer location">
          <span className="prayer-arabic" lang="ar" dir="rtl">صلاة</span>
          <div><span className="prayer-label">COME PRAY WITH US</span><p>Prayers at <strong>Rockefeller Chapel.</strong></p></div>
          <a className="text-link" href={communityLinks.directions} target="_blank" rel="noopener noreferrer">Find your way <Arrow diagonal /></a>
        </aside>

        <section id="community" className="community-section container" aria-labelledby="community-title">
          <div className="section-label"><span className="section-number">01 /</span> OUR COMMUNITY</div>
          <div className="community-content">
            <h2 id="community-title">Many stories.<br /><em>One community.</em></h2>
            <div className="community-description">
              <p>College is a journey. You don’t have to make it alone.</p>
              <p>We’re the Muslim Students Association at the University of Chicago—a space to connect through faith, build lasting friendships, and support one another along the way.</p>
              <p>Whether you’ve just arrived on campus or you’ve been here for years, there’s a place for you with us.</p>
              <a className="text-link" href="#life">A glimpse of life at MSA <Arrow /></a>
            </div>
          </div>
          <div className="community-signoff"><span lang="ar" dir="rtl">معًا نكبر</span><span>TOGETHER, WE GROW.</span></div>
        </section>

        <section id="life" className="life-section" aria-labelledby="life-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="section-label"><span className="section-number">02 /</span> LIFE AT MSA</p><h2 id="life-title">More than a place.<br /><em>A sense of belonging.</em></h2></div>
              <p className="section-aside">Faith, friendship, and everything<br />that brings us a little closer.</p>
            </div>
            <div className="pillars">
              {pillars.map((pillar) => (
                <article className={`pillar ${pillar.className}`} key={pillar.number}>
                  <div className="pillar-art"><span className="pillar-number">{pillar.number}</span><span className="pillar-arabic" lang="ar" dir="rtl">{pillar.arabic}</span><Ornament className="pillar-ornament" /><span className="pillar-translation">{pillar.translation}</span></div>
                  <h3>{pillar.title}</h3><p>{pillar.description}</p>
                  <a className="text-link" href={pillar.href} target="_blank" rel="noopener noreferrer">{pillar.link}<Arrow diagonal /></a>
                </article>
              ))}
            </div>
            <div className="life-note"><span className="little-star">✳</span><p>Looking for our next gathering? <a href={communityLinks.calendar} target="_blank" rel="noopener noreferrer">Explore the MSA events calendar <Arrow diagonal /></a></p></div>
          </div>
        </section>

        <section id="resources" className="resources-section container" aria-labelledby="resources-title">
          <div className="section-heading">
            <div><p className="section-label"><span className="section-number">03 /</span> YOUR MSA, ALL IN ONE PLACE</p><h2 id="resources-title">A few ways to<br /><em>find your way in.</em></h2></div>
            <p className="section-aside">The group chats, gatherings, and resources<br />that help us stay connected.</p>
          </div>
          <div className="resource-grid">
            {resources.map((resource) => <a className="resource-link" key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer"><div><span className="resource-category">{resource.category}</span><h3>{resource.title}</h3><p>{resource.description}</p></div><Arrow diagonal /></a>)}
          </div>
        </section>

        <section id="connect" className="connect-section" aria-labelledby="connect-title">
          <div className="container connect-inner">
            <div className="connect-copy"><p className="section-label"><span className="section-number">04 /</span> THE DOOR IS OPEN</p><h2 id="connect-title">It all starts<br />with a <em>salaam.</em></h2><p>New to campus? Looking for community?<br />We’d love to meet you. Come as you are.</p><a className="button button-cream" href={communityLinks.whatsapp} target="_blank" rel="noopener noreferrer">Join the community <Arrow diagonal /></a></div>
            <div className="connect-art"><span lang="ar" dir="rtl">سلام</span><p>SALAAM / PEACE</p><Ornament /></div>
            <div className="connect-links">
              <a href={communityLinks.instagram} target="_blank" rel="noopener noreferrer"><span><small>THE EVERYDAY MOMENTS</small>Follow on Instagram</span><Arrow diagonal /></a>
              <a href={communityLinks.mailingList} target="_blank" rel="noopener noreferrer"><span><small>GOOD THINGS, IN YOUR INBOX</small>Join our mailing list</span><Arrow diagonal /></a>
              <a href={communityLinks.email}><span><small>A QUESTION, AN IDEA, A HELLO</small>Send us a message</span><Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container"><a className="footer-brand" href="#home" aria-label="Back to top"><Ornament /><span>UChicago MSA</span></a><p>Rooted in faith. Open to you.</p><a className="back-to-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
