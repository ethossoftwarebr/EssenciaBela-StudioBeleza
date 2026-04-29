import React, { useState } from "react";
import { ArrowLeft, Instagram } from "lucide-react";
import logoImg from "@/images/logo.png";

import antesDepois01 from "@/images/antes-depois-01.jpeg";
import antesDepois02 from "@/images/antes-depois-02.jpeg";
import antesDepois03 from "@/images/antes-depois-03.jpeg";
import antesDepois04 from "@/images/antes-depois-04.jpeg";
import caseTrancasCrianca from "@/images/case-trancas-crianca.jpeg";
import caseUnhasNude from "@/images/case-unhas-nude.jpeg";
import caseTrancasRosa01 from "@/images/case-trancas-rosa-01.jpeg";
import caseTrancasRosa02 from "@/images/case-trancas-rosa-02.jpeg";
import caseLisoCastanho from "@/images/case-liso-castanho.jpeg";
import caseBobCurto from "@/images/case-bob-curto.jpeg";
import caseUnhasRed from "@/images/case-unhas-red.jpeg";
import caseLisoMel from "@/images/case-liso-mel.jpeg";
import caseUnhasPerola from "@/images/case-unhas-perola.jpeg";
import caseTrancaLateral01 from "@/images/case-tranca-lateral-01.jpeg";
import caseTrancaLateral02 from "@/images/case-tranca-lateral-02.jpeg";
import caseOndasLongas from "@/images/case-ondas-longas.jpeg";
import caseCachosInfantil from "@/images/case-cachos-infantil.jpeg";
import caseLisoEscuro from "@/images/case-liso-escuro.jpeg";
import casePedicureFrancesa from "@/images/case-pedicure-francesa.jpeg";
import caseSobrancelhaCilios from "@/images/case-sobrancelha-cilios.jpeg";

const WA_URL =
  "https://wa.me/5562981156430?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio...";

const CATEGORIES = ["Todos", "Cabelo", "Tranças", "Unhas", "Sobrancelhas"];

const cases = [
  { img: antesDepois01,        label: "Progressiva",             tag: "Antes & Depois", category: "Cabelo" },
  { img: antesDepois02,        label: "Alisamento",              tag: "Antes & Depois", category: "Cabelo" },
  { img: antesDepois03,        label: "Mechas & Liso",           tag: "Antes & Depois", category: "Cabelo" },
  { img: antesDepois04,        label: "Progressiva Capilar",     tag: "Antes & Depois", category: "Cabelo" },
  { img: caseLisoEscuro,       label: "Liso Escuro · Brilho",   tag: "Cabelo",         category: "Cabelo" },
  { img: caseOndasLongas,      label: "Ondas Longas · Babyliss", tag: "Cabelo",         category: "Cabelo" },
  { img: caseCachosInfantil,   label: "Cachos · Infantil",       tag: "Cabelo",         category: "Cabelo" },
  { img: caseBobCurto,         label: "Bob Liso",                tag: "Cabelo",         category: "Cabelo" },
  { img: caseLisoMel,          label: "Liso Mel",                tag: "Cabelo",         category: "Cabelo" },
  { img: caseLisoCastanho,     label: "Escova Progressiva",      tag: "Cabelo",         category: "Cabelo" },
  { img: caseTrancasCrianca,   label: "Tranças Infantil",        tag: "Tranças",        category: "Tranças" },
  { img: caseTrancasRosa01,    label: "Tranças com Fio Rosa",    tag: "Tranças",        category: "Tranças" },
  { img: caseTrancasRosa02,    label: "Tranças Nagô Rosa",       tag: "Tranças",        category: "Tranças" },
  { img: caseTrancaLateral01,  label: "Trança Lateral · Festa",  tag: "Tranças",        category: "Tranças" },
  { img: caseTrancaLateral02,  label: "Trança Lateral · Make",   tag: "Tranças",        category: "Tranças" },
  { img: caseUnhasNude,        label: "Unhas em Gel Nude",       tag: "Unhas",          category: "Unhas" },
  { img: caseUnhasRed,         label: "Unhas em Gel Vermelho",   tag: "Unhas",          category: "Unhas" },
  { img: caseUnhasPerola,      label: "Unhas Pérola Chrome",     tag: "Unhas",          category: "Unhas" },
  { img: casePedicureFrancesa, label: "Pedicure Francesa",       tag: "Unhas",          category: "Unhas" },
  { img: caseSobrancelhaCilios,label: "Designer de Sobrancelha", tag: "Sobrancelhas",   category: "Sobrancelhas" },
];

export default function CasesPage() {
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Todos" ? cases : cases.filter((c) => c.category === active);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F2",
        fontFamily: "'DM Sans', sans-serif",
        color: "#402414",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        .case-card img { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .case-card:hover img { transform: scale(1.06); }
        .filter-btn { transition: all 0.2s; }
        .filter-btn:hover { background: #BF245D !important; color: #FDFBF9 !important; }

        /* ── Tablet (≤ 1023px) ── */
        @media (max-width: 1023px) {
          .cases-header { padding: 0 24px !important; }
          .cases-grid-section { padding: 48px 24px 64px !important; }
          .cases-grid { columns: 3 180px !important; }
        }

        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .cases-hero { padding: 56px 16px 48px !important; }
          .cases-grid { columns: 2 140px !important; }
          .cases-grid-section { padding: 32px 16px 48px !important; }
          .cases-header { padding: 0 16px !important; }
          .cases-cta { padding: 48px 16px !important; }
          .cases-header-inner { height: 60px !important; }
        }

        /* ── Large screens / TV (≥ 1536px) ── */
        @media (min-width: 1536px) {
          .cases-grid { columns: 5 240px !important; }
          .cases-grid-section { max-width: 1600px !important; }
        }
      `}</style>

      {/* HEADER */}
      <header
        className="cases-header"
        style={{
          background: "#FDFBF9",
          borderBottom: "1px solid rgba(64,36,20,0.08)",
          padding: "0 32px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          className="cases-header-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#402414",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <ArrowLeft size={16} />
              Voltar
            </a>
            <div style={{ width: 1, height: 20, background: "rgba(64,36,20,0.15)" }} />
            <img
              src={logoImg}
              alt="Essência Bela"
              style={{
                height: 140,
                width: "auto",
                objectFit: "contain",
                display: "block",
                marginTop: -34,
                marginBottom: -34,
              }}
            />
          </div>
          <button
            onClick={() => window.open(WA_URL, "_blank")}
            style={{
              padding: "10px 20px",
              background: "#BF245D",
              color: "#FDFBF9",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 13,
              border: "none",
              cursor: "pointer",
            }}
          >
            Agendar horário
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        className="cases-hero"
        style={{
          background: "#BF245D",
          padding: "80px 32px 64px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#FFB8D2",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Nosso trabalho
        </span>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FDFBF9",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Cases de{" "}
          <em style={{ fontStyle: "italic", color: "#FFB8D2" }}>Sucesso</em>
        </h1>
        <p
          style={{
            color: "rgba(253,251,249,0.65)",
            fontSize: 16,
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Cada resultado é uma história de cuidado, confiança e beleza transformada com amor e técnica.
        </p>

        {/* FILTER PILLS */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="filter-btn"
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(253,251,249,0.25)",
                background: active === cat ? "#BF245D" : "transparent",
                color: active === cat ? "#FDFBF9" : "rgba(253,251,249,0.75)",
                fontWeight: 500,
                fontSize: 13,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="cases-grid-section" style={{ padding: "64px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="cases-grid"
          style={{
            columns: "4 240px",
            columnGap: 16,
            gap: 16,
          }}
        >
          {filtered.map(({ img, label, tag }, i) => (
            <div
              key={i}
              className="case-card"
              onClick={() => setLightbox(img)}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(64,36,20,0.10)",
                background: "#fff",
              }}
            >
              <img
                src={img}
                alt={label}
                style={{ width: "100%", display: "block", verticalAlign: "bottom" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(64,36,20,0.7) 0%, transparent 55%)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#FFB8D2",
                      marginBottom: 4,
                    }}
                  >
                    {tag}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#FDFBF9" }}>{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#7A5C4A", padding: "80px 0" }}>
            Nenhum case encontrado nessa categoria.
          </p>
        )}
      </section>

      {/* CTA BOTTOM */}
      <section
        className="cases-cta"
        style={{
          background: "#FDFBF9",
          borderTop: "1px solid rgba(64,36,20,0.08)",
          padding: "64px 32px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#402414",
            marginBottom: 12,
          }}
        >
          Quer ser o próximo case?
        </h2>
        <p style={{ color: "#7A5C4A", fontSize: 15, marginBottom: 32 }}>
          Agende seu horário e deixe a gente cuidar da sua beleza.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => window.open(WA_URL, "_blank")}
            style={{
              padding: "14px 28px",
              background: "#BF245D",
              color: "#FDFBF9",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            Agendar pelo WhatsApp
          </button>
          <button
            onClick={() => window.open("https://www.instagram.com/essenciabela_studio/", "_blank")}
            style={{
              padding: "14px 28px",
              background: "transparent",
              color: "#402414",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: 14,
              border: "1.5px solid rgba(64,36,20,0.25)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Instagram size={16} />
            Ver no Instagram
          </button>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox}
            alt="Case"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 12,
              objectFit: "contain",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
}
