import { Brand } from './Brand'
import { useState } from 'react'
import { Icon } from './Icon'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header"><div className="container header-inner">
    <Brand/>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    <nav id="main-nav" aria-label="Main navigation" className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}><a href="#about">About</a><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#contact">Contact</a><a className="button small" href="#download" aria-label="Go to the Espashho APK download section"><Icon name="android"/> Go to APK <Icon name="arrow"/></a></nav>
  </div></header>
}
