import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, ShoppingBag, Package, Users, BarChart3, Settings,
  TrendingUp, Plus, Search, Filter, Eye, Edit, Trash2, Download,
  CheckCircle2, Clock, Truck, XCircle, Mail, Phone, Award, ArrowUpRight, ArrowDownRight,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { products, formatTND } from "@/lib/data";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — RMM" }] }),
  component: Admin,
});

type ViewId = "overview" | "orders" | "products" | "networkers" | "analytics" | "settings";

const menu: { icon: typeof LayoutDashboard; label: string; id: ViewId }[] = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", id: "overview" },
  { icon: ShoppingBag, label: "Commandes", id: "orders" },
  { icon: Package, label: "Produits", id: "products" },
  { icon: Users, label: "Networkers", id: "networkers" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Paramètres", id: "settings" },
];

const viewTitles: Record<ViewId, { eyebrow: string; title: string }> = {
  overview: { eyebrow: "Tableau de bord", title: "Vue d'ensemble" },
  orders: { eyebrow: "Gestion", title: "Commandes" },
  products: { eyebrow: "Catalogue", title: "Produits" },
  networkers: { eyebrow: "Réseau", title: "Networkers" },
  analytics: { eyebrow: "Performance", title: "Analytics" },
  settings: { eyebrow: "Configuration", title: "Paramètres" },
};

function Admin() {
  const [view, setView] = useState<ViewId>("overview");
  const meta = viewTitles[view];

  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-sidebar border-r border-border">
        <div className="h-16 px-6 flex items-center border-b border-border">
          <Link to="/"><Logo compact /></Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {menu.map((m) => {
            const active = view === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setView(m.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                  active
                    ? "bg-gradient-gold text-background font-medium"
                    : "text-foreground/70 hover:text-[var(--gold)] hover:bg-[var(--gold)]/5"
                }`}
              >
                <m.icon className="h-4 w-4" />{m.label}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-wider">RMM Admin v1.0</div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0">
        <header className="h-16 border-b border-border px-6 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">{meta.eyebrow}</div>
            <h1 className="font-serif text-xl mt-0.5">{meta.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hairline hover:border-[var(--gold)]/40"><Settings className="h-4 w-4" /></button>
            <div className="w-9 h-9 rounded-full bg-gradient-gold grid place-items-center text-background font-semibold text-sm">A</div>
          </div>
        </header>

        <div className="p-6 lg:p-8 space-y-8">
          {view === "overview" && <OverviewView />}
          {view === "orders" && <OrdersView />}
          {view === "products" && <ProductsView />}
          {view === "networkers" && <NetworkersView />}
          {view === "analytics" && <AnalyticsView />}
          {view === "settings" && <SettingsView />}
        </div>
      </main>
    </div>
  );
}

/* ============ OVERVIEW ============ */
function OverviewView() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "CA total", value: "248 720 TND", trend: "+18 %" },
          { label: "Commandes / jour", value: "67", trend: "+12 %" },
          { label: "Networkers actifs", value: "342", trend: "+8 %" },
          { label: "Panier moyen", value: "215 TND", trend: "+4 %" },
        ].map((k) => (
          <div key={k.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{k.label}</div>
            <div className="font-serif text-3xl mt-3 text-gradient-gold">{k.value}</div>
            <div className="text-xs text-emerald-400 mt-2 inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" />{k.trend} ce mois</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 p-7 rounded-xl bg-card hairline">
          <h3 className="font-serif text-xl mb-1">Évolution des ventes</h3>
          <p className="text-xs text-muted-foreground mb-6">6 derniers mois</p>
          <div className="flex items-end gap-3 h-48">
            {[42, 58, 51, 72, 84, 96].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full rounded-t-md bg-gradient-to-t from-[var(--gold)]/30 to-[var(--gold)] hover:opacity-80 transition" style={{ height: `${v}%` }} />
                <div className="text-[10px] text-muted-foreground">{["Oct", "Nov", "Déc", "Jan", "Fév", "Mar"][i]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-7 rounded-xl bg-card hairline">
          <h3 className="font-serif text-xl mb-1">Par catégorie</h3>
          <p className="text-xs text-muted-foreground mb-6">Répartition CA</p>
          <div className="space-y-3">
            {[["Soin Visage", 48], ["Compléments", 22], ["Soin Corps", 14], ["Bien-être", 11], ["Maquillage", 5]].map(([cat, pct]) => (
              <div key={cat as string}>
                <div className="flex justify-between text-xs"><span>{cat}</span><span className="text-[var(--gold)]">{pct} %</span></div>
                <div className="mt-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-gold rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ ORDERS ============ */
type OrderStatus = "Payée" | "En préparation" | "Expédiée" | "Livrée" | "Annulée";
const orders: { id: string; customer: string; email: string; date: string; total: number; items: number; status: OrderStatus; networker?: string }[] = [
  { id: "RMM-10342", customer: "Yasmine Khelifi", email: "y.khelifi@mail.tn", date: "12 Juin 2026", total: 489, items: 3, status: "Livrée", networker: "Ahmed Bouzid" },
  { id: "RMM-10341", customer: "Karim Mansouri", email: "karim.m@mail.tn", date: "12 Juin 2026", total: 215, items: 2, status: "Expédiée" },
  { id: "RMM-10340", customer: "Sonia Belaïd", email: "sonia.b@mail.tn", date: "11 Juin 2026", total: 1240, items: 7, status: "En préparation", networker: "Lina Trabelsi" },
  { id: "RMM-10339", customer: "Hassen Gharbi", email: "h.gharbi@mail.tn", date: "11 Juin 2026", total: 189, items: 1, status: "Payée" },
  { id: "RMM-10338", customer: "Nour Hamdi", email: "nour.h@mail.tn", date: "10 Juin 2026", total: 670, items: 4, status: "Livrée", networker: "Mehdi Saâdi" },
  { id: "RMM-10337", customer: "Selim Jaziri", email: "selim.j@mail.tn", date: "10 Juin 2026", total: 145, items: 1, status: "Annulée" },
  { id: "RMM-10336", customer: "Rim Chaabane", email: "rim.c@mail.tn", date: "9 Juin 2026", total: 920, items: 5, status: "Livrée" },
];

const statusStyle: Record<OrderStatus, { cls: string; icon: typeof CheckCircle2 }> = {
  "Payée": { cls: "bg-blue-500/15 text-blue-400", icon: CheckCircle2 },
  "En préparation": { cls: "bg-amber-500/15 text-amber-400", icon: Clock },
  "Expédiée": { cls: "bg-purple-500/15 text-purple-400", icon: Truck },
  "Livrée": { cls: "bg-emerald-500/15 text-emerald-400", icon: CheckCircle2 },
  "Annulée": { cls: "bg-rose-500/15 text-rose-400", icon: XCircle },
};

function OrdersView() {
  const [filter, setFilter] = useState<OrderStatus | "all">("all");
  const list = filter === "all" ? orders : orders.filter((o) => o.status === filter);
  const stats = [
    { label: "Aujourd'hui", value: orders.filter((o) => o.date.includes("12 Juin")).length, sub: "commandes" },
    { label: "En attente", value: orders.filter((o) => o.status === "Payée" || o.status === "En préparation").length, sub: "à traiter" },
    { label: "En transit", value: orders.filter((o) => o.status === "Expédiée").length, sub: "colis" },
    { label: "CA semaine", value: formatTND(orders.reduce((s, o) => s + o.total, 0)), sub: "TTC" },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="font-serif text-3xl mt-3 text-gradient-gold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="p-7 rounded-xl bg-card hairline">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 className="font-serif text-xl">Toutes les commandes</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input placeholder="Rechercher…" className="pl-9 pr-3 py-2 text-sm rounded-md bg-background hairline focus:border-[var(--gold)]/40 outline-none" />
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hairline text-sm hover:border-[var(--gold)]/40"><Download className="h-4 w-4" />Exporter</button>
          </div>
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {(["all", "Payée", "En préparation", "Expédiée", "Livrée", "Annulée"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-xs px-3 py-1.5 rounded-full transition ${
                filter === s ? "bg-gradient-gold text-background font-medium" : "hairline text-foreground/70 hover:border-[var(--gold)]/40"
              }`}
            >
              {s === "all" ? "Toutes" : s}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                {["N°", "Client", "Date", "Articles", "Total", "Networker", "Statut", ""].map((h) => <th key={h} className="text-left py-3 px-2">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {list.map((o) => {
                const S = statusStyle[o.status];
                return (
                  <tr key={o.id} className="border-b border-border/50 hover:bg-[var(--gold)]/5">
                    <td className="py-4 px-2 font-mono text-[var(--gold)]">{o.id}</td>
                    <td className="py-4 px-2">
                      <div className="font-medium">{o.customer}</div>
                      <div className="text-xs text-muted-foreground">{o.email}</div>
                    </td>
                    <td className="py-4 px-2 text-muted-foreground">{o.date}</td>
                    <td className="py-4 px-2">{o.items}</td>
                    <td className="py-4 px-2 font-medium">{formatTND(o.total)}</td>
                    <td className="py-4 px-2 text-muted-foreground">{o.networker ?? "—"}</td>
                    <td className="py-4 px-2">
                      <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${S.cls}`}>
                        <S.icon className="h-3 w-3" />{o.status}
                      </span>
                    </td>
                    <td className="py-4 px-2">
                      <button className="p-1.5 rounded hairline hover:border-[var(--gold)]/40"><Eye className="h-3.5 w-3.5" /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ============ PRODUCTS ============ */
function ProductsView() {
  const [cat, setCat] = useState<string>("all");
  const cats = ["all", "Soin Visage", "Soin Corps", "Compléments", "Bien-être", "Maquillage"];
  const list = cat === "all" ? products : products.filter((p) => p.category === cat);
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Produits actifs", value: products.length, sub: "au catalogue" },
          { label: "Best-sellers", value: products.filter((p) => p.bestSeller).length, sub: "produits star" },
          { label: "Catégories", value: 5, sub: "univers" },
          { label: "PP moyen", value: Math.round(products.reduce((s, p) => s + p.pp, 0) / products.length), sub: "par produit" },
        ].map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="font-serif text-3xl mt-3 text-gradient-gold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="p-7 rounded-xl bg-card hairline">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h3 className="font-serif text-xl">Catalogue</h3>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hairline text-sm hover:border-[var(--gold)]/40"><Filter className="h-4 w-4" />Filtres</button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-gold text-background text-sm font-medium hover:opacity-90"><Plus className="h-4 w-4" />Nouveau produit</button>
          </div>
        </div>

        <div className="flex gap-2 mb-5 flex-wrap">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs px-3 py-1.5 rounded-full transition ${
                cat === c ? "bg-gradient-gold text-background font-medium" : "hairline text-foreground/70 hover:border-[var(--gold)]/40"
              }`}
            >
              {c === "all" ? "Tous" : c}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                {["Produit", "Catégorie", "Prix", "Prix networker", "PP", "Stock", "Statut", "Actions"].map((h) => <th key={h} className="text-left py-3 px-2">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {list.map((p, i) => {
                const stock = 120 - i * 11;
                const low = stock < 40;
                return (
                  <tr key={p.id} className="border-b border-border/50 hover:bg-[var(--gold)]/5">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-12 rounded-md bg-gradient-to-br from-[var(--gold)]/20 to-transparent hairline" />
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="text-xs text-muted-foreground">{p.volume}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-muted-foreground">{p.category}</td>
                    <td className="py-4 px-2">{formatTND(p.price)}</td>
                    <td className="py-4 px-2 text-[var(--gold)]">{formatTND(Math.round(p.price * 0.7))}</td>
                    <td className="py-4 px-2">{p.pp}</td>
                    <td className="py-4 px-2">
                      <span className={low ? "text-amber-400" : ""}>{stock} u.</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400">Actif</span>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex gap-1">
                        <button className="p-1.5 rounded hairline hover:border-[var(--gold)]/40"><Edit className="h-3.5 w-3.5" /></button>
                        <button className="p-1.5 rounded hairline hover:border-rose-500/40 hover:text-rose-400"><Trash2 className="h-3.5 w-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ============ NETWORKERS ============ */
type Rank = "Bronze" | "Argent" | "Or" | "Platine" | "Diamant";
const networkers: { id: string; name: string; email: string; phone: string; rank: Rank; pv: number; gv: number; team: number; sponsor: string; joined: string }[] = [
  { id: "N-0421", name: "Yasmine Khelifi", email: "y.khelifi@rmm.tn", phone: "+216 22 314 510", rank: "Diamant", pv: 4200, gv: 28400, team: 47, sponsor: "—", joined: "Jan 2024" },
  { id: "N-0398", name: "Ahmed Bouzid", email: "a.bouzid@rmm.tn", phone: "+216 98 220 145", rank: "Platine", pv: 3880, gv: 19200, team: 32, sponsor: "Yasmine K.", joined: "Mar 2024" },
  { id: "N-0376", name: "Lina Trabelsi", email: "l.trabelsi@rmm.tn", phone: "+216 55 408 720", rank: "Or", pv: 3560, gv: 12100, team: 21, sponsor: "Yasmine K.", joined: "Mai 2024" },
  { id: "N-0354", name: "Mehdi Saâdi", email: "m.saadi@rmm.tn", phone: "+216 21 117 980", rank: "Or", pv: 3240, gv: 9800, team: 18, sponsor: "Ahmed B.", joined: "Juil 2024" },
  { id: "N-0331", name: "Amal Riahi", email: "a.riahi@rmm.tn", phone: "+216 27 502 311", rank: "Argent", pv: 2880, gv: 6400, team: 12, sponsor: "Lina T.", joined: "Sep 2024" },
  { id: "N-0309", name: "Skander Béji", email: "s.beji@rmm.tn", phone: "+216 29 880 412", rank: "Argent", pv: 2410, gv: 4200, team: 8, sponsor: "Mehdi S.", joined: "Nov 2024" },
  { id: "N-0287", name: "Imen Karoui", email: "i.karoui@rmm.tn", phone: "+216 50 332 199", rank: "Bronze", pv: 1620, gv: 2100, team: 4, sponsor: "Amal R.", joined: "Jan 2025" },
];

const rankStyle: Record<Rank, string> = {
  Bronze: "bg-amber-700/20 text-amber-500",
  Argent: "bg-slate-400/20 text-slate-300",
  Or: "bg-[var(--gold)]/20 text-[var(--gold)]",
  Platine: "bg-cyan-400/20 text-cyan-300",
  Diamant: "bg-fuchsia-400/20 text-fuchsia-300",
};

function NetworkersView() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Networkers actifs", value: 342, sub: "+24 ce mois" },
          { label: "Nouveaux (30j)", value: 28, sub: "adhésions" },
          { label: "Volume groupe", value: "82 130 PP", sub: "ce mois" },
          { label: "Commission versée", value: "41 200 TND", sub: "mois en cours" },
        ].map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="font-serif text-3xl mt-3 text-gradient-gold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 p-7 rounded-xl bg-card hairline overflow-x-auto">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-serif text-xl">Annuaire du réseau</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input placeholder="Nom, email…" className="pl-9 pr-3 py-2 text-sm rounded-md bg-background hairline focus:border-[var(--gold)]/40 outline-none" />
            </div>
          </div>
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                {["Networker", "Rang", "PV", "GV", "Équipe", "Sponsor", ""].map((h) => <th key={h} className="text-left py-3 px-2">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {networkers.map((n) => (
                <tr key={n.id} className="border-b border-border/50 hover:bg-[var(--gold)]/5">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-gold text-background grid place-items-center text-xs font-semibold">
                        {n.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium">{n.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{n.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${rankStyle[n.rank]}`}>
                      <Award className="h-3 w-3" />{n.rank}
                    </span>
                  </td>
                  <td className="py-4 px-2">{n.pv.toLocaleString()}</td>
                  <td className="py-4 px-2 text-[var(--gold)]">{n.gv.toLocaleString()}</td>
                  <td className="py-4 px-2">{n.team}</td>
                  <td className="py-4 px-2 text-muted-foreground">{n.sponsor}</td>
                  <td className="py-4 px-2">
                    <button className="p-1.5 rounded hairline hover:border-[var(--gold)]/40"><Eye className="h-3.5 w-3.5" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-5">
          <div className="p-7 rounded-xl bg-card hairline">
            <h3 className="font-serif text-xl mb-5">Distribution par rang</h3>
            <div className="space-y-3">
              {([["Diamant", 6], ["Platine", 18], ["Or", 42], ["Argent", 96], ["Bronze", 180]] as [Rank, number][]).map(([r, count]) => (
                <div key={r}>
                  <div className="flex justify-between text-xs">
                    <span className="inline-flex items-center gap-1"><Award className="h-3 w-3 text-[var(--gold)]" />{r}</span>
                    <span className="text-[var(--gold)]">{count}</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-gold rounded-full" style={{ width: `${(count / 180) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-7 rounded-xl bg-card hairline">
            <h3 className="font-serif text-xl mb-4">Contact rapide</h3>
            <div className="space-y-3 text-sm">
              {networkers.slice(0, 3).map((n) => (
                <div key={n.id} className="flex items-center justify-between gap-2">
                  <div>
                    <div className="font-medium">{n.name}</div>
                    <div className="text-xs text-muted-foreground">{n.phone}</div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 rounded hairline hover:border-[var(--gold)]/40"><Mail className="h-3.5 w-3.5" /></button>
                    <button className="p-2 rounded hairline hover:border-[var(--gold)]/40"><Phone className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ ANALYTICS ============ */
function AnalyticsView() {
  const monthly = [
    { m: "Oct", v: 42, o: 412 }, { m: "Nov", v: 58, o: 538 }, { m: "Déc", v: 51, o: 489 },
    { m: "Jan", v: 72, o: 642 }, { m: "Fév", v: 84, o: 718 }, { m: "Mar", v: 96, o: 812 },
    { m: "Avr", v: 88, o: 762 }, { m: "Mai", v: 104, o: 891 }, { m: "Juin", v: 118, o: 945 },
  ];
  const max = Math.max(...monthly.map((p) => p.v));
  const w = 100 / (monthly.length - 1);
  const path = monthly.map((p, i) => `${i === 0 ? "M" : "L"} ${i * w} ${100 - (p.v / max) * 90}`).join(" ");
  const area = `${path} L 100 100 L 0 100 Z`;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Visiteurs uniques", value: "48 320", delta: "+22 %", up: true },
          { label: "Taux conversion", value: "4,8 %", delta: "+0,6 pt", up: true },
          { label: "LTV client", value: "1 240 TND", delta: "+9 %", up: true },
          { label: "Taux retour", value: "1,2 %", delta: "-0,3 pt", up: false },
        ].map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="font-serif text-3xl mt-3 text-gradient-gold">{s.value}</div>
            <div className={`text-xs mt-2 inline-flex items-center gap-1 ${s.up ? "text-emerald-400" : "text-rose-400"}`}>
              {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{s.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="p-7 rounded-xl bg-card hairline">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-serif text-xl">Revenu mensuel</h3>
            <p className="text-xs text-muted-foreground mt-1">9 derniers mois — TND (en milliers)</p>
          </div>
          <div className="flex gap-2">
            {["7j", "30j", "12m"].map((p, i) => (
              <button key={p} className={`text-xs px-3 py-1.5 rounded-full ${i === 2 ? "bg-gradient-gold text-background font-medium" : "hairline text-foreground/70"}`}>{p}</button>
            ))}
          </div>
        </div>
        <div className="relative h-64">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="goldFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#goldFill)" />
            <path d={path} fill="none" stroke="var(--gold)" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
            {monthly.map((p, i) => (
              <circle key={i} cx={i * w} cy={100 - (p.v / max) * 90} r="0.8" fill="var(--gold)" />
            ))}
          </svg>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
            {monthly.map((p) => <span key={p.m}>{p.m}</span>)}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="p-7 rounded-xl bg-card hairline">
          <h3 className="font-serif text-xl mb-5">Sources de trafic</h3>
          <div className="space-y-3">
            {[["Instagram", 38], ["Bouche à oreille", 24], ["Direct", 18], ["Google", 12], ["Facebook", 8]].map(([src, pct]) => (
              <div key={src as string}>
                <div className="flex justify-between text-xs"><span>{src}</span><span className="text-[var(--gold)]">{pct} %</span></div>
                <div className="mt-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-gold rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-7 rounded-xl bg-card hairline">
          <h3 className="font-serif text-xl mb-5">Top 5 produits</h3>
          <div className="space-y-4">
            {products.slice(0, 5).map((p, i) => {
              const pct = 100 - i * 14;
              return (
                <div key={p.id}>
                  <div className="flex justify-between text-sm"><span>{p.name}</span><span className="text-[var(--gold)]">{formatTND(p.price * (30 - i * 4))}</span></div>
                  <div className="mt-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-gold rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { label: "Temps moyen / session", value: "4 min 12 s" },
          { label: "Pages / session", value: "5,8" },
          { label: "Taux de rebond", value: "32 %" },
        ].map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-card hairline">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="font-serif text-2xl mt-3">{s.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============ SETTINGS ============ */
function SettingsView() {
  return (
    <div className="max-w-2xl space-y-5">
      <div className="p-7 rounded-xl bg-card hairline">
        <h3 className="font-serif text-xl mb-1">Paramètres généraux</h3>
        <p className="text-xs text-muted-foreground">Configuration de la plateforme RMM.</p>
        <div className="mt-6 space-y-4">
          {[
            ["Nom de la marque", "Raise Mindset Master"],
            ["Devise", "TND — Dinar Tunisien"],
            ["Email contact", "contact@rmm.tn"],
            ["Téléphone", "+216 71 000 000"],
          ].map(([l, v]) => (
            <div key={l}>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</label>
              <input defaultValue={v} className="mt-1 w-full px-3 py-2 rounded-md bg-background hairline focus:border-[var(--gold)]/40 outline-none text-sm" />
            </div>
          ))}
          <button className="px-5 py-2 rounded-md bg-gradient-gold text-background text-sm font-medium hover:opacity-90">Enregistrer</button>
        </div>
      </div>
    </div>
  );
}
