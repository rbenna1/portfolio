import {
	sections
} from "@/components/Navbar/types.ts";
import {
	skills
} from "@/content.tsx";
import {
	useScrollSpy
} from "@/components/Navbar/useScrollSpy.ts";
import {
	useIntersectionObserver
} from "@/utils/useIntersectionObserver.ts";
import mergeRefs from "@/utils/mergeRefs.ts";
import {
	useEffect,
	useState
} from "react";
import {
	motion
} from "framer-motion";
import {
	Code2,
	Zap
} from "lucide-react";

const skillIcons = [ Code2, Zap ];

const skillColors = [
	{ glow: "rgba(59, 130, 246, 0.4)", bg: "rgba(59, 130, 246, 0.1)", text: "#3b82f6", tag: "rgba(59, 130, 246, 0.3)" },
	{ glow: "rgba(236, 72, 153, 0.4)", bg: "rgba(236, 72, 153, 0.1)", text: "#ec4899", tag: "rgba(236, 72, 153, 0.3)" },
	{ glow: "rgba(168, 85, 247, 0.4)", bg: "rgba(168, 85, 247, 0.1)", text: "#a855f7", tag: "rgba(168, 85, 247, 0.3)" },
	{ glow: "rgba(34, 197, 94, 0.4)", bg: "rgba(34, 197, 94, 0.1)", text: "#22c55e", tag: "rgba(34, 197, 94, 0.3)" },
	{ glow: "rgba(245, 158, 11, 0.4)", bg: "rgba(245, 158, 11, 0.1)", text: "#f59e0b", tag: "rgba(245, 158, 11, 0.3)" },
	{ glow: "rgba(14, 165, 233, 0.4)", bg: "rgba(14, 165, 233, 0.1)", text: "#0ea5e9", tag: "rgba(14, 165, 233, 0.3)" }
];

const SkillMatrix = () => {
	const {
		getSectionRef
	} = useScrollSpy();
	const {
		elementRef,
		isIntersecting
	} = useIntersectionObserver<HTMLElement>( {
		threshold: 0.1
	} );
	const [ revealed, setRevealed ] = useState( false );
	const [ hoveredSkill, setHoveredSkill ] = useState<string | null>( null );

	useEffect(
		() => {
			if ( isIntersecting && !revealed ) {
				setRevealed( true );
			}
		},
		[ isIntersecting, revealed ]
	);

	return (
		<section
			className="py-20"
			id={ sections.SKILLS }
			ref={
				mergeRefs(
					getSectionRef( sections.SKILLS ),
					elementRef
				)
			}>
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-12 text-center">
					Skills
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{
						skills.map( ( skill, i ) => {
							const color = skillColors[ i % skillColors.length ];

							return (
								<motion.div
									key={ skill.name }
									initial={ { opacity: 0, y: 20 } }
									animate={
										revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
									}
									transition={ { delay: i * 0.1, duration: 0.6 } }
									onMouseEnter={ () => setHoveredSkill( skill.name ) }
									onMouseLeave={ () => setHoveredSkill( null ) }
									className="relative group h-full">
									<div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-md p-12 cursor-default transition-all duration-300 h-full flex flex-col min-h-80"
										style={ {
											borderColor: hoveredSkill === skill.name ? color.glow : "rgba(255, 255, 255, 0.1)",
											backgroundColor: hoveredSkill === skill.name ? color.bg : "rgba(255, 255, 255, 0.05)"
										} }>
										{/* Hover background glow */}
										<motion.div
											aria-hidden
											className="pointer-events-none absolute inset-0 rounded-3xl"
											style={ {
												background: `radial-gradient(circle at center, ${ color.glow }, transparent 70%)`
											} }
											animate={ { opacity: hoveredSkill === skill.name ? 1 : 0 } }
											transition={ { duration: 0.3 } }/>

						<div className="relative z-10 flex-1 flex flex-col justify-center">
											<div className="flex items-center gap-3 mb-6">
												{
													(() => {
														const IconComponent = skillIcons[ i % skillIcons.length ];

														return <IconComponent className="w-8 h-8" style={ { color: color.text } } />;
													})()
												}
												<h3 className="text-3xl font-bold transition-colors"
													style={ {
														color: hoveredSkill === skill.name ? color.text : "#ffffff"
													} }>
													{skill.name}
												</h3>
											</div>

											{/* Sub-skills as tags */}
											{
												skill.subSkills && skill.subSkills.length > 0 && (
													<div className="flex flex-wrap gap-3">
														{
															skill.subSkills.map( ( subSkill ) => (
																<motion.span
																	key={ subSkill }
																	initial={ { scale: 0.9, opacity: 0 } }
																	animate={
																		hoveredSkill === skill.name
																			? { scale: 1, opacity: 1 }
																			: { scale: 0.9, opacity: 0.6 }
																	}
																	transition={ { duration: 0.2 } }
																	className="px-4 py-2 text-purple-300 rounded-lg text-sm font-semibold backdrop-blur-sm transition-colors"
																	style={ {
																		backgroundColor: hoveredSkill === skill.name ? color.tag : "rgba(139, 92, 246, 0.15)"
																	} }>
																	{subSkill}
																</motion.span>
															) )
														}
													</div>
												)
											}
										</div>
									</div>
								</motion.div>
							);
						} )
					}
				</div>
			</div>
		</section>
	);
};

export default SkillMatrix;
