"use client";

import { useRef, useState, type Dispatch, type KeyboardEvent, type SetStateAction } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import { PANELS } from "@/content/care";
import type { BookingState } from "@/lib/booking";

type CareProps = {
  setBooking: Dispatch<SetStateAction<BookingState>>;
};

export default function Care({ setBooking }: CareProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectIndex(index: number, focus: boolean) {
    setActiveIndex(index);
    if (focus) tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % PANELS.length;
    if (event.key === "ArrowLeft") next = (index - 1 + PANELS.length) % PANELS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = PANELS.length - 1;
    if (next !== null) {
      event.preventDefault();
      selectIndex(next, true);
    }
  }

  function handlePresetClick(presetQuem: BookingState["quem"]) {
    setBooking((current) => ({ ...current, quem: presetQuem }));
  }

  return (
    <section className="care" id="atendimento">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="h2">
            Atendimento para cada
            <br />
            fase da vida
          </h2>
          <p>Cada público tem um formato próprio de atendimento, combinado desde a primeira conversa.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Públicos atendidos">
          {PANELS.map((panel, index) => (
            <button
              key={panel.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              className="tab"
              role="tab"
              type="button"
              id={"tab-" + panel.id}
              aria-controls={"pn-" + panel.id}
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => selectIndex(index, false)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {panel.tabLabel}
            </button>
          ))}
        </div>

        {PANELS.map((panel, index) => (
          <div
            key={panel.id}
            className="panel grid12"
            role="tabpanel"
            id={"pn-" + panel.id}
            aria-labelledby={"tab-" + panel.id}
            tabIndex={0}
            hidden={activeIndex !== index}
          >
            <div className="panel-main">
              <h3>{panel.title}</h3>
              <p className="desc">{panel.desc}</p>
              <div className="format">
                <h4>{panel.formatTitle}</h4>
                <p>{panel.formatText}</p>
              </div>
              <a className="btn btn-ghost" href="#agendar" onClick={() => handlePresetClick(panel.presetQuem)}>
                {panel.ctaLabel}
                <ArrowIcon />
              </a>
            </div>
            <div className="topics">
              <h4>Temas frequentes</h4>
              <ul>
                {panel.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
