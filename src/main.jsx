import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "FAQs", href: "#faqs" },
  { label: "Personal", href: "#personal" },
  { label: "Corporate", href: "#corporate" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const benefits = [
  {
    title: "Comprehensive Expertise",
    body: "From personal taxes to corporate compliance, we handle the full picture so you can focus on work, family, and growth without tax agency worry.",
    tag: "Personal | Business",
  },
  {
    title: "Cross-Border Solutions",
    body: "Canadian and U.S. tax experience helps clients keep cross-border filings, payroll, business activity, and personal obligations clear.",
    tag: "Canada | U.S.A",
  },
  {
    title: "Strategic Advantage",
    body: "Every file is approached with planning discipline: claim optimization, audit readiness, and a practical path to better financial decisions.",
    tag: "Planning | Compliance",
  },
];

const personalServices = [
  {
    title: "Canadian Personal Tax Return Filing",
    image: "/assets/tax-filing.png",
    detail:
      "Accurate T1 preparation for employment, self-employment, rental, investment, and family situations with deduction and credit review.",
  },
  {
    title: "U.S. Tax Filing for Canadians",
    image: "/assets/us-tax.png",
    detail:
      "Support for Canadians with U.S. filing obligations, cross-border income, foreign disclosure questions, and coordinated planning needs.",
  },
  {
    title: "Tax Compliance Assurance",
    image: "/assets/tax-compliance.png",
    detail:
      "Review, response, and documentation support for CRA letters, prior filings, missing slips, and unresolved personal tax matters.",
  },
  {
    title: "Non-Resident Taxation",
    image: "/assets/non-resident.png",
    detail:
      "Advice for non-residents and newcomers dealing with Canadian source income, property, departure matters, and withholding rules.",
  },
  {
    title: "Audit Readiness Services",
    image: "/assets/audit-ready.png",
    detail:
      "Organized records, issue spotting, and response preparation so audits and reviews can be handled calmly and defensibly.",
  },
];

const corporateServices = [
  "10-Year Tax Review",
  "Canadian Business Tax Return Filing",
  "U.S. Business Tax Filings",
  "GST, Payroll, and WSIB Filings",
  "Fractional CFO Services",
  "Business Sale and Succession Planning",
  "Business Incorporation",
  "Foreign Income Reporting",
  "SR&ED Support",
  "Valuations",
];

const specializedServices = [
  {
    title: "Pre-Construction Assignment and HST Solutions",
    image: "/assets/non-resident.png",
    body: "GST/HST review, rebate support, and planning around property transactions where details can change the outcome.",
  },
  {
    title: "U.S. Tax Services for Canadians",
    image: "/assets/us-tax.png",
    body: "Coordinated Canada-U.S. filings and guidance for individuals, business owners, and mobile professionals.",
  },
  {
    title: "Rebate Filing and Property Declarations",
    image: "/assets/piggy-bank.png",
    body: "Structured support for rebates, declarations, and compliance-sensitive property documents.",
  },
  {
    title: "Student Tax Return Special",
    image: "/assets/about-desk.png",
    body: "Simple, cost-conscious filing support for students and recent graduates building good habits early.",
  },
];

const insights = [
  {
    kind: "Article",
    title: "Smart Tax Strategies to Keep More of Your Hard-Earned Money",
    body: "How a planned review can uncover missed credits, unused deductions, and avoidable compliance risk.",
  },
  {
    kind: "Guide",
    title: "How to Optimize Your Business for Financial Growth",
    body: "Cash flow, reporting, and tax planning moves that give owners a clearer path through the year.",
  },
  {
    kind: "Update",
    title: "Understanding the Latest Tax Changes",
    body: "The practical changes individuals and businesses should review before their next filing cycle.",
  },
];

const testimonials = [
  {
    quote:
      "I have had a great experience with Dinesh Singh CPA. Their clear communication and ability to simplify complex financial matters have made managing my finances stress-free. Highly recommend.",
    person: "Josh L.",
    meta: "CEO - April 2024",
    image: "/assets/testimonial-dark.png",
  },
  {
    quote:
      "Dinesh's costs were really reasonable and the work was done incredibly quickly. I will definitely be using him moving forward.",
    person: "Murad Antia",
    meta: "March 16, 2023",
    image: "/assets/testimonial-dark-alt.png",
  },
];

const faqs = [
  {
    q: "Can you review past tax years?",
    a: "Yes. The site concept centers on a 10-year tax review for missed deductions, credits, and filing issues. The review is positioned as the starting point for finding recoverable value.",
  },
  {
    q: "Do you handle both personal and corporate tax?",
    a: "Yes. Dinesh CPA supports personal income tax, corporate tax, payroll, HST, audit readiness, planning, and advisory work.",
  },
  {
    q: "Can you support cross-border situations?",
    a: "Yes. The service model includes Canadian, U.S., and international client support, with emphasis on coordinated filings and cross-border clarity.",
  },
];

function Logo({ large = false }) {
  return (
    <a className={`logo ${large ? "logoLarge" : ""}`} href="#top" aria-label="Dinesh CPA home">
      <span className="logoMark" aria-hidden="true">
        <span />
      </span>
      <strong>Dinesh CPA</strong>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader" id="top">
      <div className="marketsBar" aria-label="Market data strip">
        {["Ethereum 1734.4", "S&P 500 4538.9", "EUR to USD 1.0907", "US 100 14373.2", "NVDA 485.48", "META 300.15"].map(
          (item, index) => (
            <span key={item} className={index % 2 ? "down" : "up"}>
              {item}
            </span>
          ),
        )}
        <a href="#insights">Visit Markets Data</a>
      </div>
      <nav className="navShell" aria-label="Primary navigation">
        <Logo />
        <button className="menuButton" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`navLinks ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="navActions">
          <label className="searchBox">
            <span className="srOnly">Search</span>
            <input placeholder="Last Name" />
            <Search size={14} />
          </label>
          <a className="signIn" href="#contact">
            Sign In
          </a>
          <Bell size={17} aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="heroSection">
      <div className="heroMedia" style={{ backgroundImage: "url('/assets/hero-finance.png')" }}>
        <div className="heroCopy">
          <span>Tax strategy, filings, and advisory</span>
          <h1>Clarity for complex personal and business tax</h1>
          <p>
            Dinesh CPA helps individuals, owners, and cross-border clients uncover missed savings, stay compliant, and
            plan the next move with confidence.
          </p>
          <div className="heroActions">
            <a className="button light" href="#contact">
              Book Free 10-Year Review
            </a>
            <a className="textLink" href="#personal">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="introPanel">
      <div className="imagePanel">
        <img src="/assets/about-desk.png" alt="Accounting desk with notebook, calculator, pen, and coffee" />
      </div>
      <div className="introCopy">
        <h2>
          Experience Confidence
          <span>in Your Financial Future</span>
        </h2>
        <p>
          With 25 years of experience across multiple industries, DineshCPA delivers exceptional personal and corporate
          accounting solutions, leveraging the latest technology to enhance business operations.
        </p>
        <p>
          Serving clients in Canada, the U.S.A, and internationally, our team combines precision with strategic
          foresight to maximize tax efficiency and peace of mind.
        </p>
        <a className="button dark" href="#contact">
          Learn more about us
        </a>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section narrow" id="benefits">
      <SectionTitle eyebrow="Core Benefits" title="Find Cash Flow You are Missing" />
      <div className="benefitGrid">
        {benefits.map((benefit) => (
          <article className="outlineCard" key={benefit.title}>
            <h3>{benefit.title}:</h3>
            <p>{benefit.body}</p>
            <span>{benefit.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReviewCta() {
  return (
    <section className="reviewCta">
      <div className="reviewText">
        <strong>Maximize Your Tax Savings:</strong>
        <h2>Free 10-Year Tax Review</h2>
        <a className="button dark" href="#contact">
          Here's the next step.
        </a>
      </div>
      <img src="/assets/piggy-bank.png" alt="Piggy bank held in a hand" />
    </section>
  );
}

function ServiceCard({ service, active, onToggle }) {
  return (
    <article className={`serviceCard ${active ? "active" : ""}`} style={{ backgroundImage: `url('${service.image}')` }}>
      <div>
        <h3>{service.title}</h3>
        <p>{service.detail || service.body}</p>
      </div>
      <button onClick={onToggle} aria-label={`Show details for ${service.title}`}>
        {active ? <Minus size={24} /> : <Plus size={24} />}
      </button>
    </article>
  );
}

function PersonalSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="personalSection" id="personal">
      <div className="pageHeading">
        <h2>Personal Taxes</h2>
      </div>
      <div className="personalHero" style={{ backgroundImage: "url('/assets/personal-hero.png')" }}>
        <h2>
          <span>Think Your Taxes Are Maximized?</span>
          <strong>Let Us Show You More.</strong>
        </h2>
      </div>
      <div className="floatingNote">
        <p>
          DineshCPA offers tailored personal tax services for Canadians, Americans, and clients worldwide, combining
          precision with a strategic approach and technology to uncover every possible tax advantage.
        </p>
      </div>
      <SectionTitle
        eyebrow="Core Services"
        title="10-Year Tax Review: Worried About Past Tax Mistakes?"
        subtitle="We'll Set the Record (and Savings) Straight."
      />
      <p className="centerCopy">
        A risk-free way to revisit your taxes with no upfront cost. We uncover missed deductions, with only a small
        admin fee and a 10% contingency on recovered funds.
      </p>
      <SectionTitle eyebrow="Taxes, audits, strategic planning and more..." title="Giving you the confidence to focus on what matters" />
      <div className="serviceRail" aria-label="Personal tax services">
        {personalServices.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            active={active === index}
            onToggle={() => setActive(active === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}

function CorporateSection() {
  return (
    <section className="darkBand" id="corporate">
      <SectionTitle eyebrow="Specialized Services" title="DineshCPA offers tailored solutions" light />
      <div className="specialGrid">
        {specializedServices.map((service, index) => (
          <ServiceCard key={service.title} service={service} active={index === 0} onToggle={() => {}} />
        ))}
      </div>
      <div className="corporateDepth">
        <div>
          <h3>Corporate services with year-round discipline</h3>
          <p>
            From incorporation to payroll remittances, HST, T2 returns, audit support, and succession planning, the work
            is organized around clean records, timely filing, and practical owner-level decisions.
          </p>
        </div>
        <ul>
          {corporateServices.map((service) => (
            <li key={service}>
              <Check size={17} />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="section" id="insights">
      <SectionTitle eyebrow="Blog" title="Insights & Resources for Smart Tax Planning" />
      <div className="insightGrid">
        {insights.map((post, index) => (
          <article className="insightCard" key={post.title}>
            <div className="insightImage" style={{ backgroundImage: `url('/assets/${["about-desk.png", "audit-ready.png", "contact-typing.png"][index]}')` }} />
            <span>{post.kind}</span>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <a href="#contact">Learn More</a>
          </article>
        ))}
      </div>
      <a className="button dark centered" href="#contact">
        More Insights
      </a>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];
  return (
    <section className="testimonialSection" style={{ backgroundImage: `url('${current.image}')` }}>
      <button
        className="testimonialArrow left"
        aria-label="Previous testimonial"
        onClick={() => setIndex((value) => (value + testimonials.length - 1) % testimonials.length)}
      >
        <ArrowLeft size={28} />
      </button>
      <div className="testimonialContent">
        <SectionTitle eyebrow="Testimonials" title="What Our Clients Are Saying" light />
        <blockquote>
          <strong>{current.quote.split(".")[0]}.</strong>
          <span>{current.quote.split(".").slice(1).join(".").trim()}</span>
        </blockquote>
        <p>
          <b>{current.person}</b>
          <small>{current.meta}</small>
        </p>
      </div>
      <button
        className="testimonialArrow right"
        aria-label="Next testimonial"
        onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
      >
        <ArrowRight size={28} />
      </button>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="contactSection" id="contact">
      <div className="pageHeading">
        <h2>Contact Us</h2>
      </div>
      <div className="contactHero" style={{ backgroundImage: "url('/assets/contact-typing.png')" }}>
        <h2>Get In Touch</h2>
        <a className="button dark" href="#message-form">Questions?</a>
      </div>
      <div className="contactCards">
        <article className="outlineCard">
          <Clock3 size={44} />
          <h3>Company Information:</h3>
          <p>Dinesh Singh, CPA</p>
          <p>Dinesh Professional Corporation</p>
        </article>
        <article className="outlineCard">
          <MapPin size={48} />
          <h3>Address:</h3>
          <p>2985 Drew Road, Suite 216</p>
          <p>Mississauga, ON L4T 0A7</p>
        </article>
        <article className="outlineCard">
          <Smartphone size={45} />
          <h3>Call or Email</h3>
          <p>+1 (855) DINESH1</p>
          <p>info@dineshcpa.ca</p>
        </article>
      </div>
      <div className="contactGrid">
        <form
          id="message-form"
          className="contactForm"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <input required placeholder="Name *" />
          <input required type="email" placeholder="Email Address *" />
          <input placeholder="Phone Number" />
          <textarea required placeholder="Message *" />
          <button className="button dark" type="submit">
            {submitted ? "Message Ready" : "Message"}
          </button>
        </form>
        <div className="mapFrame">
          <img src="/assets/map.png" alt="Map showing the Mississauga office area" />
          <span><MapPin size={22} /></span>
        </div>
      </div>
      <div className="credentialStrip" aria-label="Professional credential logos">
        {["credential-cpa-ca.png", "credential-cpa.png", "credential-agent.png", "credential-cbta.png", "credential-hlb.png"].map((asset) => (
          <img key={asset} src={`/assets/${asset}`} alt="" />
        ))}
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faqSection" id="faqs">
      <SectionTitle eyebrow="FAQs" title="Clear answers before you start" />
      <div className="faqList">
        {faqs.map((item, index) => (
          <article className="faqItem" key={item.q}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              {item.q}
              <ChevronDown className={open === index ? "rotated" : ""} size={22} />
            </button>
            {open === index && <p>{item.a}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const subscribed = useMemo(() => email.includes("@"), [email]);
  return (
    <footer className="siteFooter">
      <div className="footerCta">
        <div>
          <h2>Ready to optimize your financial future?</h2>
          <p>Discover the value DineshCPA can bring to your personal and business finances.</p>
        </div>
        <Logo large />
      </div>
      <div className="footerGrid">
        <div>
          <a className="button dark" href="#contact">Book Free 10-Year Review</a>
          <a className="button ghost" href="#contact">Schedule a Consultation</a>
          <div className="socials">
            {["ig", "f", "yt", "in"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="finePrint">© 2026 Dinesh CPA. All rights reserved.</p>
        </div>
        <div className="footerList">
          <h3>Home</h3>
          <a href="#personal">Personal</a>
          <a href="#corporate">Corporate</a>
          <a href="#insights">Insights</a>
          <a href="#faqs">FAQs</a>
        </div>
        <div className="footerList">
          <h3>Corporate</h3>
          {corporateServices.slice(0, 8).map((item) => (
            <a href="#corporate" key={item}>{item}</a>
          ))}
        </div>
        <form
          className="subscribeForm"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h3>Subscribe to our email</h3>
          <p>Stay informed with the most recent financial and business updates by subscribing to our blog.</p>
          <div>
            <input placeholder="First & Last Name" />
            <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <button type="submit">{subscribed ? "Signed up" : "Sign up"}</button>
          </div>
          <small>Dinesh CPA Terms of Service and Privacy Statement</small>
        </form>
      </div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`sectionTitle ${light ? "light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <strong>{subtitle}</strong>}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Benefits />
        <ReviewCta />
        <PersonalSection />
        <CorporateSection />
        <Insights />
        <Testimonials />
        <ContactSection />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
