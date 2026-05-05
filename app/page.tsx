"use client";

import Script from "next/script";

declare global {
  interface Window {
    toggleSection: (section: string) => void;
  }
}

export default function Home() {
  return (
    <>
      <div id="app">
        <div className="top-row">
          <div className="card" id="selector-card">
            <div className="section-label">Root note</div>
            <div className="pill-row" id="root-pills" style={{ marginBottom: 16 }}></div>
            <div
              className="section-toggle"
              onClick={() => window.toggleSection?.("chords")}
            >
              <span className="section-label" style={{ marginBottom: 0 }}>
                Chord type
              </span>
              <span className="toggle-arrow" id="chords-arrow">
                {"▼"}
              </span>
            </div>
            <div
              className="section-content"
              id="chords-content"
              style={{ paddingTop: 8, paddingBottom: 8, maxHeight: 500 }}
            >
              <div id="chord-type-groups"></div>
            </div>
            <div className="group-divider" style={{ margin: "8px 0" }}></div>
            <div
              className="section-toggle"
              onClick={() => window.toggleSection?.("scales")}
            >
              <span className="section-label" style={{ marginBottom: 0 }}>
                Scales
              </span>
              <span className="toggle-arrow collapsed" id="scales-arrow">
                {"▼"}
              </span>
            </div>
            <div
              className="section-content collapsed"
              id="scales-content"
              style={{ paddingTop: 8, paddingBottom: 8, maxHeight: 500 }}
            >
              <div id="scale-type-groups"></div>
            </div>
          </div>
          <div className="card" id="fretboard-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span className="section-label" style={{ marginBottom: 0 }}>
                Fretboard
              </span>
              <div style={{ display: "flex", gap: 4 }} id="hand-toggle"></div>
            </div>
            <div className="badge-row" id="badge-row" style={{ minHeight: 32 }}></div>
            <div id="chord-thumbnails"></div>
            <div className="fretboard-scroll" id="fretboard-container"></div>
            <div className="legend" id="legend"></div>
          </div>
        </div>
        <div className="card">
          <div className="section-label" id="key-context-label">
            Key context
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-title">Chords in key</div>
              <div id="diatonic-chords"></div>
            </div>
            <div className="info-card">
              <div className="info-title">Circle of fifths</div>
              <div id="circle-of-fifths" style={{ textAlign: "center" }}></div>
            </div>
            <div className="info-card">
              <div className="info-title">Pentatonic scales</div>
              <div id="pentatonic-panel"></div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/guitar-app.js" strategy="afterInteractive" />
    </>
  );
}
