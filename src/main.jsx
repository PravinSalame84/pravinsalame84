import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Smartphone, BrainCircuit, Menu, ExternalLink } from 'lucide-react';
import './style.css';

const photo = 'https://raw.githubusercontent.com/PravinSalame84/pravinsalame84/main/assets/profile-photo.jpg';
const projects = [
  { n:'01', name:'CremaxTech', type:'Digital solutions · Web development', desc:'A digital solutions brand focused on modern, thoughtful web experiences and practical software for businesses.', tags:['React','JavaScript','UI / UX'], link:'https://github.com/PravinSalame84/CremaxTech', label:'View repository', icon:'✳' },
  { n:'02', name:'CremaxInvoice', type:'Product · Invoicing', desc:'An invoice management product designed to make billing simpler for freelance developers and small businesses.', tags:['React','Material UI','Product'], link:'https://cremaxinvoice.com', label:'Visit product', icon:'↗' },
  { n:'03', name:'Review Reply Manager', type:'AI · Workflow automation', desc:'An AI-assisted workflow for drafting thoughtful review replies and managing customer feedback.', tags:['Cloudflare Workers','Gemini API','JavaScript'], link:'https://github.com/PravinSalame84/review-reply-manager', label:'View repository', icon:'✧' },
  { n:'04', name:'AFSchool', type:'Web application · Education', desc:'A school-focused web project built around practical education needs and accessible digital experiences.', tags:['Web development','UI'], link:'https://github.com/PravinSalame84/AFSchool', label:'View repository', icon:'⌂' },
  { n:'05', name:'VoiceNote AI', type:'Exploration · Offline-first AI', desc:'An offline-first concept for turning recorded conversations into useful, structured notes with speech technology.', tags:['Audio','Speech-to-text','AI'], link:'mailto:pravinsalamengp@gmail.com?subject=VoiceNote%20AI', label:'Discuss project', icon:'◉' },
  { n:'06', name:'Games & Experiments', type:'Creative coding · Interactive web', desc:'A collection of interactive coding experiments and web development projects.', tags:['React','TypeScript','JavaScript'], link:'https://github.com/PravinSalame84/Games', label:'View repository', icon:'⌘' }
];
const skills = ['React.js','React Native','JavaScript','TypeScript','Vue.js','Node.js','Express','MongoDB','Firebase','Material UI','HTML & CSS','Cloudflare','Git & GitHub','Android','iOS','AI integration'];
const fade = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} };
function App(){
 const [menu,setMenu] = React.useState(false);
 return <div className="app">
  <div className="grain"/>
  <header className="nav">
   <a className="brand" href="#home"><span className="brand-mark">P.</span><span>PRAVIN SALAME<small>DEVELOPER / BUILDER</small></span></a>
   <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu"><Menu size={20}/></button>
   <nav className={menu?'nav-links open':'nav-links'}>{[['About','#about'],['Work','#work'],['Skills','#skills'],['Contact','#contact']].map(([t,h])=><a key={t} href={h} onClick={()=>setMenu(false)}>{t}</a>)}<a className="nav-cta" href="mailto:pravinsalamengp@gmail.com">Let's talk <ArrowUpRight size={15}/></a></nav>
  </header>
  <main id="home">
   <section className="hero section-wrap">
    <motion.div className="hero-copy" initial="hidden" animate="show" variants={fade}>
     <div className="eyebrow"><span className="live-dot"/> AVAILABLE FOR MEANINGFUL COLLABORATIONS</div>
     <h1>Building digital<br/><span className="gradient-text">experiences</span><br/>that matter<span className="period">.</span></h1>
     <p className="hero-intro">I'm <strong>Pravin Salame</strong> — a software developer and product builder crafting web, mobile and AI-powered experiences that solve real problems.</p>
     <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="mailto:pravinsalamengp@gmail.com"><Mail size={16}/> Get in touch</a></div>
     <div className="hero-meta"><span><MapPin size={14}/> Nagpur, India</span><span className="meta-divider"/> <span>React · Mobile · AI</span></div>
    </motion.div>
    <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}>
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="portrait-frame"><img src={photo} alt="Pravin Salame" onError={e=>{e.currentTarget.style.display='none'}}/><div className="portrait-fallback">PS</div></div>
      <div className="float-card card-top"><span className="mini-icon"><Code2 size={16}/></span><span>Frontend engineer<small>React · JavaScript</small></span></div>
      <div className="float-card card-bottom"><span className="mini-icon purple"><BrainCircuit size={16}/></span><span>Exploring AI<small>Offline-first · Automation</small></span></div>
      <div className="visual-caption">DESIGN MINDED. ENGINEERING LED.</div>
    </motion.div>
    <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
   </section>
   <section className="ticker" aria-label="Technologies"><div className="ticker-track">{[...skills,...skills].map((s,i)=><span key={i}>{s}<i>✳</i></span>)}</div></section>
   <section className="section-wrap about section" id="about">
    <motion.div className="section-kicker" initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}>01 / A LITTLE ABOUT ME</motion.div>
    <div className="about-grid"><motion.h2 initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}>Curiosity into<br/><span className="muted">things people</span><br/>can use.</motion.h2>
     <motion.div className="about-copy" initial="hidden" whileInView="show" viewport={{once:true}} variants={fade}><p className="large-copy">I enjoy turning everyday challenges into simple, useful software.</p><p>My work is rooted in frontend engineering, with a growing focus on cross-platform mobile development, backend systems and applied AI. I care about thoughtful interfaces, reliable implementation and products that make someone's day a little easier.</p><p>I'm continuously learning, experimenting and building — from business tools to offline-first AI concepts.</p><div className="about-links"><a href="https://github.com/PravinSalame84" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/pravin-s-7409a280/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={14}/></a></div></motion.div>
    </div>
   </section>
   <section className="section-wrap work section" id="work">
    <div className="section-head"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things I've <span className="gradient-text">built.</span></h2></div><p>A selection of products, experiments<br/>and ideas brought to life.</p></div>
    <div className="project-grid">{projects.map((p,i)=><motion.article className="project-card" key={p.n} initial="hidden" whileInView="show" viewport={{once:true,amount:.18}} variants={{...fade,show:{...fade.show,transition:{...fade.show.transition,delay:i*.07}}}}>
      <div className="project-top"><span className="project-number">{p.n} / 06</span><span className="project-symbol">{p.icon}</span></div><div className="project-type">{p.type}</div><h3>{p.name}</h3><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.link} target={p.link.startsWith('mailto:')?'_self':'_blank'} rel="noreferrer">{p.label}<ArrowUpRight size={16}/></a>
     </motion.article>)}</div>
   </section>
   <section className="section-wrap skills-section section" id="skills">
    <div className="section-kicker">03 / TOOLS OF THE TRADE</div><div className="skills-grid"><div><h2>My digital<br/><span className="muted">toolkit.</span></h2><p className="skills-note">The technologies I use, explore and keep sharpening.</p></div><div className="skill-cloud">{skills.map((s,i)=><motion.span key={s} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.035}}>{s}</motion.span>)}</div></div>
    <div className="focus-row"><div><Code2/><span>WEB ENGINEERING<small>Interfaces & experiences</small></span></div><div><Smartphone/><span>MOBILE DEVELOPMENT<small>Cross-platform applications</small></span></div><div><Sparkles/><span>AI & EXPERIMENTS<small>Useful intelligent workflows</small></span></div></div>
   </section>
   <section className="section-wrap contact section" id="contact">
    <div className="contact-panel"><div className="section-kicker">04 / HAVE SOMETHING IN MIND?</div><h2>Let's make<br/><span className="gradient-text">it happen.</span></h2><p>Have a product idea, collaboration in mind or an interesting problem to solve? I'd love to hear about it.</p><a className="button primary" href="mailto:pravinsalamengp@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-glow"/></div>
   </section>
  </main>
  <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>PRAVIN SALAME<small>MADE WITH CURIOSITY</small></span></a><span>© {new Date().getFullYear()} Pravin Salame</span><div><a href="https://github.com/PravinSalame84" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/pravin-s-7409a280/" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:pravinsalamengp@gmail.com" aria-label="Email"><Mail size={17}/></a></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
