import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$VELL token — Vellichor Docs",
  description: "Vellichor's utility and governance token — live on Robinhood Chain via the pons launchpad.",
};

const FEE_TIERS = [
  { tier: "Tier 1", threshold: "100,000 $VELL", pct: "0.01%", discount: "0.25 points", resultingFee: "1.75%", reduction: "12.5% cheaper" },
  { tier: "Tier 2", threshold: "500,000 $VELL", pct: "0.05%", discount: "0.5 points", resultingFee: "1.5%", reduction: "25% cheaper" },
  { tier: "Tier 3", threshold: "1,000,000 $VELL", pct: "0.1%", discount: "1.0 point", resultingFee: "1.0%", reduction: "50% cheaper" },
];

const RESOLVED = [
  "Launch platform: live on Robinhood Chain via the pons (ponsfamily.com) launchpad. Contract: 0x3d8C79bE2071CA84b0EfAe66E1437d9417ea4226.",
  "Owner/admin surface: none. $VELL (PonsLauncherToken.sol) is a fixed-supply, immutable ERC-20 — no owner role, no mint function, no tax, no blacklist. The only time-boxed restriction is a formula-based anti-bot/anti-whale max-wallet/max-tx limit on pool buys during a fixed post-launch block window; afterward it behaves as a plain ERC-20 forever.",
  "Total supply: 1,000,000,000 $VELL.",
  "Priority drop access threshold: 1,000,000 $VELL (fixed count, no oracle needed).",
  'Fee discount tiers: 100,000 / 500,000 / 1,000,000 $VELL → 1.75% / 1.5% / 1.0% resulting fee (down from the 2% base). Corrected from an earlier ambiguous "1%/2%/5% discount" draft.',
  "Governance: on-chain, dedicated governance contract (not off-chain Snapshot-style).",
  "Threshold denomination: fixed token counts, not USD value — removes the price-oracle dependency entirely.",
];

const OPEN = [
  "Design and audit scope for the on-chain governance contract.",
];

export default function VellTokenPage() {
  return (
    <div>
      <span className="eyebrow">Token</span>
      <h1 className="mt-3 font-display text-3xl font-normal leading-tight text-ink sm:text-4xl">
        $VELL token
      </h1>
      <p className="mt-2 text-sm italic leading-relaxed text-ink-dim">
        Vellichor&apos;s utility and governance token — live on Robinhood Chain via the{" "}
        <a
          href="https://www.ponsfamily.com/launchpad/0x3d8c79be2071ca84b0efae66e1437d9417ea4226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-deep hover:underline"
        >
          pons launchpad
        </a>
        .
      </p>

      <p className="mt-6 text-base leading-relaxed text-ink-dim">
        $VELL is the token holders <strong className="text-ink">hold</strong> (balance-checked at
        snapshot points, not locked or staked) to unlock priority access to curated bottle drops,
        get marketplace fee discounts, and participate in governance over which bottles Vellichor
        acquires next. Unlike Vault Units (the ERC-1155 tokens representing fractional ownership
        of a specific physical bottle), $VELL does not represent a claim on any bottle — it
        governs the protocol, not the vault contents.
      </p>

      <div className="mt-10">
        <h2 className="font-display text-lg font-normal text-ink">What $VELL is</h2>
        <p className="mt-3 text-base leading-relaxed text-ink-dim">
          $VELL is live on <strong className="text-ink">Robinhood Chain</strong> — the same chain
          Vellichor&apos;s own contracts (
          <code className="font-data text-sm">VellichorVault.sol</code>,{" "}
          <code className="font-data text-sm">VellichorMarket.sol</code>) are deployed on —
          launched via the{" "}
          <a
            href="https://www.ponsfamily.com/launchpad/0x3d8c79be2071ca84b0efae66e1437d9417ea4226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-deep hover:underline"
          >
            pons launchpad
          </a>{" "}
          (<code className="font-data text-sm">PonsLauncherToken.sol</code>), trading against a
          Uniswap V3 pool.
        </p>

        <div className="mt-4 rounded-xl border border-line bg-panel-2 p-5">
          <p className="font-data text-xs uppercase tracking-wide text-ink-dim">Contract</p>
          <p className="mt-1 break-all font-data text-sm text-ink">
            0x3d8C79bE2071CA84b0EfAe66E1437d9417ea4226
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a
              href="https://robinhoodchain.blockscout.com/address/0x3d8c79be2071ca84b0efae66e1437d9417ea4226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-deep hover:underline"
            >
              Blockscout
            </a>
            <a
              href="https://dexscreener.com/robinhood/0x3d8c79be2071ca84b0efae66e1437d9417ea4226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-deep hover:underline"
            >
              Dexscreener
            </a>
            <a
              href="https://www.geckoterminal.com/robinhood/pools/0x3d8c79be2071ca84b0efae66e1437d9417ea4226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-deep hover:underline"
            >
              GeckoTerminal
            </a>
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          <li className="flex gap-2 text-base leading-relaxed text-ink-dim">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Supply:</strong> 1,000,000,000 $VELL, fixed — minted
              once to the launch factory at deployment. No further minting is possible.
            </span>
          </li>
          <li className="flex gap-2 text-base leading-relaxed text-ink-dim">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Tax:</strong> none. The contract has no buy/sell tax
              mechanism at all.
            </span>
          </li>
          <li className="flex gap-2 text-base leading-relaxed text-ink-dim">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="text-ink">Controls:</strong> none after launch — no owner role,
              no mint function, no blacklist. The only restriction is a temporary, formula-based
              max-wallet/max-tx limit on pool buys during a fixed post-launch block window
              (anti-bot/anti-whale), after which the token behaves as a plain, fully liquid ERC-20.
            </span>
          </li>
        </ul>

        <div className="mt-5 rounded-xl border border-line bg-panel-2 p-5">
          <p className="text-sm leading-relaxed text-ink-dim">
            <strong className="text-ink">$VELL is immutable and ownerless.</strong> Once deployed,
            nobody — including Vellichor — can mint more supply, apply a tax, or blacklist an
            address. The launch-window buy limits are enforced by a fixed formula in the contract
            itself, not by admin discretion.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg font-normal text-ink">How the platform uses it</h2>
        <p className="mt-3 text-sm italic leading-relaxed text-ink-dim">
          This section describes the intended design — as of now, none of this is implemented in{" "}
          <code className="font-data text-xs not-italic">VellichorVault.sol</code> or{" "}
          <code className="font-data text-xs not-italic">VellichorMarket.sol</code>. Both
          contracts currently only reference the payment token (USDG, live on Robinhood Chain
          mainnet) — neither touches $VELL anywhere. This needs to be built before $VELL has any
          real function beyond being tradable.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-dim">
          $VELL uses a <strong className="text-ink">hold model, not staking or burning</strong> —
          a deliberate simplification. Vellichor already has one token-locking mechanism (Vault
          Units as DeFi collateral, per the roadmap&apos;s Phase 3). Adding a second, separate
          locking mechanism for $VELL would mean two different &quot;my tokens are locked&quot;
          systems in the same product. Reading a wallet&apos;s balance at a snapshot point avoids
          that — no staking contract required.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-dim">
          All thresholds below are{" "}
          <strong className="text-ink">fixed token counts, not USD value</strong> — this was a
          deliberate correction from an earlier USD-denominated design, specifically to remove any
          dependency on a price oracle. A fixed count is simple to check on-chain (
          <code className="font-data text-sm">balanceOf() &gt;= threshold</code>) and can&apos;t
          be gamed by manipulating $VELL&apos;s price right before a snapshot.
        </p>

        <h3 className="mt-8 font-display text-base font-normal text-ink">
          1. Marketplace fee discount tiers
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-dim">
          Tiered by $VELL balance, checked at the moment of a{" "}
          <code className="font-data text-sm">buyUnits()</code> or{" "}
          <code className="font-data text-sm">buyListing()</code> call. Vellichor&apos;s base
          marketplace fee is <strong className="text-ink">2%</strong>. Discounts are expressed as
          a <strong className="text-ink">flat percentage-point reduction off that 2%</strong>, not
          a percentage-of-the-fee — this was corrected from an earlier draft that used &quot;1% /
          2% / 5% discount,&quot; which was ambiguous and, read as points off 2%, made Tier 2 zero
          out the fee entirely and made Tier 3 mathematically impossible (a discount larger than
          the fee itself). The fee floor is capped so it never reaches zero — treasury always
          collects something, even from the largest $VELL holders:
        </p>

        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-panel-2">
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  Tier
                </th>
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  Threshold
                </th>
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  % of total supply
                </th>
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  Discount (points off 2%)
                </th>
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  Resulting fee
                </th>
                <th className="px-4 py-3 font-data text-xs font-medium uppercase tracking-wide text-ink-dim">
                  Reduction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {FEE_TIERS.map((row) => (
                <tr key={row.tier}>
                  <td className="px-4 py-3 font-data text-ink">{row.tier}</td>
                  <td className="px-4 py-3 text-ink-dim">{row.threshold}</td>
                  <td className="px-4 py-3 text-ink-dim">{row.pct}</td>
                  <td className="px-4 py-3 text-ink-dim">{row.discount}</td>
                  <td className="px-4 py-3 text-ink-dim">{row.resultingFee}</td>
                  <td className="px-4 py-3 text-ink-dim">{row.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 font-display text-base font-normal text-ink">
          2. Priority drop access
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-dim">
          Holding <strong className="text-ink">1,000,000 $VELL</strong> (0.1% of total supply),
          checked at a snapshot block (e.g. 24 hours before a new bottle opens to the general
          public), unlocks an early-access window. This is a{" "}
          <strong className="text-ink">hold check, not a stake</strong> — nothing is locked, the
          token stays fully liquid.
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink-dim">
          This threshold is deliberately set equal to Tier 3 of the fee discount table above — a
          holder who qualifies for priority access also automatically qualifies for the top fee
          discount tier, rather than tracking two separate, unrelated thresholds.
        </p>

        <h3 className="mt-8 font-display text-base font-normal text-ink">
          3. Governance — on-chain
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-dim">
          Governance will use a{" "}
          <strong className="text-ink">dedicated on-chain governance contract</strong>, not
          off-chain Snapshot-style voting. $VELL balance at a snapshot block determines voting
          weight on which bottles Vellichor curates and acquires next, and the outcome is enforced
          by the contract itself rather than relying on the team to manually honor an off-chain
          signal. This is a heavier build than off-chain voting (needs its own contract, its own
          audit) but means votes actually bind on-chain outcomes rather than just being advisory.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-dim">
          None of these three are implemented yet. Before mainnet, each needs its own contract
          logic and audit — the same way <code className="font-data text-sm">buyUnits()</code>{" "}
          and <code className="font-data text-sm">buyListing()</code> were built and reasoned
          through individually. The on-chain governance contract in particular is a substantial
          build on its own, separate from the Vault/Market contracts.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg font-normal text-ink">
          Resolved decisions (formerly open questions)
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {RESOLVED.map((item) => (
            <li key={item} className="flex gap-2 text-base leading-relaxed text-ink-dim">
              <span className="mt-1 shrink-0 text-amber-deep">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg font-normal text-ink">Still open</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {OPEN.map((item) => (
            <li key={item} className="flex gap-2 text-base leading-relaxed text-ink-dim">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full border border-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
