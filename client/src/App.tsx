import {
	ChevronDown,
	ExternalLink,
	Quote,
	Monitor,
	Globe2,
  } from "lucide-react";
  
  import {
	footerLink,
	intro,
	links,
	name,
	nextButton,
	projects,
	taglines,
  } from "@/content.tsx";
  
  import "./App.css";
  import Navbar from "@/components/Navbar/Navbar.tsx";
  import { useScrollSpy } from "@/components/Navbar/useScrollSpy.ts";
  import Button from "@/components/Button/Button.tsx";
  import RotatingText from "@/components/RotatingText/RotatingText.tsx";
  import { sections } from "@/components/Navbar/types.ts";
  import SkillMatrix from "@/components/SkillMatrix/SkillMatrix.tsx";
  // import ContactForm from "@/components/ContactForm/ContactForm.tsx"; //
  import CopyValue from "@/components/CopyValue/CopyValue.tsx";
  import Snowflakes from "@/components/Snowflakes/Snowflakes.tsx";
  
  import { motion } from "framer-motion";
  //import AnimatedCounter from "@/components/SkillMatrix/AnimatedCounter.tsx";
  import { useState } from "react";
  
  const App = () => {
	const { getSectionRef } = useScrollSpy();
	const [ hoveredStat, setHoveredStat ] = useState<string | null>( null );
  
	return (
	  <div className="min-h-screen bg-gray-900 text-white relative w-full">
		{/* Image/gradient de fond existant */}
		<div className="hero-background motion-safe:animate-fade" />

		{/* Snowflakes - composant isolé avec useMemo */}
		<Snowflakes />
  
		<Navbar />
  
		<main className="relative z-10">
		  {/* About Section */}
		  <section
			className="min-h-screen flex flex-col items-center justify-center relative"
			id={sections.ABOUT}
			ref={getSectionRef(sections.ABOUT)}
		  >
			<div className="container mx-auto px-6 lg:px-16 my-6">
			  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 items-center">
				{/* === Carte de présentation (gauche) === */}
				<motion.aside
  				 initial={{ opacity: 0, x: -20 }}
 				 whileInView={{ opacity: 1, x: 0 }}
  				 whileHover={{ y: -6, scale: 1.01 }}
  				 transition={{ duration: 0.6, ease: "easeOut" }}
  			     viewport={{ once: true, margin: "-80px" }}
                 className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-xl order-2 lg:order-1"
            >
  {/* Halo animé derrière la carte */}
  <motion.div
    aria-hidden
    className="pointer-events-none absolute -inset-16 rounded-full"
    style={{
      background:
        "radial-gradient(closest-side, rgba(99,102,241,0.25), transparent 70%)",
      filter: "blur(20px)",
      zIndex: 0,
    }}
    animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }}
    transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
  />

				  <p className="text-white/90">
					I am <span className="font-semibold">{name}</span>, a DevOps Engineer at Crédit Agricole Group Infrastructure Platform. Every day I push the boundaries of cloud and HPC technologies. I love exploring GitHub projects for inspiration and learning.
				  </p>
  
				  {/* Citation */}
				  <motion.blockquote
					whileHover= {{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
					transition= {{ duration: 0.3 }}
					/*className="relative mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 cursor-pointer"*/
					className="relative mt-5 rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-white/70 cursor-pointer italic"
					>
					<Quote className="absolute -left-3 -top-3 h-5 w-5 text-white/30" />
					"The sole purpose of human existence is to kindle a light in the darkness of mere being." -C. G. Jung
				  </motion.blockquote>

  
				  {/* Tags */}
				  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
					<motion.span 
					  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
					  transition={{ duration: 0.2 }}
					  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm cursor-pointer"
					>
					  <motion.span 
						className="h-2 w-2 rounded-full bg-blue-400"
						animate={ { boxShadow: [ "0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 8px rgba(59, 130, 246, 0)" ] } }
						transition={ { duration: 2, repeat: Infinity } }
					  />
					  Web & Desktop
					</motion.span>
					<motion.span 
					  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
					  transition={{ duration: 0.2 }}
					  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm cursor-pointer"
					>
					  <motion.span 
						className="h-2 w-2 rounded-full bg-amber-400"
						animate={ { boxShadow: [ "0 0 0 0 rgba(245, 158, 11, 0.7)", "0 0 0 8px rgba(245, 158, 11, 0)" ] } }
						transition={ { duration: 2, repeat: Infinity } }
					  />
					  APIs & Infrastructure
					</motion.span>
				  </div>
  
				  {/* Stats */}
				  {/*
				  <div className="mt-6 grid grid-cols-3 gap-3">
					<motion.div 
					  onMouseEnter={ () => setHoveredStat( "experience" ) }
					  onMouseLeave={ () => setHoveredStat( null ) }
					  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center flex flex-col items-center justify-center min-h-28 transition-all duration-300 cursor-default"
					  style={ {
						borderColor: hoveredStat === "experience" ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)",
						backgroundColor: hoveredStat === "experience" ? "rgba(59, 130, 246, 0.1)" : "rgba(255, 255, 255, 0.05)"
					  } }
					>
					  <motion.div
						aria-hidden
						className="pointer-events-none absolute inset-0 rounded-2xl"
						style={ {
							background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)"
						} }
						animate={ { opacity: hoveredStat === "experience" ? 1 : 0 } }
						transition={ { duration: 0.3 } }
					  />
					  <div className="relative z-10 text-3xl font-semibold">
						<AnimatedCounter value={ 1 } isVisible={ true } />
						<span className="ml-1 text-lg">+ years</span>
					  </div>
					  <div className="mt-2 text-xs uppercase tracking-widest text-white/70">
						Experience
					  </div>
					</motion.div>
  
					<motion.div 
					  onMouseEnter={ () => setHoveredStat( "projects" ) }
					  onMouseLeave={ () => setHoveredStat( null ) }
					  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center flex flex-col items-center justify-center min-h-28 transition-all duration-300 cursor-default"
					  style={ {
						borderColor: hoveredStat === "projects" ? "rgba(236, 72, 153, 0.5)" : "rgba(255, 255, 255, 0.1)",
						backgroundColor: hoveredStat === "projects" ? "rgba(236, 72, 153, 0.1)" : "rgba(255, 255, 255, 0.05)"
					  } }
					>
					  <motion.div
						aria-hidden
						className="pointer-events-none absolute inset-0 rounded-2xl"
						style={ {
							background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.15), transparent 70%)"
						} }
						animate={ { opacity: hoveredStat === "projects" ? 1 : 0 } }
						transition={ { duration: 0.3 } }
					  />
					  <div className="relative z-10 text-3xl font-semibold">
						<AnimatedCounter value={ 5 } isVisible={ true } />
						<span className="ml-1 text-lg">+ projects</span>
					  </div>
					  <div className="mt-2 text-xs uppercase tracking-widest text-white/70">
						DELIVERED
					  </div>
					</motion.div>
					*/}
  
				  <div className="mt-6 grid grid-cols-1 gap-3">
				  <motion.div 
					onMouseEnter={ () => setHoveredStat( "platform" ) }
					onMouseLeave={ () => setHoveredStat( null ) }
					className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center flex flex-col items-center justify-center min-h-28 transition-all duration-300 cursor-default"
					style={ {
						borderColor: hoveredStat === "platform" ? "rgba(168, 85, 247, 0.5)" : "rgba(255, 255, 255, 0.1)",
						backgroundColor: hoveredStat === "platform" ? "rgba(168, 85, 247, 0.1)" : "rgba(255, 255, 255, 0.05)"
					} }
					>
					  <motion.div
						aria-hidden
						className="pointer-events-none absolute inset-0 rounded-2xl"
						style={ {
							background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.15), transparent 70%)"
						} }
						animate={ { opacity: hoveredStat === "platform" ? 1 : 0 } }
						transition={ { duration: 0.3 } }
					  />
					  <div className="relative z-10 flex items-center justify-center gap-3 text-base font-semibold">
						<span className="flex items-center gap-1 text-blue-400"><Monitor className="h-5 w-5" /> Web</span>
						<span className="flex items-center gap-1 text-emerald-400"><Globe2 className="h-5 w-5" /> Desktop</span>
					  </div>
					  <div className="mt-2 text-xs uppercase tracking-widest text-white/70">
						Cross-Platform
					  </div>
					</motion.div>
				  </div>
				</motion.aside>
  
				{/* === Accroche/titre (droite) — contenu existant adapté === */}
				<div className="text-center lg:text-left order-1 lg:order-2">
				  <RotatingText
					bottom={intro[1]}
					className="text-5xl sm:text-6xl font-bold mb-6"
					top={
					  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
						{intro[0]}
					  </span>
					}
				  />
  
				  <p
					className="sm:text-xl text-md text-gray-400 mb-6 motion-safe:animate-fade-up"
					style={{ animationDelay: "250ms", animationFillMode: "both" }}
				  >
					{taglines.join(" • ")}
				  </p>
  
				  <div className="flex justify-center lg:justify-start space-x-4 mb-8">
					{links.map(({ link, value, icon, label }, i) => {
					  const delay = i * 250 + 500;
					  if (link) {
						return (
						  <a
							aria-label={label}
							className="p-2 hover:text-blue-400 transition-colors motion-safe:animate-fade-up"
							href={link}
							key={link}
							rel="noreferrer"
							style={{
							  animationDelay: `${String(delay)}ms`,
							  animationFillMode: "both",
							}}
							target="_blank"
						  >
							{icon}
						  </a>
						);
					  } else if (value) {
						return (
						  <CopyValue
							animationDelay={delay}
							icon={icon}
							key={value}
							label={label}
							value={value}
						  />
						);
					  }
					})}
				  </div>
  
				  <a
					aria-label="Scroll to projects section"
					className="inline-block motion-safe:animate-fade-up mx-auto lg:mx-0"
					href={`#${sections.PROJECTS}`}
					style={{ animationDelay: "1000ms", animationFillMode: "both" }}
				  >
					<Button className="group flex pr-4">
					  <span className="pr-6 text-nowrap">{nextButton}</span>
					  <ChevronDown
						className="motion-safe:group-hover:animate-bounce-mid"
						size={24}
					  />
					</Button>
				  </a>
				</div>
			  </div>
			</div>
		  </section>
  
	  {/* Projects Section */}
	  <section
		className="py-20 bg-gray-800"
		id={sections.PROJECTS}
		ref={getSectionRef(sections.PROJECTS)}
	  >
		<div className="container mx-auto px-6">
		  <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{projects.map((project, i) => {
				const colors = [
					{ border: "rgba(59, 130, 246, 0.4)", glow: "rgba(59, 130, 246, 0.2)", tag: "bg-blue-500/20 text-blue-300", hover: "hover:border-blue-400/50" },
					{ border: "rgba(236, 72, 153, 0.4)", glow: "rgba(236, 72, 153, 0.2)", tag: "bg-pink-500/20 text-pink-300", hover: "hover:border-pink-400/50" },
					{ border: "rgba(168, 85, 247, 0.4)", glow: "rgba(168, 85, 247, 0.2)", tag: "bg-purple-500/20 text-purple-300", hover: "hover:border-purple-400/50" },
					{ border: "rgba(34, 197, 94, 0.4)", glow: "rgba(34, 197, 94, 0.2)", tag: "bg-green-500/20 text-green-300", hover: "hover:border-green-400/50" },
					{ border: "rgba(245, 158, 11, 0.4)", glow: "rgba(245, 158, 11, 0.2)", tag: "bg-amber-500/20 text-amber-300", hover: "hover:border-amber-400/50" },
					{ border: "rgba(14, 165, 233, 0.4)", glow: "rgba(14, 165, 233, 0.2)", tag: "bg-cyan-500/20 text-cyan-300", hover: "hover:border-cyan-400/50" }
				];
				const color = colors[i % colors.length];

				return (
					<motion.a
						key={project.title}
						aria-label={`Visit ${project.title} project homepage`}
						className="group"
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						initial={ { opacity: 0, y: 30 } }
						whileInView={ { opacity: 1, y: 0 } }
						transition={ { delay: i * 0.1, duration: 0.6 } }
						viewport={ { once: true, margin: "-50px" } }
					>
						<motion.div 
							className={`rounded-2xl overflow-hidden duration-300 transition-all cursor-pointer h-full flex flex-col border-2 backdrop-blur-sm ${ color.hover }`}
							style={ {
								borderColor: "rgba(255, 255, 255, 0.1)",
								backgroundColor: "rgba(20, 20, 35, 0.8)"
							} }
							whileHover={ { 
								borderColor: color.border,
								boxShadow: `0 0 40px ${ color.glow }, inset 0 0 40px ${ color.glow }`,
								y: -8
							} }
						>
							{/* Animated background glow */}
							<motion.div
								aria-hidden
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
								style={ {
									background: `radial-gradient(circle at 50% 50%, ${ color.glow }, transparent 70%)`
								} }
								animate={ { opacity: [ 0, 0.1, 0 ] } }
								transition={ { duration: 2, repeat: Infinity } }
							/>

							{/* Image with gradient overlay */}
							<motion.div
								className="h-40 relative overflow-hidden"
								whileHover={ { scale: 1.05 } }
								transition={ { duration: 0.3 } }
							>
								<img
									alt={`Picture of ${project.title}`}
									className="h-full w-full object-cover object-top"
									src={project.img}
								/>
								<motion.div
									className="absolute inset-0 pointer-events-none"
									style={ {
										background: `linear-gradient(135deg, ${ color.glow }, transparent 60%)`
									} }
									initial={ { opacity: 0 } }
									whileHover={ { opacity: 0.4 } }
									transition={ { duration: 0.3 } }
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />
							</motion.div>

							<div className="p-6 flex flex-col flex-1 relative z-10">
								<motion.h3 
									className="text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent"
									style={ {
										backgroundImage: `linear-gradient(135deg, ${color.border}, rgba(255,255,255,0.8))`
									} }
								>
									{project.title}
								</motion.h3>

								<p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech, idx) => (
										<motion.span
											key={tech}
											className={`${color.tag} px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm`}
											initial={ { opacity: 0, scale: 0.8 } }
											whileInView={ { opacity: 1, scale: 1 } }
											whileHover={ { scale: 1.15, y: -2 } }
											transition={ { delay: idx * 0.05, duration: 0.2 } }
										>
											{tech}
										</motion.span>
									))}
								</div>

								<motion.div 
									className="inline-flex items-center gap-2 mt-auto font-semibold transition-all"
									style={ { color: color.border } }
									whileHover={ { gap: "8px", x: 4 } }
									transition={ { duration: 0.2 } }
								>
									<span>View Project</span>
									<motion.div
										whileHover={ { rotate: 45 } }
										transition={ { duration: 0.2 } }
									>
										<ExternalLink size={18} />
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</motion.a>
				);
			})}
		  </div>
		</div>
	  </section>		  {/* Skills Section */}
		  <SkillMatrix />
  
	  {/* Contact Section */}
	  {/* <section
		className="py-20 bg-gray-800"
		id={sections.CONTACT}
		ref={getSectionRef(sections.CONTACT)}
	  >
		<div className="container mx-auto px-6 text-center">
		  <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

		  <p className="text-xl text-gray-400 mb-8">
			I'm always open to discussing new projects and opportunities.
		  </p>

		  <ContactForm />
		</div>
	  </section> */}
  
	  {/* Footer Section */}
	  <section className="flex flex-col items-center mx-8 text-center my-14">
		<p className="text-gray-400">{name} · All rights reserved</p>
		{footerLink ? (
		  <a
			className="mt-4 text-blue-400 underline"
			href={footerLink.href}
			rel="noreferrer"
			target="_blank"
		  >
			{footerLink.label}
		  </a>
		) : null}
	  </section>
	</main>
	  </div>
	);
  };
  
  export default App;
  