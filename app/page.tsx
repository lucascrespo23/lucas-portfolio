export default function Home() {
  return (
    <>
    <main className="main-content max-w-xl mx-auto px-6 py-20 md:py-32 text-[15px] leading-relaxed text-[var(--color-text)]">
      <header className="mb-20">
        <h1 className="text-2xl font-medium mb-4">Lucas Crespo</h1>
        <p className="text-[var(--color-muted)]">
          Panama-based creative director and designer.
        </p>
      </header>

      <Section title="Currently">
        <ul className="space-y-2">
          <li>
            Creative Director @{" "}
            <a href="https://every.to">Every</a> — media/product studio
            building <a href="https://cora.computer">Cora</a>,{" "}
            <a href="https://writewithspiral.com">Spiral</a>,{" "}
            <a href="https://makeitsparkle.co">Sparkle</a>, and{" "}
            <a href="https://monologue.to">Monologue</a>
          </li>
          <li>
            Running <a href="https://veryvisual.design">VeryVisual Design</a>
          </li>
          <li>Writing about design, AI, and the internet</li>
        </ul>
      </Section>

      <Section title="I can help with">
        <ul className="space-y-1 text-[var(--color-muted)]">
          <li>Brand strategy & art direction</li>
          <li>Website design & development</li>
          <li>Digital product design</li>
          <li>Design systems</li>
          <li>Creative direction for startups</li>
        </ul>
      </Section>

      <Section title="Past">
        <ul className="space-y-2">
          <li>
            Art Director @ <a href="https://bbdo.com">BBDO</a>
          </li>
          <li>
            Art Director @ <a href="https://vml.com">VML</a>
          </li>
        </ul>
      </Section>

      <Section title="Worked with">
        <LogoMarquee />
      </Section>

      <Section title="Selected Work">
        <ul className="space-y-2">
          <li>
            <a href="https://every.to">Every.to</a>{" "}
            <span className="text-[var(--color-muted)]">
              — Creative direction for AI media company
            </span>
          </li>
          <li>
            <a href="https://veryvisual.design">VeryVisual</a>{" "}
            <span className="text-[var(--color-muted)]">
              — Design studio portfolio
            </span>
          </li>
          <li>
            <a href="https://delphidreams.xyz">Delphi</a>{" "}
            <span className="text-[var(--color-muted)]">
              — AI dream interpreter
            </span>
          </li>
          <li>
            <a href="https://jointhemovement.vip">The Movement</a>{" "}
            <span className="text-[var(--color-muted)]">
              — Colombian fitness platform
            </span>
          </li>
        </ul>
      </Section>

      <Section title="Writing">
        <div className="writing-bento">
          <a href="https://every.to/p/the-internet-used-to-be-fun" className="bento-card bento-wide">
            <span className="bento-tag">Every.to</span>
            <span className="bento-title">The Internet Used to Be Fun</span>
            <span className="bento-desc">On sameness, nostalgia, and why the web lost its texture.</span>
          </a>
          <a href="https://every.to/source-code" className="bento-card">
            <span className="bento-tag">Every.to</span>
            <span className="bento-title">Compound Engineering</span>
            <span className="bento-desc">Building products with AI from scratch.</span>
          </a>
          <a href="https://every.to/p/the-cost-of-marketing" className="bento-card">
            <span className="bento-tag">Essay</span>
            <span className="bento-title">The Cost of Marketing</span>
            <span className="bento-desc">Why creativity is the last unfair advantage.</span>
          </a>
          <a href="https://every.to/p/ai-and-the-future-of-design" className="bento-card bento-wide">
            <span className="bento-tag">Every.to</span>
            <span className="bento-title">AI and the Future of Design</span>
            <span className="bento-desc">Taste over execution — what happens when tools can do everything.</span>
          </a>
        </div>
      </Section>

      <Section title="Interests">
        <ul className="space-y-1 text-[var(--color-muted)]">
          <li>AI tools and human-agent interfaces</li>
          <li>Architecture and spatial design</li>
          <li>Typography and editorial design</li>
          <li>Panama City life</li>
        </ul>
      </Section>

      <footer className="pt-16 flex gap-6 text-sm pb-8">
        <a href="https://x.com/lucas__crespo">X</a>
        <a href="https://linkedin.com/in/lucascrespo">LinkedIn</a>
        <a href="mailto:hello@veryvisual.design">Email</a>
      </footer>
    </main>
    <div className="footer-image">
      <img src="/treeline.png" alt="" />
    </div>
    </>
  );
}

const row1 = [
  "Frame 1597881352.png", "Frame 1597881353.png", "Frame 1597881354.png",
  "Frame 1597881355.png", "Frame 1597881356.png", "Frame 1597881357.png",
  "Frame 1597881358.png", "Frame 1597881359.png",
];

const row2 = [
  "Frame 1597881360.png", "Frame 1597881361.png", "Frame 1597881362.png",
  "Frame 1597881363.png", "Frame 1597881364.png", "Frame 1597881365.png",
  "Frame 1597881366.png",
];

const row3 = [
  "Frame 1597881368.png", "Frame 1597881370.png",
  "Frame 1597881371.png", "Frame 1597881372.png", "Frame 1597881373.png",
  "Frame 1597881374.png", "Frame 1597881375.png",
];

const row4 = [
  "Frame 1597881376.png", "Frame 1597881377.png", "Frame 1597881378.png",
  "Frame 1597881379.png", "Frame 1597881380.png", "Frame 1597881381.png",
  "Frame 1597881382.png",
];

function LogoMarquee() {
  return (
    <div className="space-y-3">
      <MarqueeRow logos={row1} duration="55s" />
      <MarqueeRow logos={row2} duration="60s" reverse />
      <MarqueeRow logos={row3} duration="50s" />
      <MarqueeRow logos={row4} duration="58s" reverse />
    </div>
  );
}

function MarqueeRow({ logos, duration, reverse }: { logos: string[]; duration: string; reverse?: boolean }) {
  const tripled = [...logos, ...logos, ...logos];
  return (
    <div className="marquee-container overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {tripled.map((file, i) => (
          <img
            key={i}
            src={`/logos/${file}`}
            alt=""
            className="marquee-logo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4 font-medium">
        {title}
      </h2>
      {children}
    </section>
  );
}
