import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const PAYPAL_URL = 'https://www.paypal.com/ncp/payment/Q6Y4STA844MT4'

function Icon({ name, className = '' }) {
  const paths = {
    lock: <><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3a4 4 0 0 1 0 8"/><circle cx="9" cy="7" r="4"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18m-13 5h2m4 0h2"/></>,
    person: <><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
    message: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 2V11.5A8.5 8.5 0 0 1 9.5 3h3a8.5 8.5 0 0 1 8.5 8.5ZM7 10h8M7 14h5"/></>,
    door: <><path d="M5 21V10a7 7 0 0 1 14 0v11M2 21h20M12 7v14m4-7h.01"/></>,
  }
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function PaymentButton({ compact = false }) {
  return <a className={`payment-button ${compact ? 'payment-button-compact' : ''}`} href={PAYPAL_URL}>
    <span>Payez et validez</span><Icon name="arrow" />
  </a>
}

function App() {
  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className="site-header mx-auto flex items-center justify-between">
      <a className="brand" href="#main" aria-label="La Voix Intime — accueil">
        <img className="brand-logo" src={`${import.meta.env.BASE_URL}images/la-voix-intime-logo.jpeg`} alt="La Voix Intime — Coaching en ligne" width="1600" height="533" />

      </a>
      <span className="header-note flex items-center gap-2"><Icon name="lock" /> Paiement via PayPal</span>
    </header>

    <main id="main" className="page-shell mx-auto">
      <div className="page-heading">
        <div className="journey-label flex items-center gap-2"><span /> Un objectif. Un accompagnement rien que pour vous.</div>
        <h1>COACHING <b translate="no" className="notranslate">"INSIDE"</b> <span>— ONE TO ONE</span></h1>
        <p className="heading-subtitle">1 mois pour vous transformer et passer à l’action.</p>
      </div>

      <div className="content-grid grid items-start">
        <div className="journey-content min-w-0">
          <picture className="hero-picture block overflow-hidden">
            <img className="block w-full" src={`${import.meta.env.BASE_URL}images/coaching-inside-four-weeks.jpeg`} alt="COACHING &quot;INSIDE&quot; ONE TO ONE : une porte bleu profond, une clé dorée et un espace chaleureux ouvert sur la mer au coucher du soleil." width="1600" height="903" fetchPriority="high" />
          </picture>
          <section className="journey-description" aria-labelledby="journey-title">
            <div className="section-title flex items-center gap-3"><span className="little-star" aria-hidden="true">✧</span><h2 id="journey-title">Un mois intensif ! Vous et moi ! Activez votre TRANSFORMATION !</h2></div>
            <p><strong className="offer-name">COACHING <span translate="no" className="notranslate">"INSIDE"</span></strong> <span translate="no" className="notranslate">ONE TO ONE</span> est un accompagnement <strong>100 % individuel sur 4 semaines</strong>, conçu pour travailler en profondeur sur votre objectif et créer des changements concrets dans votre vie.</p>
            <p className="experience-line">Pas de théorie supplémentaire :<br className="mobile-break" /> vous expérimentez, vous ressentez, vous agissez.</p>
            <div className="practices flex flex-wrap" aria-label="Les pratiques de l’accompagnement">
              {['Jeux', 'Défis', 'Expériences', 'Pratiques'].map(item => <span key={item}>{item}</span>)}
            </div>
            <div className="intention"><span className="intention-label">Un accompagnement intensif</span><p>Vous reconnectez à vos ressources, votre intuition et votre puissance, dépassez vos blocages et créez votre propre réalité.</p></div>
          </section>
        </div>

        <aside id="inscription" className="payment-card" aria-labelledby="payment-title">
          <div className="card-topline flex items-center justify-between"><span>Votre inscription</span><span className="group-badge flex items-center gap-1.5"><Icon name="person" /> 100 % individuel</span></div>
          <h2 id="payment-title">Ouvrez la porte<br /> à votre TRANSFORMATION !</h2>
          <p className="card-intro">Un mois pour vous, un objectif précis,<br />un accompagnement à chaque étape.</p>
          <div className="program">
            <div className="program-item flex gap-3"><span className="program-icon"><Icon name="person" /></span><div><strong>4 coachings individuels</strong><span>1 par semaine, pendant 1 mois</span></div></div>
            <div className="program-item flex gap-3"><span className="program-icon"><Icon name="calendar" /></span><div><strong>Suivi personnalisé au quotidien</strong><span>Un soutien tout au long des 4 semaines</span></div></div>
            <div className="program-item flex gap-3"><span className="program-icon"><Icon name="message" /></span><div><strong>Échanges et ressources</strong><span>Via WhatsApp</span></div></div>
          </div>
          <div className="price-block"><span className="price-label">L’accompagnement complet</span><div className="price">460 <span>€</span></div><span className="price-caption">Pour le mois d’accompagnement</span></div>
          <PaymentButton />
          <div className="paypal-line flex items-center justify-center gap-2"><Icon name="lock" /><span>Paiement avec <strong className="paypal-word">Pay<span>Pal</span></strong></span></div>
          <div className="installments"><Icon name="check" /><p><strong>Envie de payer en plusieurs fois ?</strong>Possibilité de paiement fractionné si vous êtes éligible, à vérifier directement au moment du paiement PayPal.</p></div>
          <p className="redirect-note">Vous serez redirigé vers PayPal pour finaliser votre inscription et votre paiement.</p>
        </aside>
      </div>
      <footer className="site-footer flex items-center justify-between gap-4"><span>La Voix Intime</span><p>COACHING <span translate="no" className="notranslate">"INSIDE"</span> — ONE TO ONE</p><span className="footer-symbol" aria-hidden="true">✧</span></footer>
    </main>
    <div className="mobile-payment"><div><strong>460 €</strong><span>1 mois, 100 % individuel</span></div><PaymentButton compact /></div>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
