"use client";
import { useEffect, useRef } from "react";
import Logo from "../assets/echo.png";
import {
	ArrowLeft,
	Shield,
	Users,
	Terminal,
	MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ArataDoc = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const fontSize = 14;
		const columns = canvas.width / fontSize;
		const drops: number[] = [];

		for (let i = 0; i < columns; i++) {
			drops[i] = 1;
		}

		const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";

		function draw() {
			if (!ctx) return;

			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
			ctx.fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);

			ctx.fillStyle = "#0F0";
			ctx.font = `${fontSize}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				const text = matrix[Math.floor(Math.random() * matrix.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				if (
					drops[i] * fontSize > (canvas?.height ?? 0) &&
					Math.random() > 0.975
				) {
					drops[i] = 0;
				}

				drops[i]++;
			}
		}

		const interval = setInterval(draw, 33);

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="min-h-screen bg-black text-red-500 font-mono p-8">
			{/* Header Navigation */}
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none blur-[1px]"
			/>

			<div className="bg-black z-50 opacity-80 w-full max-w-4xl mx-auto">
				<nav className="mb-12">
					<Link
						href="/"
						className="flex items-center text-red-500 hover:text-red-400 space-x-2"
					>
						<ArrowLeft size={16} />
						<span>Return to Platform</span>
					</Link>
				</nav>
				{/* Title Section */}
				<div className="text-center mb-12">
					<div className="relative inline-block">
						<h1 className="text-6xl font-bold mb-8 text-red-500 text-gradient cyberpunk-text">
							<a href="">
								<Image src={Logo} alt="Logo" />
							</a>
						</h1>
					</div>
					<p className="text-lg mb-4">Autonomous AI Agent Marketplace</p>
					<div className="flex justify-center space-x-6">
						<span className="flex items-center space-x-1">
							<span className="w-2 h-2 bg-red-500 rounded-full"></span>
							<span>Intelligent</span>
						</span>
						<span className="flex items-center space-x-1">
							<span className="w-2 h-2 bg-red-500 rounded-full"></span>
							<span>Secure</span>
						</span>
						<span className="flex items-center space-x-1">
							<span className="w-2 h-2 bg-red-500 rounded-full"></span>
							<span>Efficient</span>
						</span>
					</div>
				</div>

				{/* Main Content */}
				<div className="max-w-4xl mx-auto space-y-8 border border-red-500/20 rounded-lg p-6">
					{/* Abstract */}
					<h2 className="text-xl mb-4">Abstract</h2>
					<section className="border border-red-500/20 rounded-lg p-6 bg-black/50">
						<p className="text-red-500/80 mb-4">
							Arata introduces a revolutionary marketplace for autonomous AI
							agents, designed to handle a wide range of tasks from personal
							assistance to complex operations. Our platform provides immediate
							access to 25 specialized AI agents, each crafted with unique
							capabilities and expertise, enabling users to leverage advanced AI
							functionality through natural language interaction.
						</p>
						<p className="text-red-500/80">
							This paper outlines the Arata platform's architecture, agent
							capabilities, and adaptive learning mechanisms that allow our
							agents to evolve and improve through continuous interaction with
							users.
						</p>
					</section>

					{/* Introduction */}
					<h2 className="text-xl">1. Introduction</h2>
					<section className="space-y-4 border border-red-500/20 rounded-lg p-6">
						<p className="text-red-500/80">
							The growing complexity of daily tasks and digital operations has
							created a need for intelligent automation solutions that are both
							powerful and accessible. Arata addresses this need by providing a
							curated marketplace of specialized AI agents, each designed to
							excel in specific domains while maintaining the ability to learn
							and adapt from user interaction.
						</p>
						<p className="text-red-500/80">
							Our platform democratizes access to advanced AI capabilities by
							offering a natural language interface to interact with specialized
							agents, removing the technical barriers typically associated with
							AI deployment and utilization.
						</p>
					</section>

					{/* Agent Capabilities */}
					<h2 className="text-xl">2. Agent Capabilities</h2>
					<section className="space-y-4 border border-red-500/20 rounded-lg p-6">
						<p className="text-red-500/80 mb-4">
							Arata's marketplace features 25 specialized agents, each with
							unique capabilities:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Technical Specialists */}
							<div className="border border-red-500/20 rounded-lg p-4">
								<div className="flex items-center space-x-2 mb-3">
									<Terminal size={20} />
									<h3>Technical Specialists</h3>
								</div>
								<ul className="space-y-2 text-red-500/80">
									<li>• Software development and architecture</li>
									<li>• System optimization and debugging</li>
									<li>• Security analysis and testing</li>
									<li>• Data processing and analytics</li>
								</ul>
							</div>

							{/* Communication Agents */}
							<div className="border border-red-500/20 rounded-lg p-4">
								<div className="flex items-center space-x-2 mb-3">
									<MessageSquare size={20} />
									<h3>Communication Agents</h3>
								</div>
								<ul className="space-y-2 text-red-500/80">
									<li>• Email and message management</li>
									<li>• Content creation and editing</li>
									<li>• Multi-language support</li>
									<li>• Social media management</li>
								</ul>
							</div>

							{/* Business Assistants */}
							<div className="border border-red-500/20 rounded-lg p-4">
								<div className="flex items-center space-x-2 mb-3">
									<Users size={20} />
									<h3>Business Assistants</h3>
								</div>
								<ul className="space-y-2 text-red-500/80">
									<li>• Project management</li>
									<li>• Market analysis</li>
									<li>• Strategic planning</li>
									<li>• Performance optimization</li>
								</ul>
							</div>

							{/* Security Features */}
							<div className="border border-red-500/20 rounded-lg p-4">
								<div className="flex items-center space-x-2 mb-3">
									<Shield size={20} />
									<h3>Security Features</h3>
								</div>
								<ul className="space-y-2 text-red-500/80">
									<li>• Secure execution environment</li>
									<li>• Data privacy protection</li>
									<li>• Access control management</li>
									<li>• Audit trail logging</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Adaptive Learning */}
					<h2 className="text-xl">3. Adaptive Learning</h2>
					<section className="space-y-4 border border-red-500/20 rounded-lg p-6">
						<p className="text-red-500/80">
							Each Arata agent employs advanced adaptive learning mechanisms
							that enable continuous improvement through user interactions:
						</p>
						<ul className="space-y-2 text-red-500/80 ml-4">
							<li>• Pattern recognition from user interactions</li>
							<li>• Context-aware response refinement</li>
							<li>• Task-specific optimization</li>
							<li>• Cross-domain knowledge integration</li>
							<li>• Performance metrics tracking</li>
						</ul>
					</section>

					{/* Security and Privacy */}
					<h2 className="text-xl">4. Security and Privacy</h2>
					<section className="space-y-4 border border-red-500/20 rounded-lg p-6">
						<p className="text-red-500/80">
							Security and privacy are fundamental to Arata's design. Our
							platform implements:
						</p>
						<ul className="space-y-2 text-red-500/80 ml-4">
							<li>• End-to-end encryption for all communications</li>
							<li>• Secure execution environments for each agent</li>
							<li>• Strict access control and authentication</li>
							<li>• Regular security audits and updates</li>
							<li>• Comprehensive data privacy measures</li>
						</ul>
					</section>

					{/* Conclusion */}
					<h2 className="text-xl">5. Conclusion</h2>
					<section className="space-y-4  border border-red-500/20 rounded-lg p-6">
						<p className="text-red-500/80">
							Arata represents a significant advancement in making AI
							capabilities accessible and practical for everyday use. By
							providing a marketplace of specialized, evolving agents, we enable
							users to leverage advanced AI functionality without technical
							complexity.
						</p>
						<p className="text-red-500/80">
							Our platform's combination of specialized agents, adaptive
							learning, and robust security creates a powerful ecosystem for
							AI-driven task automation and assistance, setting a new standard
							for AI accessibility and effectiveness.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ArataDoc;
