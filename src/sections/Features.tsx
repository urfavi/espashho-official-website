import { useState } from 'react'
import { Icon } from '../components/Icon'

const customerFeatures = [
  ['pin', 'Find your kind of space', 'Explore the interactive map. Use search and filters to discover places for study, work, or leisure.'],
  ['sound', 'Get a feel for the environment', 'Explore available noise and light insights, contributed by the community.'],
  ['heart', 'Keep the good places close', 'Save favorites and share your experience through reviews and ratings.'],
  ['sun', 'Contribute to the community', 'Suggest Public Spaces and contribute environmental recordings where eligible.'],
  ['star', 'Make exploring rewarding', 'Take part in supported challenges and rewards, subject to subscription access.'],
  ['book', 'Make it personal', 'Use a personal diary and directions where your subscription access allows.'],
]
const ownerFeatures = [
  ['pin', 'Give your business a place', 'Submit your Business Space for administrative approval and manage it once approved.'],
  ['sound', 'Understand your environment', 'Record smartphone-based noise and light estimates for your Business Space.'],
  ['heart', 'Listen to your customers', 'View customer feedback to understand how visitors experience your space.'],
  ['chart', 'Turn insights into understanding', 'Explore environmental reports and analytics through available business tools.'],
  ['star', 'Create reasons to return', 'Offer events and rewards where your subscription provides access.'],
  ['check', 'Show certification status', 'Make available certification information visible on your Business Space.'],
]
export function Features() {
  const [role, setRole] = useState<'customer' | 'owner'>('customer')
  return <section id="features" className="section pale"><div className="container"><div className="section-heading centered"><span className="eyebrow">MADE FOR YOUR EVERYDAY</span><h2>Practical tools for<br/>informed choices.</h2><p>Explore the tools available to Space Customers<br className="desktop-break"/> and Business Owners.</p></div>
    <div className="role-switch" role="group" aria-label="Choose features by role"><button type="button" aria-pressed={role === 'customer'} onClick={() => setRole('customer')}>Space Customers</button><button type="button" aria-pressed={role === 'owner'} onClick={() => setRole('owner')}>Business Owners</button></div>
    <div className="feature-grid">{(role === 'customer' ? customerFeatures : ownerFeatures).map(([icon, title, text]) => <article className="feature" key={title}><span className="icon-box"><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <p className="fine-print centered">Feature availability depends on your role, subscription, space eligibility, and device capabilities.</p>
  </div></section>
}
