import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Share2, TrendingUp, Users, ShoppingBag, Award, MessageCircle, ExternalLink, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { products, formatTND } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Espace Networker | RMM" }] }),
  component: Dashboard,
});

const ranks = ["Bronze", "Business", "Silver", "Gold", "Platinum"];
const currentRankIdx = 3; // Gold

const orders = [
  { id: "RMM-2418", date: "12 mars 2024", products: "3S Capsule × 2", total: 378, pp: 240, status: "Livrée" },
  { id: "RMM-2391", date: "08 mars 2024", products: "B Cream, Bio White", total: 355, pp: 240, status: "Expédiée" },
  { id: "RMM-2378", date: "03 mars 2024", products: "S Hydro", total: 450, pp: 300, status: "En préparation" },
  { id: "RMM-2362", date: "01 mars 2024", products: "Pack soin visage", total: 540, pp: 350, status: "À traiter" },
];

const filleuls = [
  { name: "Mehdi Saâdi", date: "15 fév 2024", rank: "Bronze", volume: 120 },
  { name: "Amal Riahi", date: "02 fév 2024", rank: "Business", volume: 280 },
  { name: "Khaled Mejri", date: "21 jan 2024", rank: "Silver", volume: 410 },
];

function Dashboard() {
  const [copied, setCopied] = useState(false);
  const link = "rmm-tunisia.com/r/yasmine-k";

  const statusColor = (s: string) =>
    s === "Livrée" ? "bg-emerald-500/15 text-emerald-400" :
    s === "Expédiée" ? "bg-sky-500/15 text-sky-400" :
    s === "En préparation" ? "bg-[var(--gold)]/15 text-[var(--gold)]" :
    "bg-muted/40 text-muted-foreground";

  return (
    <div>
      {/* HEADER */}
      <section className="relative pt-16 pb-10 border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[var(--gold)]/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Espace Networker</div>
            <h1 className="font-serif text-4xl lg:text-5xl mt-2">Bienvenue, <span className="text-gradient-gold">Yasmine</span></h1>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-background font-semibold text-sm">
            <Award className="h-4 w-4" /> Rang actuel : Gold
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {/* KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: "Volume Personnel", value: "1,840", unit: "PP", icon: TrendingUp },
            { label: "Volume Groupe", value: "8,420", unit: "PP", icon: Users },
            { label: "Filleuls Directs", value: "12", unit: "actifs", icon: Users },
            { label: "Commandes ce mois", value: "47", unit: "", icon: ShoppingBag },
          ].map((k) => (
            <div key={k.label} className="p-6 rounded-xl glass">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{k.label}</div>
                <k.icon className="h-4 w-4 text-[var(--gold)]" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="font-serif text-4xl text-gradient-gold">{k.value}</div>
                <div className="text-xs text-muted-foreground">{k.unit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RANK PROGRESSION */}
        <div className="p-7 rounded-xl bg-card hairline">
          <h2 className="font-serif text-2xl">Progression de Rang</h2>
          <div className="text-sm text-muted-foreground mt-1">1 840 PP sur 2 500 PP requis pour <span className="text-[var(--gold)]">Platinum</span> · 73 %</div>
          <div className="relative h-2 bg-secondary rounded-full mt-8">
            <div className="absolute inset-y-0 left-0 bg-gradient-gold rounded-full" style={{ width: `${(currentRankIdx / (ranks.length - 1)) * 100 + 12}%` }} />
            {ranks.map((r, i) => (
              <div key={r} className="absolute -top-1.5" style={{ left: `${(i / (ranks.length - 1)) * 100}%` }}>
                <div className={`w-5 h-5 rounded-full border-2 -translate-x-1/2 ${i <= currentRankIdx ? "bg-[var(--gold)] border-[var(--gold)]" : "bg-background border-border"}`} />
                <div className="absolute top-7 -translate-x-1/2 w-20 text-center text-xs text-muted-foreground">{r}</div>
              </div>
            ))}
          </div>
          <div className="h-12" />
        </div>

        {/* REFERRAL */}
        <div className="p-7 rounded-xl glass">
          <h2 className="font-serif text-2xl">Mon Lien de Parrainage</h2>
          <p className="text-sm text-muted-foreground mt-1">218 personnes ont cliqué sur votre lien ce mois.</p>
          <div className="mt-5 flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[260px] px-4 py-3 rounded-md bg-background hairline text-sm font-mono text-[var(--gold)] truncate">{link}</div>
            <Button onClick={() => { navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-gradient-gold text-background hover:opacity-90">
              {copied ? <><Check className="h-4 w-4 mr-2" />Copié</> : <><Copy className="h-4 w-4 mr-2" />Copier</>}
            </Button>
            <Button variant="outline" className="border-border hover:border-[var(--gold)]/40"><MessageCircle className="h-4 w-4 mr-2" />WhatsApp</Button>
            <Button variant="outline" className="border-border hover:border-[var(--gold)]/40"><Share2 className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* ORDERS */}
        <div className="p-7 rounded-xl bg-card hairline">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Mes Commandes</h2>
            <select className="text-sm bg-background border border-border rounded-md px-3 py-1.5">
              <option>Tous les statuts</option>
              <option>À traiter</option><option>En préparation</option><option>Expédiée</option><option>Livrée</option>
            </select>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
                  {["N°", "Date", "Produits", "Total", "PP", "Statut"].map((h) => <th key={h} className="text-left py-3 px-2">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-border/50 hover:bg-[var(--gold)]/5">
                    <td className="py-4 px-2 font-mono text-[var(--gold)]">{o.id}</td>
                    <td className="py-4 px-2 text-muted-foreground">{o.date}</td>
                    <td className="py-4 px-2">{o.products}</td>
                    <td className="py-4 px-2">{formatTND(o.total)}</td>
                    <td className="py-4 px-2 text-[var(--gold)]">+{o.pp}</td>
                    <td className="py-4 px-2"><span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${statusColor(o.status)}`}>{o.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* NETWORKER PRICES */}
        <div className="p-7 rounded-xl bg-card hairline">
          <h2 className="font-serif text-2xl">Prix Networker</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0, 6).map((p) => {
              const netPrice = Math.round(p.price * 0.7);
              return (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-lg bg-background hairline">
                  <div className="min-w-0">
                    <div className="font-medium truncate">{p.name}</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs line-through text-muted-foreground">{formatTND(p.price)}</span>
                      <span className="text-[var(--gold)] font-semibold">{formatTND(netPrice)}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)]/10">Commander</Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOWNLINES */}
        <div className="p-7 rounded-xl bg-card hairline">
          <h2 className="font-serif text-2xl">Mes Filleuls</h2>
          <div className="mt-5 space-y-3">
            {filleuls.map((f) => (
              <div key={f.name} className="flex items-center justify-between p-4 rounded-lg bg-background hairline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 grid place-items-center text-[var(--gold)] font-medium">{f.name[0]}</div>
                  <div>
                    <div className="font-medium">{f.name}</div>
                    <div className="text-xs text-muted-foreground">Inscrit le {f.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-gold text-background font-semibold">{f.rank}</span>
                  <div className="text-sm text-[var(--gold)]">{f.volume} PP</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="p-7 rounded-xl glass">
          <h2 className="font-serif text-2xl">Outils & Formations</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {["Catalogue PDF", "Fiches produits", "Scripts de vente", "Calendrier événements", "Groupe WhatsApp", "Replay masterclass"].map((t) => (
              <a key={t} href="#" className="flex items-center justify-between p-4 rounded-lg bg-background hairline hover:border-[var(--gold)]/40 transition">
                <span className="text-sm">{t}</span>
                <ExternalLink className="h-4 w-4 text-[var(--gold)]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
