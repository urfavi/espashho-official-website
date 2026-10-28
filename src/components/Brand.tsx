export function Brand({ linked = true }: { linked?: boolean }) {
  const content = <><img className="brand-icon" src="/images/espashhoAPKLogo.png" width="44" height="44" alt=""/><img className="brand-wordmark" src="/images/espashhoWordmark.png" width="2555" height="537" alt="Espashho"/></>
  return linked
    ? <a className="brand" href="#home" aria-label="Espashho home">{content}</a>
    : <span className="brand" aria-label="Espashho">{content}</span>
}
