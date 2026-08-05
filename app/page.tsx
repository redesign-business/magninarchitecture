const CTA = "Start a conversation";
const EMAIL = "mailto:gordon@magninarchitecture.com";

const projects = [
  {
    name: "Hajduk",
    place: "Martis Peak, California",
    note: "Wildfire-resilient residence on a Sierra ridge",
    image: "/images/magnin-architecture---hajduk-residence---web-sized-31-1-e59d648935.png",
  },
  {
    name: "Amos",
    place: "Mt Rose, Nevada",
    note: "A low profile drawn into the high desert",
    image: "/images/dscf0752-edit-7283fe57dc.jpg",
  },
  {
    name: "Dreier",
    place: "Reno, Nevada",
    note: "Restoring a 1970s modernist original",
    image: "/images/drone_resize-535fa8758e.png",
  },
  {
    name: "Frantz Ski Haus",
    place: "Olympic Valley, California",
    note: "A family mountain home shaped by snow",
    image: "/images/frantz_main_resized-2c091907cd.png",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Magnin Architecture home">
          <span>MAGNIN</span><span>ARCHITECTURE</span>
        </a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#recognition">Recognition</a>
        </div>
        <a className="cta ctaDark" href={EMAIL}>{CTA}<span>↗</span></a>
      </nav>

      <header className="hero" id="top">
        <img
          src="/images/magnin-architecture---hajduk-residence---web-sized-26-92a1586a7a.jpg"
          alt="Hajduk Residence, a black metal and glass home in the Sierra Nevada"
        />
        <div className="veil" />
        <div className="heroCopy">
          <p className="eyebrow light">Tahoe · Reno · Bay Area</p>
          <h1>Homes in<br />conversation<br />with the land.</h1>
          <div className="heroFoot">
            <p>Architecture and engineering united in one rigorous, site-responsive practice.</p>
            <a className="cta ctaLight" href={EMAIL}>{CTA}<span>↗</span></a>
          </div>
        </div>
        <p className="caption">Hajduk Residence / Martis Peak</p>
      </header>

      <section className="proofBar" aria-label="Practice highlights">
        <div><strong>07</strong><span>AIA awards<br />since 2019</span></div>
        <div><strong>WSJ</strong><span>Featured in<br />The Wall Street Journal</span></div>
        <div><strong>AIA / PE</strong><span>Architect + engineer<br />CA &amp; NV</span></div>
        <div><strong>20+</strong><span>Years of<br />experience</span></div>
      </section>

      <section className="intro" id="work">
        <div>
          <p className="eyebrow">Selected residential work</p>
          <h2>Designed from the conditions outward.</h2>
        </div>
        <p className="introText">From high-desert foothills to deep-snow forests and the Tahoe shoreline, every project begins with the forces already at work: terrain, climate, regulation, material and the way a family wants to live.</p>
      </section>

      <section className="projectGrid">
        {projects.map((project, index) => (
          <article className={`project project${index + 1}`} key={project.name}>
            <div className="projectImage"><img src={project.image} alt={`${project.name} residence`} /></div>
            <div className="projectMeta">
              <p><span>0{index + 1}</span>{project.place}</p>
              <h3>{project.name}</h3>
              <p>{project.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="award" id="recognition">
        <div className="awardImage">
          <img src="/images/dscf0887-edit-0266632868.jpg" alt="Amos Residence set low against the Mt Rose foothills" />
          <span>2025 / Honor Award</span>
        </div>
        <div className="awardCopy">
          <p className="eyebrow">Recognition</p>
          <p className="awardNumber">7</p>
          <h2>AIA awards<br />since 2019.</h2>
          <p>The 2025 AIA Northern Nevada Honor Award recognized the Amos Residence, a family home calibrated to the open high desert at the foot of Mt Rose.</p>
          <div className="ruleList">
            <p><span>2025</span>AIA Northern Nevada Honor Award · Amos</p>
            <p><span>2024</span>Nevada AIA Citation Award · Hajduk</p>
            <p><span>2024</span>Sustainable Design Excellence · Hillman</p>
            <p><span>2022</span>Nevada AIA Honor Award · Frantz</p>
          </div>
        </div>
      </section>

      <section className="press">
        <div className="pressCopy">
          <p className="eyebrow light">Press &amp; publications</p>
          <h2>“Built to last.”</h2>
          <p>Gordon Magnin’s work has been featured by <em>The Wall Street Journal</em> and <em>Tahoe Quarterly</em>, including stories about modern restoration, mountain craft and homes made for their place.</p>
          <div className="pressMarks"><strong>THE WALL STREET JOURNAL</strong><strong>TAHOE<br />QUARTERLY</strong></div>
        </div>
        <img src="/images/12-1-6cbf17c8b1.png" alt="Restored Dreier Residence patio against a rocky hillside" />
      </section>

      <section className="studio" id="studio">
        <div className="portraitWrap">
          <img src="/images/gordanmagnin-portrait-a894698df8.jpg" alt="Gordon Sean Magnin, architect and professional engineer" />
          <p>Gordon Sean Magnin<br />AIA / PE</p>
        </div>
        <div className="studioCopy">
          <p className="eyebrow">One integrated point of view</p>
          <h2>Architectural instinct.<br />Engineering discipline.</h2>
          <p>Gordon is a licensed architect and professional engineer in California and Nevada. More than 20 years across architecture, structural and civil engineering inform a practice where the concept and its construction are considered together from the first line.</p>
          <div className="credentials">
            <span>Licensed Architect · CA &amp; NV</span>
            <span>Professional Engineer · CA &amp; NV</span>
            <span>NCARB Certified</span>
            <span>LEED Green Associate</span>
            <span>AIA Member</span>
          </div>
          <a className="cta ctaDark" href={EMAIL}>{CTA}<span>↗</span></a>
        </div>
      </section>

      <section className="approach">
        <div className="approachImage">
          <img src="/images/img_0715-db50e38a2b.jpeg" alt="Combes Residence under construction above Donner Lake" />
          <span>Combes / In construction</span>
        </div>
        <div className="approachCopy">
          <p className="eyebrow">Questions, answered</p>
          <h2>A clear path through a complex site.</h2>
          <details open><summary>Where does the practice work?<span>+</span></summary><p>Across Tahoe, Reno, Northern California and select sites beyond, with licensure in both California and Nevada.</p></details>
          <details><summary>What kinds of projects do you take on?<span>+</span></summary><p>Custom homes, restorations and highly considered residential work, from constrained urban parcels to remote mountain sites.</p></details>
          <details><summary>Why combine architecture and engineering?<span>+</span></summary><p>It allows form, structure, climate and constructability to develop as one idea rather than separate conversations.</p></details>
          <details><summary>How do we begin?<span>+</span></summary><p>Start with a conversation about your site, ambitions, timing and the conditions that make the project unique.</p></details>
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/viksel_combesresidence_final4k_ext02_2022-09-15-4248d455f7.png" alt="Combes Residence among tall pines above Donner Lake" />
        <div className="veil" />
        <div>
          <p className="eyebrow light">Have a place in mind?</p>
          <h2>Let the site<br />start the story.</h2>
          <a className="cta ctaLight" href={EMAIL}>{CTA}<span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="brand footerBrand"><span>MAGNIN</span><span>ARCHITECTURE</span></div>
        <div><p>1277 W 7th St, Ste A<br />Reno, NV 89503</p></div>
        <div><a href="tel:+12133005955">(213) 300-5955</a><a href={EMAIL}>gordon@magninarchitecture.com</a></div>
        <p className="copyright">© {new Date().getFullYear()} Magnin Architecture</p>
      </footer>

      <style>{`
        :root{--ink:#18201d;--paper:#eeeae1;--clay:#a95236;--line:rgba(24,32,29,.22)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%;height:100%;object-fit:cover}p{line-height:1.55}.nav{height:92px;display:flex;align-items:center;justify-content:space-between;padding:0 3.5vw;background:var(--paper)}.brand{display:flex;flex-direction:column;font-size:15px;line-height:.86;font-weight:800;letter-spacing:.04em}.brand span:last-child{font-size:8px;letter-spacing:.24em;margin-top:5px}.navlinks{display:flex;gap:36px;font-size:11px;text-transform:uppercase;letter-spacing:.16em}.navlinks a:hover{color:var(--clay)}.cta{display:inline-flex;align-items:center;justify-content:space-between;gap:35px;padding:15px 18px;min-width:190px;font-size:10px;text-transform:uppercase;letter-spacing:.14em;border:1px solid}.cta span{font-size:16px}.ctaDark{background:var(--ink);color:white;border-color:var(--ink)}.ctaLight{color:white;border-color:rgba(255,255,255,.7)}.hero{height:calc(100vh - 92px);min-height:620px;position:relative;color:white}.veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,15,13,.62),rgba(10,15,13,.04) 70%)}.heroCopy{position:absolute;left:7vw;right:7vw;top:10%;bottom:10%;display:flex;flex-direction:column;justify-content:space-between}.eyebrow{text-transform:uppercase;letter-spacing:.2em;font-size:9px;font-weight:700;margin:0 0 25px}.eyebrow.light{color:rgba(255,255,255,.75)}h1,h2,h3{font-family:Georgia,'Times New Roman',serif;font-weight:400;margin:0}h1{font-size:clamp(64px,8.5vw,136px);line-height:.82;letter-spacing:-.055em}.heroFoot{display:flex;align-items:end;justify-content:space-between}.heroFoot p{font-family:Georgia,serif;font-size:18px;max-width:430px;margin:0}.caption{position:absolute;right:2vw;bottom:3%;font-size:9px;letter-spacing:.15em;text-transform:uppercase;writing-mode:vertical-rl}.proofBar{display:grid;grid-template-columns:repeat(4,1fr);padding:32px 3.5vw;border-bottom:1px solid var(--line)}.proofBar div{display:flex;align-items:center;gap:20px;padding:5px 6%;border-right:1px solid var(--line)}.proofBar div:last-child{border:0}.proofBar strong{font-family:Georgia,serif;font-size:33px;font-weight:400}.proofBar span{font-size:9px;line-height:1.4;text-transform:uppercase;letter-spacing:.12em}.intro{padding:150px 7vw 80px;display:grid;grid-template-columns:1.4fr .7fr;gap:12vw;align-items:end}.intro h2,.award h2,.studio h2,.approach h2{font-size:clamp(42px,5vw,78px);line-height:.98;letter-spacing:-.04em}.introText{font-family:Georgia,serif;font-size:17px;margin:0}.projectGrid{display:grid;grid-template-columns:1.35fr .65fr;gap:9vw 3vw;padding:0 3.5vw 150px}.project:nth-child(even){margin-top:120px}.projectImage{height:55vw;max-height:750px;overflow:hidden}.project:nth-child(even) .projectImage{height:34vw}.projectMeta{display:grid;grid-template-columns:1fr 2fr;gap:10px;padding-top:18px;border-top:1px solid var(--ink);margin-top:14px}.projectMeta p{font-size:9px;text-transform:uppercase;letter-spacing:.11em;margin:0}.projectMeta p span{margin-right:18px;color:var(--clay)}.projectMeta h3{grid-row:1/3;grid-column:2;font-size:32px}.award{background:#d8d0c2;display:grid;grid-template-columns:1.15fr .85fr;padding:8vw 7vw;gap:8vw}.awardImage{position:relative;height:720px}.awardImage span,.approachImage span{position:absolute;bottom:0;left:0;background:var(--paper);padding:13px 18px;font-size:9px;text-transform:uppercase;letter-spacing:.14em}.awardCopy{align-self:center}.awardNumber{font-family:Georgia,serif;font-size:170px;line-height:.7;color:var(--clay);margin:30px 0}.awardCopy>p:not(.eyebrow):not(.awardNumber){max-width:470px;font-family:Georgia,serif;font-size:16px;margin:35px 0}.ruleList{margin-top:45px}.ruleList p{border-top:1px solid var(--line);margin:0;padding:14px 0;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.ruleList span{display:inline-block;width:65px;color:var(--clay)}.press{display:grid;grid-template-columns:1fr 1fr;background:var(--ink);color:white;min-height:760px}.pressCopy{padding:10vw 7vw;display:flex;flex-direction:column}.pressCopy h2{font-size:clamp(55px,7vw,100px);line-height:.9}.pressCopy>p:not(.eyebrow){font-family:Georgia,serif;font-size:17px;max-width:520px;margin:50px 0}.pressMarks{margin-top:auto;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(255,255,255,.3);padding-top:28px}.pressMarks strong{font-family:Georgia,serif;font-size:17px;letter-spacing:.04em}.press>img{min-height:760px}.studio{display:grid;grid-template-columns:.7fr 1.3fr;gap:11vw;padding:150px 10vw}.portraitWrap img{height:570px;filter:grayscale(100%)}.portraitWrap p{text-transform:uppercase;letter-spacing:.14em;font-size:9px;border-top:1px solid;padding-top:14px}.studioCopy{padding-top:60px}.studioCopy>p:not(.eyebrow){font-family:Georgia,serif;font-size:17px;max-width:670px;margin:45px 0}.credentials{display:grid;grid-template-columns:1fr 1fr;margin-bottom:45px;border-top:1px solid var(--line)}.credentials span{font-size:9px;text-transform:uppercase;letter-spacing:.1em;padding:15px 0;border-bottom:1px solid var(--line)}.approach{display:grid;grid-template-columns:1.1fr .9fr;background:#c9c0b0}.approachImage{height:850px;position:relative}.approachCopy{padding:9vw 6vw}.approachCopy h2{margin-bottom:60px}.approach details{border-top:1px solid rgba(24,32,29,.35);padding:20px 0}.approach details:last-child{border-bottom:1px solid rgba(24,32,29,.35)}summary{cursor:pointer;list-style:none;font-family:Georgia,serif;font-size:20px;display:flex;justify-content:space-between}.approach details p{font-size:12px;max-width:500px}.finalCta{height:760px;position:relative;color:white}.finalCta .veil{background:rgba(15,20,18,.48)}.finalCta>div:last-child{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.finalCta h2{font-size:clamp(70px,10vw,145px);line-height:.8;letter-spacing:-.05em;margin-bottom:55px}footer{background:#101613;color:#d9d5cb;padding:75px 4vw 35px;display:grid;grid-template-columns:2fr 1fr 1.5fr;gap:50px}footer p,footer a{display:block;font-size:10px;line-height:1.8;letter-spacing:.08em}.footerBrand{font-size:28px}.footerBrand span:last-child{font-size:12px}.copyright{grid-column:1/-1;border-top:1px solid rgba(255,255,255,.2);padding-top:25px;margin-top:40px}
        @media(max-width:800px){.nav{height:76px;padding:0 20px}.navlinks{display:none}.nav .cta{min-width:auto;padding:12px}.nav .cta span{display:none}.hero{height:760px}.heroCopy{left:24px;right:24px}.heroFoot{align-items:flex-start;flex-direction:column;gap:30px}h1{font-size:18vw}.caption{display:none}.proofBar{grid-template-columns:1fr 1fr;padding:15px}.proofBar div{padding:18px 10px}.proofBar div:nth-child(2){border-right:0}.intro{padding:100px 24px 60px;grid-template-columns:1fr;gap:35px}.projectGrid{grid-template-columns:1fr;padding:0 20px 90px;gap:70px}.project:nth-child(even){margin-top:0}.projectImage,.project:nth-child(even) .projectImage{height:110vw}.projectMeta{grid-template-columns:1fr}.projectMeta h3{grid-column:1;grid-row:auto}.award,.press,.studio,.approach{grid-template-columns:1fr}.award{padding:80px 20px}.awardImage{height:110vw}.awardNumber{font-size:120px}.pressCopy{padding:90px 24px;min-height:650px}.press>img{min-height:0;height:110vw}.studio{padding:90px 24px;gap:20px}.portraitWrap img{height:120vw}.studioCopy{padding-top:30px}.credentials{grid-template-columns:1fr}.approachImage{height:110vw}.approachCopy{padding:90px 24px}.finalCta{height:680px}footer{grid-template-columns:1fr;padding:60px 24px 30px}.copyright{grid-column:1}.cta{min-width:210px}}
      `}</style>
    </main>
  );
}
