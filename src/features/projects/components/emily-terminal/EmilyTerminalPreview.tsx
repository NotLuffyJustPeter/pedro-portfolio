import {
  useState,
} from 'react';

import './EmilyTerminalPreview.scss';

type EmilyTerminalTab =
  | 'stat'
  | 'inv'
  | 'data';

type InventoryItem = {
  name: string;
  meta: string;
};

const INVENTORY: InventoryItem[] = [
  {
    name: '9MM PISTOL',
    meta: 'EQUIPPED',
  },
  {
    name: '9MM MAGAZINE',
    meta: 'x03',
  },
  {
    name: 'STERILE BANDAGE',
    meta: 'x04',
  },
  {
    name: 'BETA BLOCKERS',
    meta: 'x08',
  },
  {
    name: 'MEDICAL KIT',
    meta: 'READY',
  },
  {
    name: 'WATER BOTTLE',
    meta: '78%',
  },
];

const TAB_TITLES: Record<
  EmilyTerminalTab,
  string
> = {
  stat: 'EMILY_LIMON // STATUS',
  inv: 'FIELD_INVENTORY',
  data: 'COMPANION_SIGNAL',
};

export default function EmilyTerminalPreview() {
  const [
    activeTab,
    setActiveTab,
  ] =
    useState<EmilyTerminalTab>(
      'stat',
    );

  return (
    <div className="emily-terminal">
      <div className="emily-terminal__chassis">
        {/* SCREWS */}

        <span className="emily-terminal__screw emily-terminal__screw--tl" />
        <span className="emily-terminal__screw emily-terminal__screw--tr" />
        <span className="emily-terminal__screw emily-terminal__screw--bl" />
        <span className="emily-terminal__screw emily-terminal__screw--br" />

        {/* CRT */}

        <div className="emily-terminal__crt">
          <div
            className="emily-terminal__glass"
            aria-hidden="true"
          />

          <div
            className="emily-terminal__scanlines"
            aria-hidden="true"
          />

          <div
            className="emily-terminal__noise"
            aria-hidden="true"
          />

          <div
            key={activeTab}
            className="emily-terminal__boot"
          >
            {/* =================================
                TOP BAR
            ================================= */}

            <header className="emily-terminal__topbar">
              <span className="emily-terminal__system-title">
                {
                  TAB_TITLES[
                    activeTab
                  ]
                }
              </span>

              <span className="emily-terminal__line" />

              <div className="emily-terminal__quick-stats">
                <span>
                  HP
                  <strong>
                    100
                  </strong>
                </span>

                <span>
                  PAN
                  <strong>
                    08
                  </strong>
                </span>

                <span className="emily-terminal__pulse">
                  +
                </span>
              </div>
            </header>

            {/* =================================
                CONTENT
            ================================= */}

            <main className="emily-terminal__body">
              {activeTab ===
                'stat' && (
                <StatScreen />
              )}

              {activeTab ===
                'inv' && (
                <InventoryScreen />
              )}

              {activeTab ===
                'data' && (
                <DataScreen />
              )}
            </main>

            {/* =================================
                NAV
            ================================= */}

            <footer className="emily-terminal__navbar">
              <TerminalTab
                label="STAT"
                active={
                  activeTab ===
                  'stat'
                }
                onClick={() =>
                  setActiveTab(
                    'stat',
                  )
                }
              />

              <span className="emily-terminal__line" />

              <TerminalTab
                label="INV"
                active={
                  activeTab ===
                  'inv'
                }
                onClick={() =>
                  setActiveTab(
                    'inv',
                  )
                }
              />

              <span className="emily-terminal__line" />

              <TerminalTab
                label="DATA"
                active={
                  activeTab ===
                  'data'
                }
                onClick={() =>
                  setActiveTab(
                    'data',
                  )
                }
              />

              <span className="emily-terminal__line" />

              <SignalBars />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TAB
========================================================= */

type TerminalTabProps = {
  label: string;

  active: boolean;

  onClick: () => void;
};

function TerminalTab({
  label,
  active,
  onClick,
}: TerminalTabProps) {
  return (
    <button
      type="button"
      className={`emily-terminal__nav-item${
        active
          ? ' is-active'
          : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

/* =========================================================
   STAT
========================================================= */

function StatScreen() {
  return (
    <div className="emily-terminal__content emily-terminal__content--stat">
      {/* LEFT METRICS */}

      <aside className="emily-terminal__metrics">
        <Metric
          label="HLT"
          value="100"
        />

        <Metric
          label="PAN"
          value="08"
        />

        <Metric
          label="FAT"
          value="14"
        />

        <Metric
          label="TRS"
          value="92"
          active
        />
      </aside>

      {/* CENTER */}

      <section className="emily-terminal__profile">
        <span className="emily-terminal__profile-label">
          COMPANION TRUST
        </span>

        <div className="emily-terminal__trust-block">
          <span className="emily-terminal__trust-value">
            92
          </span>

          <span className="emily-terminal__trust-unit">
            %
          </span>
        </div>

        <div className="emily-terminal__trust-track">
          <span />
        </div>

        <span className="emily-terminal__relationship">
          RELATIONSHIP //
          PARTNER
        </span>
      </section>

      {/* RIGHT STATUS */}

      <aside className="emily-terminal__condition">
        <div
          className="emily-terminal__medical-icon"
          aria-hidden="true"
        >
          <span />
          <span />
        </div>

        <strong>
          ALIVE
        </strong>

        <span>
          STABLE
        </span>
      </aside>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
  active?: boolean;
};

function Metric({
  label,
  value,
  active = false,
}: MetricProps) {
  return (
    <div
      className={`emily-terminal__metric${
        active
          ? ' is-active'
          : ''
      }`}
    >
      <span>{label}</span>

      <strong>
        {value}
      </strong>
    </div>
  );
}

/* =========================================================
   INVENTORY
========================================================= */

function InventoryScreen() {
  return (
    <div className="emily-terminal__content emily-terminal__content--inventory">
      <div className="emily-terminal__inventory-header">
        <span>
          ITEM
        </span>

        <span>
          STATUS
        </span>
      </div>

      <ul className="emily-terminal__inventory">
        {INVENTORY.map(
          (
            item,
            index,
          ) => (
            <li
              key={
                item.name
              }
              className={
                index === 0
                  ? 'is-selected'
                  : undefined
              }
            >
              <span>
                {item.name}
              </span>

              <strong>
                {item.meta}
              </strong>
            </li>
          ),
        )}
      </ul>

      <div className="emily-terminal__inventory-footer">
        <span>
          LOAD // LIGHT
        </span>

        <span>
          MEDICAL READY
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

function DataScreen() {
  return (
    <div className="emily-terminal__content emily-terminal__content--data">
      <div className="emily-terminal__data-copy">
        <span>
          RADIO LINK
        </span>

        <strong>
          SIGNAL LOCKED
        </strong>

        <p>
          LAST KNOWN POSITION
          <br />
          ROSEWOOD SECTOR
        </p>
      </div>

      <div
        className="emily-terminal__radar"
        aria-hidden="true"
      >
        <span className="emily-terminal__radar-grid emily-terminal__radar-grid--one" />

        <span className="emily-terminal__radar-grid emily-terminal__radar-grid--two" />

        <span className="emily-terminal__radar-grid emily-terminal__radar-grid--three" />

        <span className="emily-terminal__radar-cross emily-terminal__radar-cross--horizontal" />

        <span className="emily-terminal__radar-cross emily-terminal__radar-cross--vertical" />

        <span className="emily-terminal__radar-sweep" />

        <span className="emily-terminal__radar-blip" />

        <span className="emily-terminal__radar-center" />
      </div>

      <div className="emily-terminal__data-meta">
        <div>
          <span>
            AFFINITY
          </span>

          <strong>
            92%
          </strong>
        </div>

        <div>
          <span>
            RANGE
          </span>

          <strong>
            1.4 KM
          </strong>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SIGNAL BARS
========================================================= */

function SignalBars() {
  return (
    <div
      className="emily-terminal__signal-bars"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
