import { Brand } from '../components/Brand'
import { Icon } from '../components/Icon'
import { useEffect, useRef, useState } from 'react'

const privacy = [
  ['Information you provide', 'Depending on your account and features, Espashho may collect your name, email, birth date, gender, phone number, authentication details, and optional profile image. Student verification may require an institution, student number, and ID documents; business verification may require permits and supporting documents. Submitted content includes space information, photos, videos, reviews, ratings, and owner responses.'],
  ['Sensors, recording, and location', 'Microphone samples are processed temporarily on your device to estimate noise levels in dB; raw audio is not retained or uploaded. Light readings in lux come from a supported ambient light sensor. Location-verified recordings may store coordinates, GPS accuracy, verification time, distance from the space, and verification method, alongside space, session, time, readings, recording type, and completion status. Noise estimates are not calibrated measurements.'],
  ['Why information is used and who can see it', 'Information supports accounts, authentication, communication, verification, space listings, environmental insights, and eligible certification evaluation. Shared space content, reviews, ratings, and environmental summaries may be visible to other authenticated users. Authorized owners may see feedback and environmental information for their spaces. Student IDs, permits, and verification documents are for authorized review, not public display.'],
  ['Providers and retention', 'Authentication, storage, email, and payment providers may process limited information needed to operate the service. Espashho keeps transaction and subscription records for service management. Account, space, environmental, verification, and transaction data are retained as needed for their purposes, security, administration, disputes, misuse prevention, and applicable obligations; deletion requests may therefore involve some retention.'],
  ['Your choices and requests', 'You can manage supported account details and disable location, microphone, or sensor permissions in device settings; dependent features may become unavailable. Contact the support address below to request account deletion, access to your personal information, or corrections.'],
  ['App sessions and advertising', 'The app uses authentication tokens or equivalent session storage to maintain sign-in and protect account access. It does not currently integrate advertising trackers.'],
]

const terms = [
  ['Using Espashho and your account', 'By creating an account or using the service, you agree to the app’s Terms of Use. If you do not agree, do not use the service. Provide accurate registration and eligibility information, protect your login credentials, and take responsibility for activity through your account. Notify support if you suspect unauthorized access. Features depend on account type, approval, subscription, and eligibility; business accounts and spaces may require verification and approval.'],
  ['Your submissions and reviews', 'You retain ownership of submitted content and give Espashho permission to store, process, moderate, and display it for its intended feature and visibility. Submit only content you have the right to provide. Shared media, reviews, ratings, and owner responses may appear to authenticated users; IDs and permits are for authorized verification and administration.'],
  ['Responsible participation', 'Do not fabricate reviews or space information, manipulate environmental readings or platform metrics, make misleading certification claims, or misrepresent identity, student status, business details, or authority over a space. Do not submit unlawful, harmful, abusive, misleading, privacy-violating, or copyright-infringing content.'],
  ['Reports and moderation', 'Eligible reviews may be reported for administrative review. You cannot report your own review, and duplicate reports may be restricted. Reports do not guarantee removal or penalties. Depending on the case, responses may include content restrictions, warnings, feature restrictions, suspension, or termination. Enforcement is assessed individually, without automatic outcomes or fixed penalty periods.'],
  ['Subscriptions and service limitations', 'Plan availability, pricing, activation, cancellation, and refunds depend on the implemented subscription and payment flow and applicable provider terms. Availability and accuracy depend on submissions, supported devices, third-party services, and current data. Smartphone noise estimates and sensor-based light readings may differ from professional measurements. Approval does not guarantee that submissions or documents are authentic, complete, or still valid.'],
  ['Choosing a physical space', 'Certifications depend on eligible data, may be re-evaluated or expire, and do not guarantee safety, quality, accessibility, or suitability. You remain responsible for deciding whether a space meets your needs. Read the Terms alongside applicable laws and feature-specific notices. The app’s policy text may be updated when the service or policies change.'],
]

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms of Use'
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
    document.title = `${title} | Espashho`
    heading.current?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => { document.title = 'Espashho — Your quiet space for connection' }
  }, [title])

  return <main id="main" className="legal-page container">
    <a className="text-link legal-back" href="#home"><span aria-hidden="true">&larr;</span> Return to home</a><div className="legal-brand"><Brand linked={false}/></div>
    <span className="eyebrow">PRIVACY AND PLATFORM GUIDELINES</span>
    <h1 ref={heading} tabIndex={-1}>{title}</h1>
    <p className="legal-intro">A concise summary of the Espashho mobile app’s {kind === 'privacy' ? 'Data Privacy Policy' : 'Terms of Use'}. The complete text is available in the app’s Privacy &amp; Terms of Use screen.</p>
    <p className="legal-source">Based on the app policy updated October 12, 2026.</p>
    <div className="legal-sections">{(kind === 'privacy' ? privacy : terms).map(([heading, body], index) => <section key={heading}>
      <h2><span>{String(index + 1).padStart(2, '0')}</span>{heading}</h2><p>{body}</p>
    </section>)}</div>
    <aside className="legal-support"><h2>Contact support</h2><p>For privacy, account, and general support concerns, contact the Espashho team.</p><div className="contact-actions"><a className="contact-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=espasshocontact%40gmail.com&su=Espashho%20Support%20Request" target="_blank" rel="noreferrer" aria-label="Compose an email to Espashho support in Gmail">espashhocontact@gmail.com<Icon name="arrow"/></a><button type="button" className="copy-email" onClick={() => void copySupportEmail()}>{emailCopied ? 'Email copied!' : 'Copy email'}</button></div><p className="contact-help">Opens Gmail in a new tab. You can also copy the address and use any email app.</p></aside>
    <a className="related-policy" href={kind === 'privacy' ? '#terms-of-use' : '#privacy-policy'}><div><span className="eyebrow">RELATED POLICY</span><h2>{kind === 'privacy' ? 'Terms of Use' : 'Privacy Policy'}</h2><p>{kind === 'privacy' ? 'Review account responsibilities, participation guidelines, and service limitations.' : 'Learn about collected information, device permissions, and your privacy choices.'}</p></div><Icon name="arrow"/></a>
  </main>
}
