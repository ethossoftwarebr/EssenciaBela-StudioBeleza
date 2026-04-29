import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, ArrowRight, Instagram } from "lucide-react";
import logoImg from '@/images/logo.png';
import logoDarkImg from '@/images/logo-dark.jpeg';

import heroMechas from '@/images/hero-mechas.jpeg';
import cachosLongos from '@/images/cachos-longos.jpeg';
import cacheadoFesta from '@/images/cacheado-festa.jpeg';
import corteBob from '@/images/corte-bob.jpeg';
import lisoBrilho from '@/images/liso-brilho.jpeg';
import loiroRua from '@/images/loiro-rua.jpeg';
import make01 from '@/images/make-01.jpeg';
import makeNoiva from '@/images/make-noiva.jpeg';
import mechas02 from '@/images/mechas-02.jpeg';
import melOndulado from '@/images/mel-ondulado.jpeg';
import ondasCastanho02 from '@/images/ondas-castanho-02.jpeg';
import ondasCastanho from '@/images/ondas-castanho.jpeg';
import platinado from '@/images/platinado.jpeg';
import progressiva01 from '@/images/progressiva-01.jpeg';
import sobrancelha01 from '@/images/sobrancelha-01.jpeg';
import sobrancelha03 from '@/images/sobrancelha-03.jpeg';
import sobrancelhaCilios from '@/images/sobrancelha-cilios.jpeg';
import unhasRosa from '@/images/unhas-rosa.jpeg';
import unhasVermelho from '@/images/unhas-vermelho.jpeg';
import antesDepois02 from '@/images/antes-depois-02.jpeg';
import antesDepois03 from '@/images/antes-depois-03.jpeg';
import caseTrancasCrianca from '@/images/case-trancas-crianca.jpeg';
import caseTrancasRosa01 from '@/images/case-trancas-rosa-01.jpeg';
import caseBobCurto from '@/images/case-bob-curto.jpeg';
import caseLisoMel from '@/images/case-liso-mel.jpeg';
import caseUnhasNude from '@/images/case-unhas-nude.jpeg';
import caseTrancaLateral01 from '@/images/case-tranca-lateral-01.jpeg';
import caseTrancaLateral02 from '@/images/case-tranca-lateral-02.jpeg';
import caseOndasLongas from '@/images/case-ondas-longas.jpeg';
import caseCachosInfantil from '@/images/case-cachos-infantil.jpeg';
import caseLisoEscuro from '@/images/case-liso-escuro.jpeg';
import casePedicureFrancesa from '@/images/case-pedicure-francesa.jpeg';
import caseSobrancelhaCilios from '@/images/case-sobrancelha-cilios.jpeg';
import equipeAnaAngela from '@/images/equipe-ana-angela.jpeg';
import equipeRafaela from '@/images/equipe-rafaela.jpeg';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
  style: extraStyle,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(22px) scale(0.97)",
        filter: visible ? "blur(0px)" : "blur(5px)",
        transition: `opacity 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s, filter 0.85s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...extraStyle,
      }}
    >
      {children}
    </Tag>
  );
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const WA_MESSAGE = encodeURIComponent(
    "Olá! Gostaria de agendar um horário no Essência Bela Studio. Poderia me ajudar?"
  );
  const WA_URL = `https://wa.me/5562981156430?text=${WA_MESSAGE}`;
  const openWhatsApp = () => window.open(WA_URL, "_blank");

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Montserrat', sans-serif",
        background: "#F2F2F2",
        color: "#402414",
        overflowX: "hidden",
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ─── NAVBAR ─── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "14px 0" : "22px 0",
          background: scrolled ? "rgba(242,242,242,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(64,36,20,0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          className="eb-container eb-nav-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            className="eb-logo-link"
            onClick={(e) => {
              if (window.innerWidth <= 767) {
                e.preventDefault();
                setMenuOpen((o) => !o);
              }
            }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <img
              src={logoImg}
              alt="Essência Bela Studio de Beleza"
              style={{
                height: 200,
                width: "auto",
                objectFit: "contain",
                display: "block",
                marginTop: -72,
                marginBottom: -72,
                imageRendering: "-webkit-optimize-contrast" as React.CSSProperties["imageRendering"],
              }}
            />
          </a>

          <div
            className="eb-nav-links"
            style={{
              display: "flex",
              gap: 36,
              alignItems: "center",
            }}
          >
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Galeria", href: "#galeria" },
              { label: "Equipe", href: "#equipe" },
              { label: "Localização", href: "#localizacao" },
              { label: "Contato", href: "#contato" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "#402414",
                  textDecoration: "none",
                  position: "relative",
                }}
                className="nav-link"
              >
                {label}
              </a>
            ))}
            <button
              onClick={openWhatsApp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: "#BF245D",
                color: "#FDFBF9",
                borderRadius: 999,
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.03em",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  background: "#9A1D4B",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 28px rgba(191,36,93,0.35)",
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  background: "#BF245D",
                  transform: "translateY(0)",
                  boxShadow: "none",
                })
              }
            >
              Agendar
            </button>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE MENU DRAWER ─── */}
      {menuOpen && (
        <div
          className="eb-mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: "rgba(64,36,20,0.45)",
            backdropFilter: "blur(4px)",
          }}
          onClick={closeMenu}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              background: "#FDFBF9",
              padding: "100px 32px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 16px 48px rgba(64,36,20,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Galeria", href: "#galeria" },
              { label: "Equipe", href: "#equipe" },
              { label: "Localização", href: "#localizacao" },
              { label: "Contato", href: "#contato" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                style={{
                  fontSize: 22,
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  color: "#402414",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(64,36,20,0.08)",
                }}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => { closeMenu(); openWhatsApp(); }}
              style={{
                marginTop: 20,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 24px",
                background: "#BF245D",
                color: "#FDFBF9",
                borderRadius: 999,
                fontWeight: 500,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
              }}
            >
              Agendar horário
            </button>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section className="eb-hero" style={{ padding: "140px 0 80px", position: "relative" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left text */}
          <div>
            <Reveal>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{ width: 40, height: 1, background: "#BF245D", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#BF245D",
                    fontWeight: 600,
                  }}
                >
                  Studio de Beleza · Aparecida de Goiânia — GO
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(48px, 7vw, 96px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  color: "#402414",
                  marginBottom: 28,
                }}
              >
                Aflore sua
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "#BF245D",
                  }}
                >
                  essência
                </em>{" "}
                e
                <br />
                beleza interior.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "#8C594D",
                  maxWidth: 440,
                  marginBottom: 40,
                  fontWeight: 300,
                }}
              >
                Salão voltado para o público feminino, atendendo todas as suas
                necessidades com seriedade e excelência. Profissionais capacitadas
                para te atender de forma humanizada.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <button
                  onClick={openWhatsApp}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 28px",
                    background: "#BF245D",
                    color: "#FDFBF9",
                    borderRadius: 999,
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: "0.03em",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "#9A1D4B",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(191,36,93,0.35)",
                    })
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "#BF245D",
                      transform: "translateY(0)",
                      boxShadow: "none",
                    })
                  }
                >
                  Agendar horário
                  <ArrowRight size={14} />
                </button>
                <a
                  href="#servicos"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "16px 28px",
                    border: "1px solid #402414",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#402414",
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <span>Ver serviços</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal delay={0.16} as="div" className="eb-hero-visual">
            <div style={{ position: "relative", height: 620 }}>
              {/* Main image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <img
                  src={heroMechas}
                  alt="Mechas com balayage caramelo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Accent image (overlapping, bottom-left) */}
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: -60,
                  width: 220,
                  height: 280,
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(64,36,20,0.2)",
                }}
              >
                <img
                  src={unhasVermelho}
                  alt="Unhas vermelho clássico"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "#FDFBF9",
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  color: "#BF245D",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 10px 30px rgba(64,36,20,0.15)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#BF245D",
                    borderRadius: "50%",
                    animation: "blink 1.8s ease-in-out infinite",
                  }}
                />
                Atendendo agora
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div
        style={{
          overflow: "hidden",
          background: "#BF245D",
          padding: "18px 0",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 0,
            animation: "marquee 28s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(2)].map((_, rep) => (
            <span
              key={rep}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#FDFBF9",
              }}
            >
              {[
                "Tranças Nagô",
                "Maquiagem",
                "Sobrancelhas",
                "Alongamento de Unhas",
                "Progressiva",
                "Spa dos Pés",
                "Limpeza de Pele",
                "Massagens",
              ].map((s, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "clamp(16px,3vw,40px)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      fontWeight: 500,
                      padding: "0 clamp(16px,3vw,40px)",
                    }}
                  >
                    {s}
                  </span>
                  <em
                    style={{
                      fontStyle: "normal",
                      color: "rgba(253,251,249,0.45)",
                      fontSize: 20,
                    }}
                  >
                    ·
                  </em>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVIÇOS ─── */}
      <section
        id="servicos"
        style={{
          padding: "120px 0",
          background: "#F2F2F2",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Section head */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              marginBottom: 80,
              alignItems: "end",
            }}
          >
            <Reveal>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                    color: "#BF245D",
                    fontWeight: 600,
                    marginBottom: 20,
                  }}
                >
                  ◆ Nossos Serviços
                </div>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(36px, 4.5vw, 64px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    color: "#402414",
                  }}
                >
                  Cuidados
                  <br />
                  feitos{" "}
                  <em style={{ fontStyle: "italic", color: "#BF245D" }}>
                    à mão.
                  </em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                style={{
                  fontSize: 16,
                  color: "#8C594D",
                  lineHeight: 1.7,
                  maxWidth: 440,
                  fontWeight: 300,
                }}
              >
                Da trança nagô que é nossa especialidade aos cuidados faciais e
                corporais. Cada serviço é executado com técnica, produto premium
                e o tempo que você merece.
              </p>
            </Reveal>
          </div>

          {/* 12-column asymmetric grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                num: "01",
                title: "Tranças Nagô",
                desc: "Nossa especialidade. Técnica afro-brasileira com tempo e cuidado dedicados ao seu cabelo.",
                img: cachosLongos,
                wide: true,
              },
              {
                num: "02",
                title: "Maquiagem",
                desc: "Dia, noite, festa. Sob medida.",
                img: makeNoiva,
                wide: false,
              },
              {
                num: "03",
                title: "Sobrancelhas",
                desc: "Designer que valoriza seu rosto.",
                img: sobrancelha01,
                wide: false,
              },
              {
                num: "04",
                title: "Unhas & Spa",
                desc: "Alongamento, spa dos pés, nail art.",
                img: unhasRosa,
                wide: false,
              },
              {
                num: "05",
                title: "Escovas & Babyliss",
                desc: "Progressiva, botox, selagem.",
                img: lisoBrilho,
                wide: false,
              },
              {
                num: "06",
                title: "Estética & Bem-Estar",
                desc: "Limpeza de pele, epilação, depilação, massagens relaxantes e terapêuticas.",
                img: make01,
                wide: true,
              },
            ].map((service, i) => (
              <ServiceCard key={i} service={service} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS ─── */}
      <section
        style={{
          background: "#BF245D",
          color: "#FDFBF9",
          padding: "140px 0",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            {/* Sticky image */}
            <Reveal>
              <div
                style={{
                  position: "sticky",
                  top: 120,
                  aspectRatio: "4/5",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <img
                  src={cacheadoFesta}
                  alt="Cuidado especializado"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Stamp overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    left: 24,
                    right: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(64,36,20,0.7)",
                      backdropFilter: "blur(8px)",
                      padding: "8px 14px",
                      borderRadius: 999,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                      color: "#BF245D",
                      fontWeight: 600,
                    }}
                  >
                    Studio
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Feature list */}
            <div style={{ paddingTop: 20 }}>
              <Reveal>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "clamp(40px, 4.5vw, 68px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.025em",
                    color: "#FDFBF9",
                    marginBottom: 28,
                  }}
                >
                  Por que{" "}
                  <em style={{ fontStyle: "italic", color: "#FFB8D2" }}>
                    escolher
                  </em>{" "}
                  a Essência Bela?
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p
                  style={{
                    fontSize: 17,
                    color: "rgba(253,251,249,0.75)",
                    lineHeight: 1.65,
                    paddingBottom: 40,
                    borderBottom: "1px solid rgba(253,251,249,0.2)",
                    marginBottom: 0,
                    fontWeight: 300,
                  }}
                >
                  Criamos um espaço pensado para que você se sinta especial do
                  início ao fim. Poucos atendimentos, muita atenção.
                </p>
              </Reveal>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  {
                    num: "01",
                    title: "Especialistas em Nagô",
                    desc: "A trança nagô é uma arte ancestral e nós temos as mãos certas para ela.",
                  },
                  {
                    num: "02",
                    title: "Produtos Premium",
                    desc: "Trabalhamos com marcas selecionadas para cabelo, pele e unhas.",
                  },
                  {
                    num: "03",
                    title: "Ambiente Acolhedor",
                    desc: "Poucos atendimentos simultâneos para garantir seu conforto.",
                  },
                  {
                    num: "04",
                    title: "Cuidado Pessoal",
                    desc: "Cada cliente é única. Aqui você recebe atenção exclusiva, sem pressa.",
                  },
                ].map((feat, i) => (
                  <FeatureItem key={i} feat={feat} delay={0.08 + i * 0.08} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASES DE SUCESSO ─── */}
      <section
        id="galeria"
        style={{ padding: "120px 0", background: "#F2F2F2" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#BF245D",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                  ◆ Galeria de Trabalhos
              </div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#402414",
                }}
              >
                Transformações{" "}
                <em style={{ fontStyle: "italic", color: "#BF245D" }}>
                  reais
                </em>{" "}
                que falam por si.
              </h2>
            </div>
          </Reveal>

          {/* Clean 4-column photo grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[
              { img: antesDepois02,        label: "Alisamento · antes & depois"    },
              { img: caseTrancaLateral02,  label: "Trança lateral · make"          },
              { img: caseUnhasNude,        label: "Unhas · nude gel"               },
              { img: caseSobrancelhaCilios,label: "Sobrancelha · design"           },
              { img: caseLisoEscuro,       label: "Liso · progressiva"             },
              { img: caseOndasLongas,      label: "Ondas longas · babyliss"        },
              { img: caseTrancaLateral01,  label: "Trança lateral · festa"         },
              { img: caseCachosInfantil,   label: "Cachos · infantil"              },
              { img: casePedicureFrancesa, label: "Pedicure · francesa"            },
              { img: caseTrancasCrianca,   label: "Tranças · infantil"             },
              { img: caseBobCurto,         label: "Corte bob · liso"               },
              { img: caseLisoMel,          label: "Liso mel · brilho"              },
              { img: caseTrancasRosa01,    label: "Tranças Nagô · rosa"            },
              { img: antesDepois03,        label: "Mechas & liso · antes & depois" },
            ].map(({ img, label }, i) => (
              <GalleryItem
                key={i}
                img={img}
                label={label}
                delay={i * 0.06}
              />
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: 48, textAlign: "center", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/cases"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 30px",
                  background: "#BF245D",
                  color: "#FDFBF9",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { background: "#9A1D4B", transform: "translateY(-2px)", boxShadow: "0 12px 28px rgba(191,36,93,0.3)" })}
                onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { background: "#BF245D", transform: "translateY(0)", boxShadow: "none" })}
              >
                <ArrowRight size={15} />
                Ver todos os cases
              </a>
              <a
                href="https://www.instagram.com/essenciabela_studio/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 30px",
                  border: "1px solid #8C594D",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "#402414",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { borderColor: "#BF245D", color: "#BF245D" })}
                onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { borderColor: "#8C594D", color: "#402414" })}
              >
                <Instagram size={16} />
                Ver mais no Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── EQUIPE ─── */}
      <section
        id="equipe"
        style={{
          background: "#BF245D",
          padding: "120px 0",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#FFB8D2",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                  ◆ Nossa Equipe
              </div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#FDFBF9",
                }}
              >
                Quem faz a{" "}
                <em style={{ fontStyle: "italic", color: "#FFB8D2" }}>
                  mágica
                </em>{" "}
                acontecer
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {[
              {
                initials: "R",
                name: "Rafaela",
                role: "Trancista · Fundadora",
                bio: "Fundadora do studio. Trancista há 12 anos, especialista em nagô e box braids.",
                handle: "@rafaela.ess",
                img: equipeRafaela,
                imgPosition: "center top",
              },
              {
                initials: "A",
                name: "Ana & Ângela Calixto",
                role: "Maquiagem · Nail Design",
                bio: "Duo que cuida de você por inteiro: Ana transforma com maquiagem e Ângela cria nail arts autorais e alongamentos impecáveis.",
                handle: "",
                img: equipeAnaAngela,
                imgPosition: "50% top",
              },
            ].map((member, i) => (
              <TeamCard key={i} member={member} delay={i * 0.1} dark />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section style={{ padding: "120px 0", background: "#F2F2F2", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#BF245D",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                  ◆ Depoimentos
              </div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#402414",
                }}
              >
                O que{" "}
                <em style={{ fontStyle: "italic", color: "#BF245D" }}>
                  nossas clientes
                </em>{" "}
                dizem
              </h2>
            </div>
          </Reveal>

          {/* Horizontal scrolling track */}
          <div
            style={{
              display: "flex",
              gap: 24,
              overflowX: "auto",
              paddingBottom: 16,
              scrollbarWidth: "thin" as const,
              scrollSnapType: "x mandatory" as const,
            }}
          >
            {[
              {
                name: "Ana Clara F.",
                label: "Cliente fiel",
                stars: 5,
                text: "O cuidado com cada detalhe é surreal. Fiquei horas e saí me sentindo uma rainha.",
              },
              {
                name: "Mariana P.",
                label: "Cliente fiel",
                stars: 5,
                text: "Faço sobrancelhas e maquiagem aqui há dois anos. Ambiente acolhedor, profissionais de primeira e o resultado é sempre elogiado.",
              },
              {
                name: "Renata L.",
                label: "Noiva 2024",
                stars: 5,
                text: "Me casei no Essência Bela, literalmente. Da maquiagem ao penteado, a equipe cuidou de tudo com carinho. Saí pronta e tranquila.",
              },
              {
                name: "Patricia M.",
                label: "Cliente desde 2022",
                stars: 5,
                text: "Melhor spa dos pés de Aparecida de Goiânia. Saio revigorada, e as unhas são obra de arte. Vale cada minuto.",
              },
              {
                name: "Camila R.",
                label: "Cliente nova",
                stars: 5,
                text: "Primeira vez fazendo tranças nagô aqui e já sou fã. Profissional atenciosa, ambiente lindo e resultado impecável.",
              },
            ].map((testi, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 420px",
                  background: "#FDFBF9",
                  border: "1px solid rgba(140,89,77,0.15)",
                  borderRadius: 8,
                  padding: 36,
                  scrollSnapAlign: "start" as const,
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, {
                    borderColor: "#BF245D",
                    transform: "translateY(-4px)",
                  })
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    borderColor: "rgba(140,89,77,0.15)",
                    transform: "translateY(0)",
                  })
                }
              >
                <div
                  style={{
                    color: "#BF245D",
                    fontSize: 14,
                    letterSpacing: 2,
                    marginBottom: 20,
                  }}
                >
                  {"★".repeat(testi.stars)}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: 19,
                    lineHeight: 1.5,
                    color: "#402414",
                    fontStyle: "italic",
                    marginBottom: 24,
                  }}
                >
                  "{testi.text}"
                </p>
                <div
                  style={{
                    paddingTop: 20,
                    borderTop: "1px solid rgba(140,89,77,0.15)",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: "#402414",
                    }}
                  >
                    {testi.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#8C594D",
                      letterSpacing: "0.06em",
                      marginTop: 4,
                    }}
                  >
                    {testi.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        style={{
          background: "#BF245D",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FDFBF9",
                marginBottom: 16,
              }}
            >
              Pronta para se sentir{" "}
              <em style={{ fontStyle: "italic" }}>incrível?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              style={{
                color: "rgba(253,251,249,0.8)",
                fontSize: 17,
                fontWeight: 300,
                marginBottom: 36,
                lineHeight: 1.6,
              }}
            >
              Agende agora pelo WhatsApp e garanta seu horário com uma de nossas
              profissionais.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <button
              onClick={openWhatsApp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 40px",
                background: "#FDFBF9",
                color: "#BF245D",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.02em",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(-3px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar pelo WhatsApp
            </button>
          </Reveal>
        </div>
      </section>

      {/* ─── MAPA ─── */}
      <section id="localizacao" style={{ background: "#F2F2F2" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "80px 32px",
          }}
        >
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "#BF245D",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                  ◆ Localização
              </div>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  color: "#402414",
                }}
              >
                Como nos{" "}
                <em style={{ fontStyle: "italic", color: "#BF245D" }}>
                  encontrar
                </em>
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* Map iframe */}
            <Reveal>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(64,36,20,0.12)",
                  border: "1px solid rgba(140,89,77,0.1)",
                  height: 460,
                  position: "relative",
                }}
              >
                <iframe
                  title="Localização Essência Bela"
                  src="https://www.google.com/maps?q=Rua+Bar%C3%A3o+do+Rio+Branco+Qd+32+Lote+12+Parque+Real+Goi%C3%A2nia+GO+74910300&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            {/* Info card */}
            <Reveal delay={0.1}>
              <div
                style={{
                  background: "#BF245D",
                  borderRadius: 8,
                  padding: 36,
                  color: "#FDFBF9",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontWeight: 400,
                    fontSize: 26,
                    color: "#FDFBF9",
                    marginBottom: 24,
                    letterSpacing: "-0.01em",
                    fontStyle: "italic",
                  }}
                >
                  Essência Bela Studio
                </h3>

                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <MapPin
                    size={18}
                    style={{ color: "#FFB8D2", marginTop: 3, flexShrink: 0 }}
                  />
                  <div style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.7, color: "rgba(253,251,249,0.8)" }}>
                    Rua Barão do Rio Branco, Qd 32, Lote 12
                    <br />
                    Parque Real · Aparecida de Goiânia — GO
                    <br />
                    CEP 74.910-300
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <Phone
                    size={18}
                    style={{ color: "#FFB8D2", marginTop: 2, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 14, fontWeight: 300, color: "rgba(253,251,249,0.8)" }}>
                    (62) 98115-6430
                  </span>
                </div>

                {/* Hours */}
                <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
                  <Clock
                    size={18}
                    style={{ color: "#FFB8D2", marginTop: 2, flexShrink: 0 }}
                  />
                  <div style={{ fontSize: 14, fontWeight: 300, color: "rgba(253,251,249,0.8)", lineHeight: 1.8 }}>
                    <div>Seg – Sex: 09h – 20h</div>
                    <div>Sábado: 08h – 18h</div>
                    <div style={{ color: "rgba(253,251,249,0.5)" }}>Domingo: Fechado</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <button
                  onClick={openWhatsApp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                    padding: "15px 24px",
                    background: "#FDFBF9",
                    color: "#BF245D",
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: 14,
                    border: "none",
                    cursor: "pointer",
                    marginBottom: 12,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "#FFB8D2",
                      transform: "translateY(-2px)",
                    })
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "#FDFBF9",
                      transform: "translateY(0)",
                    })
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Agendar pelo WhatsApp
                </button>

                <a
                  href={`https://maps.google.com/maps?q=Rua+Bar%C3%A3o+do+Rio+Branco+Qd+32+Lote+12+Parque+Real+Goi%C3%A2nia+GO+74910300`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                    padding: "14px 24px",
                    background: "transparent",
                    color: "#FFB8D2",
                    borderRadius: 999,
                    fontWeight: 500,
                    fontSize: 14,
                    border: "1px solid rgba(242,171,145,0.3)",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    textAlign: "center" as const,
                    boxSizing: "border-box" as const,
                  }}
                >
                  <MapPin size={16} />
                  Ver rota no Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CONTATO / FOOTER ─── */}
      <footer
        id="contato"
        style={{
          background: "#BF245D",
          color: "#FDFBF9",
          padding: "100px 0 48px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr",
              gap: 60,
              marginBottom: 60,
            }}
          >
            {/* Brand */}
            <div>
              <img
                src={logoImg}
                alt="Essência Bela Studio de Beleza"
                style={{
                  height: 200,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  marginTop: -60,
                  marginBottom: -36,
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                }}
              />
              <p
                style={{
                  color: "rgba(253,251,249,0.7)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: 320,
                  marginBottom: 28,
                  fontSize: 15,
                }}
              >
                Salão voltado para o público feminino atendendo suas necessidades em
                geral: cabelo, unhas, limpeza de pele, tranças especiais, depilação,
                designer de sobrancelhas, massagem. Um ambiente completo, com
                seriedade e profissionais capacitadas para te atender de forma
                humanizada e com muita excelência.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(253,251,249,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(253,251,249,0.8)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "rgba(253,251,249,0.15)",
                      borderColor: "rgba(253,251,249,0.6)",
                    })
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, {
                      background: "transparent",
                      borderColor: "rgba(253,251,249,0.3)",
                    })
                  }
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "#FFB8D2",
                  fontWeight: 600,
                  marginBottom: 24,
                }}
              >
                Contato & Local
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 20,
                    color: "rgba(253,251,249,0.8)",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  <MapPin
                    size={18}
                    style={{ color: "#FFB8D2", marginTop: 2, flexShrink: 0 }}
                  />
                  <span>
                    Rua Barão do Rio Branco
                    <br />
                    Qd 32, Lote 12 — Parque Real
                    <br />
                    Aparecida de Goiânia — GO · CEP 74.910-300
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    color: "rgba(253,251,249,0.8)",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  <Phone
                    size={18}
                    style={{ color: "#FFB8D2", flexShrink: 0 }}
                  />
                  <span>(62) 98115-6430</span>
                </li>
              </ul>
              <button
                onClick={openWhatsApp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  background: "#FDFBF9",
                  color: "#BF245D",
                  borderRadius: 999,
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.03em",
                  border: "none",
                  cursor: "pointer",
                  marginTop: 8,
                  transition: "all 0.3s",
                }}
              >
                Chamar no WhatsApp
              </button>
            </div>

            {/* Horários */}
            <div>
              <h3
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "#FFB8D2",
                  fontWeight: 600,
                  marginBottom: 24,
                }}
              >
                Horário de Funcionamento
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { days: "Segunda – Sexta", hours: "09h – 20h", highlight: false },
                  { days: "Sábado", hours: "08h – 18h", highlight: false },
                  { days: "Domingo", hours: "Fechado", highlight: true },
                ].map(({ days, hours, highlight }, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(253,251,249,0.15)",
                      color: highlight
                        ? "rgba(253,251,249,0.5)"
                        : "rgba(253,251,249,0.8)",
                      fontSize: 14,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Clock
                        size={16}
                        style={{ color: "#FFB8D2", flexShrink: 0 }}
                      />
                      {days}
                    </span>
                    <span style={{ fontWeight: 500 }}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              borderTop: "1px solid rgba(253,251,249,0.15)",
              paddingTop: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 12,
              color: "rgba(253,251,249,0.45)",
            }}
          >
            <div>
              <p>© {new Date().getFullYear()} Essência Bela Studio. Todos os direitos reservados.</p>
              <p style={{ marginTop: 4, color: "rgba(253,251,249,0.35)" }}>
                CNPJ: 34.441.488/0001-04 · (62) 98115-6430
              </p>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Política de Privacidade
              </a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── BOTÃO FLUTUANTE WHATSAPP ─── */}
      <button
        onClick={openWhatsApp}
        aria-label="Contato via WhatsApp"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#25D366",
          color: "white",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 14px 40px rgba(37,211,102,0.4)",
          zIndex: 150,
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.08)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>

      {/* CSS — Keyframes + Responsive */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blink {
          50% { opacity: 0.3; }
        }
        @keyframes pulse {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* ── Nav link underline ── */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: #BF245D;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link:hover { color: #BF245D !important; }
        .nav-link:hover::after { width: 100%; }

        /* ── Mobile menu: hidden on desktop ── */
        .eb-mobile-menu { display: none; }

        /* ── Logo: default not interactive on desktop ── */
        .eb-logo-link { cursor: default; }

        /* ─────────────────────────────────────────
           TABLET  (≤ 1023 px)
        ───────────────────────────────────────── */
        @media (max-width: 1023px) {
          /* Nav: hide links */
          .eb-nav-links { display: none !important; }

          /* Hero: single column */
          .eb-hero { padding: 120px 0 60px !important; }
          div[style*="grid-template-columns: 1.1fr 0.9fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* Diferenciais: single column */
          div[style*="grid-template-columns: 0.9fr 1.1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* Services header: single column */
          div[style*="grid-template-columns: 1fr 1fr"][style*="margin-bottom: 80px"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 48px !important;
          }

          /* Services cards: 2 equal columns on tablet */
          div[style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          div[style*="grid-column: span 8"],
          div[style*="grid-column: span 4"] {
            grid-column: span 1 !important;
          }

          /* Cases grid: 3 cols on tablet */
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          /* Localizacao: single column */
          div[style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          /* Footer: 2 cols on tablet */
          div[style*="grid-template-columns: 1.2fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }

          /* Equipe: single column on tablet */
          div[style*="grid-template-columns: repeat(2, 1fr)"][style*="max-width: 720px"] {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
          }

          /* Container padding */
          .eb-container { padding: 0 24px !important; }
        }

        /* ─────────────────────────────────────────
           MOBILE  (≤ 767 px)
        ───────────────────────────────────────── */
        @media (max-width: 767px) {
          /* Mobile menu visible on mobile */
          .eb-mobile-menu { display: block !important; }

          /* Logo becomes a tap target on mobile */
          .eb-logo-link { cursor: pointer !important; }

          /* Hero: reduce padding, hide photo panel */
          .eb-hero { padding: 100px 0 48px !important; }
          .eb-hero-visual { display: none !important; }

          /* Services: 1 column on small mobile */
          div[style*="grid-template-columns: repeat(2, 1fr)"]:not([style*="max-width: 720px"]) {
            grid-template-columns: 1fr !important;
          }

          /* Cases grid: 2 cols on mobile */
          div[style*="grid-template-columns: repeat(4, 1fr)"],
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }

          /* Equipe: 1 column on mobile */
          div[style*="grid-template-columns: repeat(2, 1fr)"][style*="max-width: 720px"] {
            grid-template-columns: 1fr !important;
            max-width: 380px !important;
          }

          /* Testimonials row */
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }

          /* Footer: 1 column */
          div[style*="grid-template-columns: 1.2fr 1fr 1fr"],
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          /* Section inner padding */
          .eb-container { padding: 0 16px !important; }

          /* CTA banner padding */
          section[style*="padding: 80px 32px"] {
            padding: 60px 16px !important;
          }

          /* Nav logo: reduce size */
          .eb-nav-inner img {
            height: 100px !important;
            margin-top: -22px !important;
            margin-bottom: -22px !important;
          }

          /* Section heading spacing */
          section { padding-left: 0 !important; padding-right: 0 !important; }
        }

        /* ─────────────────────────────────────────
           LARGE SCREENS  (≥ 1536 px — TV / 4K)
        ───────────────────────────────────────── */
        @media (min-width: 1536px) {
          .eb-container { max-width: 1440px !important; }
          div[style*="max-width: 1280px"] { max-width: 1440px !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Service Card Component ─── */
function ServiceCard({
  service,
  delay,
}: {
  service: {
    num: string;
    title: string;
    desc: string;
    img: string;
    wide: boolean;
  };
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal
      delay={delay}
      style={{
        gridColumn: service.wide ? "span 8" : "span 4",
      }}
      as="div"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#FDFBF9",
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${hovered ? "#BF245D" : "transparent"}`,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 30px 60px rgba(64,36,20,0.12)"
            : "0 2px 8px rgba(64,36,20,0.04)",
          transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
          cursor: "pointer",
          height: "100%",
        }}
      >
        {/* Image */}
        <div
          style={{
            height: service.wide ? 340 : 260,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          {/* rose gradient tint on hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(191,36,93,0.18) 0%, transparent 60%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            padding: "28px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontWeight: 400,
                fontSize: 22,
                color: "#402414",
                letterSpacing: "-0.01em",
                marginBottom: 6,
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#8C594D",
                lineHeight: 1.55,
                fontWeight: 300,
              }}
            >
              {service.desc}
            </p>
          </div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1px solid ${hovered ? "#BF245D" : "#8C594D"}`,
              background: hovered ? "#BF245D" : "transparent",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              color: hovered ? "white" : "#8C594D",
              transform: hovered ? "rotate(-45deg)" : "rotate(0deg)",
              transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Feature Item Component ─── */
function FeatureItem({
  feat,
  delay,
}: {
  feat: { num: string; title: string; desc: string };
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay} as="li">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "32px 0",
          paddingLeft: hovered ? 16 : 0,
          borderBottom: "1px solid rgba(253,251,249,0.15)",
          transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1)",
          cursor: "default",
        }}
      >
        {/* decorative rose accent line */}
        <div
          style={{
            width: hovered ? 48 : 24,
            height: 2,
            background: "#FFB8D2",
            borderRadius: 2,
            marginBottom: 18,
            transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <h3
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 26,
            color: "#FDFBF9",
            letterSpacing: "-0.01em",
            marginBottom: 10,
            fontStyle: "italic",
          }}
        >
          {feat.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "rgba(253,251,249,0.75)",
            lineHeight: 1.65,
            maxWidth: 440,
            fontWeight: 300,
          }}
        >
          {feat.desc}
        </p>
      </div>
    </Reveal>
  );
}

/* ─── Gallery Item Component ─── */
function GalleryItem({
  img,
  label,
  delay,
}: {
  img: string;
  label: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay} as="div">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          borderRadius: 8,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: hovered
            ? "0 12px 32px rgba(64,36,20,0.18)"
            : "0 2px 8px rgba(64,36,20,0.07)",
          transition: "box-shadow 0.4s",
        }}
      >
        <img
          src={img}
          alt={label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 45%, rgba(26,5,10,0.75))",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
            display: "flex",
            alignItems: "flex-end",
            padding: "18px 16px",
            color: "white",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Team Card Component ─── */
function TeamCard({
  member,
  delay,
  dark = false,
}: {
  member: {
    initials: string;
    name: string;
    role: string;
    bio: string;
    handle: string;
    img: string;
    imgPosition?: string;
  };
  delay: number;
  dark?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: "pointer" }}
      >
        {/* Photo with hover bio overlay */}
        <div
          style={{
            aspectRatio: "3/4",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 18,
            position: "relative",
          }}
        >
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: member.imgPosition ?? "center top",
              display: "block",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          {/* Bio overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(64,36,20,0.92)",
              color: "#FDFBF9",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)",
              fontSize: 13,
              lineHeight: 1.55,
              fontWeight: 300,
            }}
          >
            <p>{member.bio}</p>
            {member.handle && (
              <p
                style={{
                  marginTop: 14,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#FFB8D2",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Instagram size={12} />
                {member.handle}
              </p>
            )}
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 20,
            color: dark ? "#FDFBF9" : "#402414",
            letterSpacing: "-0.01em",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: dark ? "#FFB8D2" : "#8C594D",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginTop: 4,
            fontWeight: 500,
          }}
        >
          {member.role}
        </p>
      </div>
    </Reveal>
  );
}
