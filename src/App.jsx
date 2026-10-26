import { useEffect, useRef, useState } from "react";
import { WHATSAPP, TELEFONO_VISIBLE, GRUPOS, MOSTRAR_PRECIOS, PACKS } from "./config.js";
import { AVISO_LEGAL } from "./legal.js";
import { Icon, WhatsAppIcon, Logo } from "./icons.jsx";

const waLink = (mensaje) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
const handleWhatsApp = (mensaje) => window.open(waLink(mensaje), "_blank", "noopener");

function Pack({ p }) {
  const mostrarPrecio = MOSTRAR_PRECIOS || p.otro;
  return (
    <article className="pack" id={`pack-${p.id}`}>
      <div className="badges">
        <span className="badge">{p.categoria}</span>
        {p.destacado && <span className="badge hot">{p.destacado}</span>}
      </div>
      <h3>{p.titulo}</h3>
      {p.subtitulo && <p className="st">{p.subtitulo}</p>}
      <p className="del"><b>Qué recibís</b>{p.entregable}</p>
      <div className="price">
        {mostrarPrecio ? (
          <>
            <strong>{p.precio}</strong>
            {p.detallePrecio && <small>{p.detallePrecio}</small>}
          </>
        ) : (
          <strong className="ask">Consultar honorarios</strong>
        )}
      </div>
      <a className="btn btn-wa" href={waLink(p.mensaje)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon /> Consultar por WhatsApp
      </a>
    </article>
  );
}

function CopyButton({ text }) {
  const [label, setLabel] = useState("Copiar");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("Copiado");
      setTimeout(() => setLabel("Copiar"), 1500);
    } catch {
      setLabel("Seleccioná y copiá");
    }
  };
  return <button className="copy" onClick={copy}>{label}</button>;
}

function Adri() {
  const [open, setOpen] = useState(false);
  const [texto, setTexto] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (open) ref.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const enviar = () => {
    const t = texto.trim();
    handleWhatsApp(t ? `Hola Cra. Alejandra, te escribo desde la web. ${t}` : PACKS.find((p) => p.otro).mensaje);
  };

  return (
    <>
      <button className="adri-fab" aria-expanded={open} aria-controls="adri" onClick={() => setOpen(!open)}>
        <span className="adri-dot" aria-hidden="true" />Hablá con Adri
      </button>
      <div className="adri" id="adri" hidden={!open} role="dialog" aria-label="Adri">
        <div className="adri-h">
          <span className="adri-dot" aria-hidden="true" />
          <div><b>Adri</b><small>Asistente virtual · te conecta con la Cra. Galloni</small></div>
          <button aria-label="Cerrar" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="adri-b">
          <div className="bubble">Hola, soy Adri. Contame tu situación y te paso directo con la Cra. Galloni por WhatsApp.</div>
          <div className="quick">
            {PACKS.map((p) => (
              <button key={p.id} onClick={() => handleWhatsApp(p.mensaje)}>{p.titulo}</button>
            ))}
          </div>
          <label htmlFor="adriMsg" className="bubble" style={{ background: "none", padding: 0 }}>O escribila con tus palabras:</label>
          <textarea id="adriMsg" ref={ref} value={texto} onChange={(e) => setTexto(e.target.value)}
            placeholder="Ej.: me llegó una intimación de ARCA por IVA 2024" />
          <button className="btn btn-wa" style={{ justifyContent: "center" }} onClick={enviar}>
            <WhatsAppIcon /> Enviar por WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [filtro, setFiltro] = useState("todos");
  const visibles = PACKS.filter((p) => filtro === "todos" || p.grupo === filtro || p.grupo === "todos");

  return (
    <>
      <div className="wrap">
        <header>
          <a className="brand" href="#inicio" aria-label="PILOT ARGENTINA, inicio">
            <Logo />
            <span>
              <span className="brand-name">PILOT <span>ARGENTINA</span></span>
              <span className="brand-sub">Consultoría Tributaria</span>
            </span>
          </a>
          <nav className="links" aria-label="Secciones">
            <a href="#packs">Packs</a><a href="#como">Cómo trabajo</a><a href="#contacto">Contacto</a><a href="#legal">Aviso legal</a>
          </nav>
          <div className="pro">
            <img src="foto-alejandra.jpg" alt="Cra. Alejandra Galloni" width="56" height="56" />
            <div>
              <b>Cra. Alejandra Galloni</b>
              <small>Contadora Pública<br />T° 371 F° 227 · CPCECABA</small>
            </div>
          </div>
        </header>

        <main id="inicio">
          <h1 className="title">¿Cuál es tu situación fiscal hoy?</h1>

          <div className="panel" id="packs">
            <p className="lede">Una contadora pública lleva tu caso y <em>Adri</em>, mi asistente virtual, informa sobre el proceso. ¿Cuál es tu situación?</p>
            <p className="sub">Trabajo tu caso como contadora pública y Adri, mi asistente virtual, te conecta conmigo sin vueltas. Elegí tu pack y escribime por WhatsApp: respondo tu consulta en 24 horas y te informo los honorarios. El plazo de resolución depende de cada pack.</p>

            <div className="filters" role="group" aria-label="Filtrar por categoría">
              {GRUPOS.map((g) => (
                <button key={g.id} className="chip" aria-pressed={g.id === filtro} onClick={() => setFiltro(g.id)}>{g.nombre}</button>
              ))}
            </div>
            <div className="packs">
              {visibles.map((p) => <Pack key={p.id} p={p} />)}
            </div>
          </div>
          <div className="trust">
            <span>Matrícula T° 371 F° 227 · CPCECABA</span><span>Respuesta en 24 hs</span><span>Atención por WhatsApp</span>
          </div>

          <section id="como">
            <div className="sec-head"><div><h2>Cómo trabajo con Adri</h2></div></div>
            <div className="steps">
              <div className="step"><div className="n">1</div><h3>Elegís tu situación</h3><p>Me pasás los datos básicos por WhatsApp.</p></div>
              <div className="step"><div className="n">2</div><h3>Adri te asiste</h3><p>Ordena tu consulta y te deriva directo conmigo.</p></div>
              <div className="step"><div className="n">3</div><h3>Yo resuelvo</h3><p>Analizo tu caso, diseño la estrategia y entrego la solución.</p></div>
            </div>
            <p className="note">Toda respuesta y todo informe los reviso yo. Adri es una asistente virtual de contacto y no brinda asesoramiento.</p>
          </section>

          <section id="contacto">
            <div className="contact">
              <div className="cbox">
                <h3>Escribime por WhatsApp</h3>
                <p>Es el canal más rápido. Te respondo dentro de las 24 horas.</p>
                <div className="row">
                  <a className="btn btn-wa" href={waLink("Hola Cra. Alejandra, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Abrir WhatsApp
                  </a>
                  <span className="addr">{TELEFONO_VISIBLE}</span>
                  <CopyButton text={TELEFONO_VISIBLE} />
                </div>
              </div>
            </div>

            <details className="legal" id="legal">
              <summary>Aviso legal</summary>
              <ol>
                {AVISO_LEGAL.map(([titulo, texto]) => (
                  <li key={titulo}><b>{titulo}</b> {texto}</li>
                ))}
              </ol>
            </details>
          </section>
        </main>

        <footer>
          <div>
            <h4>PILOT ARGENTINA</h4>
            <p>Cra. Alejandra Galloni · Contadora Pública<br />Matrícula T° 371 F° 227 · CPCECABA<br />Ciudad Autónoma de Buenos Aires</p>
          </div>
          <div>
            <h4>Sitio</h4>
            <ul><li><a href="#packs">Packs y honorarios</a></li><li><a href="#como">Cómo trabajo</a></li><li><a href="#legal">Aviso legal</a></li></ul>
          </div>
          <div>
            <h4>Soporte</h4>
            <ul>
              <li><a href={waLink("Hola Cra. Alejandra, necesito ayuda con una consulta.")} target="_blank" rel="noopener noreferrer">WhatsApp: {TELEFONO_VISIBLE}</a></li>
              <li>Respuesta en 24 horas</li>
            </ul>
          </div>
        </footer>
      </div>
      <Adri />
    </>
  );
}
