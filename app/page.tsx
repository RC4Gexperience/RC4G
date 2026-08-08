const facebook = {
  posts:  [
    ["Presentation", "https://www.facebook.com/permalink.php?story_fbid=pfbid02Qaa8YoWxqKUaXvimVyALVt16cXCJCqBFPiLCSyEkCSpsDtQuuGs4CU7yt3gQtUsZl&id=61592446130825"],
    ["developpement du logiciel", "https://www.facebook.com/reel/1817411546089326/"],
    ["Le prototype", "https://www.facebook.com/reel/2316365859201616/"],
    ["Interface PC et Application", "https://www.facebook.com/reel/4318260528386426/"],
    ["Le choix du vehicule", "https://www.facebook.com/permalink.php?story_fbid=pfbid0rpCQdo91EqBoM2fAqcLYX2aA7RMzK1v5FyKbm8bLMRSqw7WaPNZgbkGBKKbcnEB6l&id=61592446130825"],
    ["Unboxing et decouverte", "https://www.facebook.com/reel/1363102938502122/"],
    ["1er vidéo embarqué", "https://www.facebook.com/share/v/19HfTBx5MB/"],
  ],
};

const tech = [
  ["01", "Pilotage à distance", "Une manette ou autres, envoie sur le PC les commandes à travers Internet, avec arrêt de sécurité en cas de coupure."],
  ["02", "Relais Android", "Le téléphone embarqué relie la station de pilotage à l’ESP32 par USB OTG et transmet les commandes au véhicule."],
  ["03", "Vidéo et audio en direct", "Retour caméra à faible latence, son du véhicule, enregistrement et communication vocale dans les deux sens."],
  ["04", "Interface de pilotage", "Vidéo, état des connexions, commandes, qualité, température et horizon artificiel réunis sur un seul écran."],
];

const milestones = [
  ["Validé", "Prototype roulant", "Propulsion, direction et sécurités testées sur une première voiture."],
  ["Validé", "Chaîne complète", "Manette, interface PC, réseau 4G, application Android, vidéo et audio fonctionnent ensemble."],
  ["En cours", "Absima Hilux 1/10", "Le nouveau châssis 4x4 est arrivé. L’intégration propre du système RC4G se prépare."],
  ["À venir", "Caméra pan-tilt", "Une caméra motorisée et une électronique protégée prendront place sous la carrosserie."],
  ["À terme", "Lunettes FPV et volant", "Pour une immersion totale avec un poste de pilotage complet. Lunettes FPV ou écran panoramique"],
];

const social = {
  facebook: "https://www.facebook.com/profile.php?id=61592446130825",
  tiktok: "https://www.tiktok.com/@rc4g_experience"
};

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#accueil" aria-label="RC4G Expérience — accueil">
          <img src="/logo-rc4g.png" alt="" />
          <span>RC4G <b>Expérience</b></span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projet">Projet</a>
          <a href="#technologie">Technologie</a>
          <a href="#journal">Journal</a>
          <a href="#vision">Vision</a>
        </nav>
        <a className="nav-cta" href="#contact">Contact</a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Projet expérimental • France</div>
          <h1>Piloter.<br /><em>Sans frontière.</em></h1>
          <p className="hero-lead">
            Une voiture RC, une connexion 4G et une station de pilotage complète.
            RC4G transforme la conduite à distance en véritable expérience immersive.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projet">Découvrir le projet <span>↘</span></a>
            <a className="button ghost" href={social.facebook} target="_blank" rel="noreferrer">Suivre l’aventure <span>↗</span></a>
          </div>
          <div className="hero-stats">
            <div><strong>4G</strong><span>Connexion distante</span></div>
            <div><strong>360°</strong><span>Expérience à bord</span></div>
            <div><strong>1:10</strong><span>Nouveau châssis</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="/hilux-angle-hero.jpg"
              alt="Absima Hilux RC4G en franchissement sur les pierres"
              width="1400"
              height="1050"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="photo-label"><span>01</span> NOUVELLE BASE 4×4</div>
          </div>
          <div className="hero-meta">
            <div className="hero-logo">
              <img src="/logo-rc4g.png" alt="RC4G Expérience" />
            </div>
            <div className="telemetry-card">
              <div><span className="live-dot" /> SYSTÈME</div>
              <strong>PROTOCOLE ACTIF</strong>
              <small>MANETTE ↔ PC ↔ 4G ↔ ANDROID ↔ ESP32 ↔ VEHICULE</small>
            </div>
          </div>
        </div>
      </section>

      <section className="status-strip" aria-label="État actuel du projet">
        <div>
          <span className="status-pulse" />
          <p><small>EN CE MOMENT</small><strong>Le Hilux est arrivé.</strong></p>
        </div>
        <p>Le prototype est validé. Prochaine étape : intégrer proprement l’électronique et le téléphone dans le nouveau 4x4.</p>
        <a href="#journal">Voir l’avancement →</a>
      </section>

      <section className="section project" id="projet">
        <div className="section-heading">
          <span className="section-number">01 / LE PROJET</span>
          <h2>Une radiocommande<br />qui traverse Internet.</h2>
        </div>
        <div className="project-copy">
          <p className="large">
            RC4G est né d’une idée simple : pouvoir conduire une vraie voiture radiocommandée
            depuis un ordinateur, où que l’on se trouve.
          </p>
          <p>
            Le projet réunit mécanique RC, électronique, application Android et logiciel PC.
            Un téléphone embarqué apporte la 4G, la caméra, le micro, les capteurs et le lien
            USB avec le contrôleur de la voiture.
          </p>
          <p>
            Aujourd’hui, toute la chaîne a déjà été validée sur un véhicule test. Le nouveau
            terrain de jeu est un Absima Hilux 4x4 à l’échelle 1/10.
          </p>
        </div>
      </section>

      <section className="hilux-gallery" aria-label="Le Hilux RC4G">
        <figure className="gallery-main">
          <img src="/hilux-crawl.jpg" alt="Hilux RC4G sable vu de face en franchissement" />
          <figcaption><span>ABSIMA HILUX 1/10</span><strong>La nouvelle base du projet.</strong></figcaption>
        </figure>
        <figure>
          <img src="/hilux-front.jpg" alt="Vue avant rapprochée du Hilux RC4G" />
        </figure>
        <figure>
          <img src="/hilux-rear.jpg" alt="Vue arrière de la benne du Hilux RC4G" />
        </figure>
      </section>

      <section className="section dark" id="technologie">
        <div className="section-heading compact">
          <span className="section-number cyan">02 / TECHNOLOGIE</span>
          <h2>Une chaîne complète.<br />Pensée comme un cockpit.</h2>
          <p>Chaque maillon est surveillé. Si la liaison se coupe, la voiture s’arrête.</p>
        </div>
        <div className="tech-grid">
          {tech.map(([number, title, description]) => (
            <article className="tech-card" key={number}>
              <span>{number}</span>
              <div className="tech-icon" aria-hidden="true">{number === "01" ? "⌁" : number === "02" ? "⇄" : number === "03" ? "◉" : "⌗"}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="data-flow" aria-label="Chaîne de communication">
          <span>MANETTE</span><i>→</i><span>PC</span><i>→</i><span>4G</span><i>→</i><span>ANDROID</span><i>→</i><span>ESP32</span><i>→</i><span>VÉHICULE</span>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading">
          <span className="section-number">03 / AVANCEMENT</span>
          <h2>Du jouet de test<br />au Hilux 4x4.</h2>
        </div>
        <div className="timeline">
          {milestones.map(([status, title, description], index) => (
            <article key={title}>
              <div className="timeline-index">0{index + 1}</div>
              <div>
                <span className={status === "Validé" ? "tag done" : "tag"}>{status}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section journal" id="journal">
        <div className="journal-head">
          <div>
            <span className="section-number">04 / JOURNAL DE BORD</span>
            <h2>Le projet,<br />sans filtre.</h2>
          </div>
          <div>
            <p>Essais, avancées, erreurs et bonnes surprises : je partage la construction du projet au fur et à mesure sur Facebook.</p>
            <a className="text-link" href={social.facebook} target="_blank" rel="noreferrer">Voir la page RC4G Expérience ↗</a>
          </div>
        </div>
        <div className="post-grid">
          {facebook.posts.map(([title, url], index) => (
            <a className="post-card" href={url} target="_blank" rel="noreferrer" key={url}>
              <div className={`post-visual visual-${index + 1}`}>
                <span>RC4G</span>
                <b>0{index + 1}</b>
                <i>▶</i>
              </div>
              <div>
                <small>FACEBOOK • ÉPISODE 0{index + 1}</small>
                <h3>{title}</h3>
                <span>Regarder ↗</span>
              </div>
            </a>
          ))}
        </div>
        <p className="photo-note">Retrouvez les essais et les prochaines étapes de l’intégration sur Facebook.</p>
      </section>

      <section className="vision" id="vision">
        <div className="vision-bg" aria-hidden="true">RC4G</div>
        <div>
          <span className="section-number orange">05 / LA VISION</span>
          <h2>Et si piloter une voiture RC devenait une expérience accessible de partout ?</h2>
          <p>
            À terme, RC4G Expérience pourrait réunir terrain réel, postes avec volant et pédales,
            lunettes FPV et accès à distance depuis Internet. On ne regarderait plus une voiture
            évoluer : on prendrait place à son bord.
          </p>
          <div className="vision-points">
            <span>Sessions sur place</span>
            <span>Pilotage à distance</span>
            <span>Immersion FPV</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <span className="section-number">RESTER CONNECTÉ</span>
          <h2>Suivez la suite<br />de l’aventure.</h2>
        </div>
        <div className="contact-actions">
          <small>ÉCRIRE AU PROJET</small>
          <a href="mailto:contact@rc4g.fr">
           <strong>contact@rc4g.fr</strong>
            <span>↗</span>
          </a> 
          <small>SUIVRE LES COULISSES</small>
          <a href={social.facebook} target="_blank" rel="noreferrer">            
            <strong>Facebook</strong>
            <span>↗</span>
          </a>          
           <a href={social.tiktok} target="_blank" rel="noreferrer">            
            <strong>Tiktok</strong>
            <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/logo-rc4g.png" alt="" />
          <span>RC4G Expérience</span>
        </div>
        <p>Projet expérimental indépendant — une idée d’Alexandre Saurat.</p>
        <p>© 2026 RC4G Expérience</p>
      </footer>
    </main>
  );
}
