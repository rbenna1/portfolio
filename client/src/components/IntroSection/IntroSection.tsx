import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Globe2, Monitor, Smartphone, Mail, Github, Linkedin } from "lucide-react";
// adapte le chemin vers ton AnimatedCounter existant
import AnimatedCounter from "../SkillMatrix/AnimatedCounter";

const Pill: FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90">
    {children}
  </span>
);

const StatCard: FC<{ title: string; delay?: number; children: React.ReactNode }> = ({
  title,
  delay = 0,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
  >
    <div className="text-3xl font-semibold tracking-tight">{children}</div>
    <div className="mt-1 text-xs uppercase tracking-widest text-white/70">{title}</div>
  </motion.div>
);

const IntroSection: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px 0px" });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* === Carte de présentation (à gauche) === */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-600/30 to-indigo-900/30 p-6 shadow-xl backdrop-blur-md md:p-8"
        >
          <p className="text-white/80">
            Je suis <span className="font-semibold text-white">[Ton Nom]</span>, ingénieur logiciel.
            J’adore concevoir des produits élégants, performants et maintenables.
          </p>

          {/* Citation */}
          <blockquote className="relative mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90">
            <Quote className="absolute -left-3 -top-3 h-6 w-6 text-white/30" />
            « Construire simple, fiable et scalable — puis itérer vite. »
          </blockquote>

          {/* Tags */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Pill>
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Web, Mobile & Desktop
            </Pill>
            <Pill>
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Serveurs, APIs, Infra
            </Pill>
            <Pill>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Design & Accessibilité
            </Pill>
            <Pill>
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Qualité & Rédaction technique
            </Pill>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <StatCard title="Expérience">
              <AnimatedCounter value={2} isVisible={inView} />
              <span className="ml-1 text-lg">+ ans</span>
            </StatCard>
            <StatCard title="Projets" delay={0.1}>
              <AnimatedCounter value={20} isVisible={inView} />
              <span className="ml-1 text-lg">+</span>
            </StatCard>
            <StatCard title="Cross-platform" delay={0.2}>
              <div className="flex items-center justify-center gap-1 text-sm">
                <Monitor className="h-4 w-4" /> Web
                <Smartphone className="h-4 w-4" /> Mobile
                <Globe2 className="h-4 w-4" /> Desktop
              </div>
            </StatCard>
          </div>

          {/* Liens */}
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="https://github.com/tonpseudo" target="_blank" rel="noreferrer" className="hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/tonpseudo" target="_blank" rel="noreferrer" className="hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:toi@mail.com" className="hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.aside>

        {/* === Titre / Accroche (à droite) === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-block rounded-full bg-slate-900/60 px-4 py-2 text-sm shadow-sm ring-1 ring-white/10">
            <span className="font-semibold">[Ton Nom]</span>
          </div>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Un logiciel qui <span className="text-indigo-300">respecte</span> l’utilisateur
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/80">
            Conçu pour les utilisateurs et les développeurs. La qualité n’est pas un luxe, c’est un catalyseur.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white shadow hover:bg-indigo-500"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-white/10 px-4 py-2 font-medium text-white shadow ring-1 ring-white/15 hover:bg-white/15"
            >
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
