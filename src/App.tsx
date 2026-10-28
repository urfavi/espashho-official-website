import { Brand } from './components/Brand'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { LegalPage } from './sections/LegalPage'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { Features } from './sections/Features'
import './styles/site.css'

const customerSteps = ['Register or sign in.', 'Explore spaces through the interactive map.', 'View available space information and environmental insights.', 'Save favorites, record where eligible, and join supported activities.']
const ownerSteps = ['Register and submit your business information.', 'Wait for administrative approval.', 'Manage your approved Business Space.', 'View customer engagement, environmental reports, and available business tools.']

function subscribeToHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function App() {
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => '')
  const legalKind = hash === '#privacy-policy' ? 'privacy' : hash === '#terms-of-use' ? 'terms' : null
  const [emailCopied, setEmailCopied] = useState(false)

  const copySupportEmail = async () => {
    const email = 'espasshocontact@gmail.com'
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2500)
    } catch {
      window.prompt('Copy the Espashho support email:', email)
    }
  }

  useEffect(() => {
    if (!legalKind && hash) {
      // Section targets are mounted again when returning from a legal view.
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash, legalKind])
  return <><a className="skip-link" href="#main">Skip to content</a><Header/>{legalKind ? <LegalPage kind={legalKind}/> : <main id="main">
    <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><span className="pill"><span className="status-dot"/> A little quiet. A lot of possibility.</span><h1>Your quiet space<br/>for <span>connection.</span></h1><p>Discover spaces for study, work, and leisure, informed by community-contributed noise and light insights.</p><div className="actions"><a className="button" href="#features">Explore Espashho <Icon name="arrow"/></a><a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↗</span></a></div><div className="android-note"><Icon name="android"/><span>Made for Android <span className="separator">/</span> Version 1.3 available</span></div></div>
    <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="art-label label-top"><Icon name="sound"/><span>A little more quiet</span></div><img className="hero-logo" src="/images/espashhoLogo.png" width="3375" height="3375" alt="Official Espashho logo: a blue map pin with a quiet gesture"/><div className="art-label label-bottom"><Icon name="sun"/><span>A little more clarity</span></div><span className="art-caption">FIND YOUR SPACE. FEEL THE CONNECTION.</span></div></div>
    <div className="container purpose-strip"><span>A space for every part of your day</span><span><Icon name="book"/> Study with focus</span><span><Icon name="chart"/> Work with purpose</span><span><Icon name="sun"/> Unwind your way</span></div></section>
    <section id="about" className="section"><div className="container"><div className="about-intro"><div><span className="eyebrow">A PLACE TO BELONG</span><h2>Good spaces bring<br/>people together.</h2></div><p>Espashho connects people with spaces for study, work, and leisure. Community-contributed noise and light information provides context when choosing a space. Feature availability depends on your role, subscription, eligibility, and device support.</p></div><div className="role-grid"><article className="role-card"><div><span className="eyebrow">FOR SPACE CUSTOMERS</span><h3>Your next favorite<br/>space starts here.</h3><p>Explore your surroundings, discover a place that fits your day, and share insights that help others find theirs.</p><a className="text-link" href="#features">Explore the features <Icon name="arrow"/></a></div><img src="/images/spaceCustomer.png" alt="Official Space Customer illustration" width="3375" height="3375" loading="lazy"/></article><article className="role-card owner-card"><div><span className="eyebrow">FOR BUSINESS OWNERS</span><h3>Help your space<br/>make a connection.</h3><p>Introduce your business, understand your environment, and learn from the people who visit.</p><a className="text-link" href="#how-it-works">Find out how <Icon name="arrow"/></a></div><img src="/images/businessOwner.png" alt="Official Business Owner illustration" width="3375" height="3375" loading="lazy"/></article></div></div></section>
    <Features/>
    <section id="how-it-works" className="section"><div className="container"><div className="section-heading"><span className="eyebrow">FROM DISCOVERY TO CONNECTION</span><h2>Getting started<br/>with Espashho.</h2><p>Choose the account that suits your needs and follow the steps below.</p></div><div className="steps-grid">{[['Space Customers', customerSteps], ['Business Owners', ownerSteps]].map(([title, steps]) => <article className="steps-card" key={title as string}><h3>{title}</h3><ol>{(steps as string[]).map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></article>)}</div>
    <aside className="recording-note"><span className="icon-box"><Icon name="sound"/></span><div><h3>Understanding environmental readings</h3><p>Noise and light values are smartphone-based estimates, not professionally calibrated measurements. Space Customers may record at approved, active Public Spaces. Recording at a Business Space requires the owner’s applicable customer-recording entitlement; availability varies by space.</p></div></aside>
    <details className="screenshot-slot"><summary>Application preview · approved screenshots coming soon</summary><p>This space is reserved for approved, public-safe application screenshots. Explore the feature descriptions above in the meantime.</p></details>
    </div></section>
    <section id="download" className="download-section"><div className="container download-panel" onPointerMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--glow-x', `${event.clientX - bounds.left}px`); event.currentTarget.style.setProperty('--glow-y', `${event.clientY - bounds.top}px`) }}><div className="download-copy"><span className="eyebrow">TAKE ESPASHHO WITH YOU</span><h2>A better space.<br/>Now in your pocket.</h2><p>Discover and connect with spaces through the Espashho Android app.</p><a className="download-status download-link" href="https://github.com/urfavi/espashho-official-website/releases/download/v1.3/espashho-v1.3.apk" aria-label="Download Espashho version 1.3 APK for Android"><Icon name="android"/><div><strong>Download Espashho for Android</strong><span>Version 1.3 APK · 258 MB</span></div><Icon name="arrow"/></a><p className="device-note">Environmental recording requires Android 11 or later, a microphone, an ambient light sensor, and applicable location permissions. Available readings depend on your device’s sensors.</p></div><div className="download-art"><div className="download-visual"><img src="/images/espashhoAPKLogo.png" width="2670" height="2670" alt="Espashho Android app icon" loading="lazy"/><div className="download-signals"><div className="download-signal download-signal-noise"><span className="download-signal-icon"><Icon name="sound"/></span><div><strong>Noise level</strong><span>dB estimates</span></div></div><div className="download-signal download-signal-light"><span className="download-signal-icon"><Icon name="sun"/></span><div><strong>Light level</strong><span>Lux readings</span></div></div></div></div><span className="download-tagline">Your quiet space for connection</span></div></div></section>
    <section id="contact" className="section contact"><div className="container contact-grid"><div><span className="eyebrow">LET’S STAY CONNECTED</span><h2>Contact and support.</h2><p>For privacy, account, and general support concerns, contact the Espashho team.</p><div className="contact-actions"><a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=espasshocontact%40gmail.com&su=Espashho%20Support%20Request" target="_blank" rel="noreferrer" aria-label="Compose an email to Espashho support in Gmail">espashhocontact@gmail.com<Icon name="arrow"/></a><button type="button" className="copy-email" onClick={() => void copySupportEmail()}>{emailCopied ? 'Email copied!' : 'Copy email'}</button></div><p className="contact-help">Opens Gmail in a new tab. You can also copy the address and use any email app.</p></div><div className="legal-card"><h3>Privacy and responsible use</h3><p>Understand how account information is used, manage your privacy choices, and review the guidelines for using Espashho.</p><a className="legal-status" href="#privacy-policy"><span>Privacy Policy</span><span className="legal-cta">Read summary <Icon name="arrow"/></span></a><a className="legal-status" href="#terms-of-use"><span>Terms of Use</span><span className="legal-cta">Read summary <Icon name="arrow"/></span></a></div></div></section>
  </main>}<footer><div className="container footer-top"><Brand/><p>Your quiet space for connection</p><a href="#home" className="footer-back-top"><span>Back to top</span><span className="footer-back-icon" aria-hidden="true">↑</span></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Espashho. All rights reserved.</span><nav className="footer-legal" aria-label="Legal information"><a href="#privacy-policy">Privacy Policy</a><a href="#terms-of-use">Terms of Use</a></nav><span>Discover. Connect. Belong.</span></div></footer></>
}
export default App
