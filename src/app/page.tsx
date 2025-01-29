"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AccessTerminal from "./components/modal";
import Agents from "./components/agent";
import Link from "next/link";
export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const [isModalOpen, setIsModalOpen] = useState(false);

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
		<main className="min-h-screen bg-black font-mono relative overflow-hidden">
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none blur-[1px]"
			/>

			<AccessTerminal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>

			<div
				className={`${
					isModalOpen ? "bg-dark" : ""
				} container mx-auto px-4 py-12`}
			>
				<div className="text-center mb-16 relative">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
					<div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-2xl -z-10"></div>
					<div className="max-w-2xl mx-auto mb-16">
						<div className="relative inline-block">
							<h1 className="text-6xl font-bold mb-8 text-red-500 text-gradient cyberpunk-text">
								<a href="">
									<Image src="https://i.ibb.co.com/JJ4NzSp/echo.png" alt="Logo" />
								</a>
							</h1>
						</div>
						<div className="flex justify-center space-x-6 mb-6">
							<div className="group relative">
								<a
									href="https://x.com/echogridagi"
									target="_blank"
									rel="noopener noreferrer"
									className="block"
								>
									<div className="absolute inset-0 bg-red-500/20 rounded-full blur transition-all group-hover:bg-red-500/30"></div>
									<div
										className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/40 
									border border-red-500/30 group-hover:border-red-500/60 transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-twitter w-4 h-4 text-red-500"
										>
											<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
										</svg>
									</div>
									<span
										className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-red-500/60 
									opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
									>
										Twitter
									</span>
								</a>
							</div>

							<div className="group relative">
								<Link className="block" href="/litepaper">
									<div className="absolute inset-0 bg-red-500/20 rounded-full blur transition-all group-hover:bg-red-500/30"></div>
									<div
										className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/40 
									border border-red-500/30 group-hover:border-red-500/60 transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-book w-4 h-4 text-red-500"
										>
											<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
										</svg>
									</div>
									<span
										className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-red-500/60 
									opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
									>
										Litepaper
									</span>
								</Link>
							</div>
						</div>
						<button
							onClick={() => setIsModalOpen(true)}
							className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-colors mx-auto mt-4"
						>
							<span className="flex items-center space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-bot w-5 h-5"
								>
									<path d="M12 8V4H8"></path>
									<rect width="16" height="12" x="4" y="8" rx="2"></rect>
									<path d="M2 14h2"></path>
									<path d="M20 14h2"></path>
									<path d="M15 13v2"></path>
									<path d="M9 13v2"></path>
								</svg>
								<span>Build Your Agent</span>
							</span>
						</button>
						<div className="flex justify-center items-center mt-6">
							<button
								onClick={() => setIsModalOpen(true)}
								className="text-sm text-red-400/60 hover:text-red-400 transition-colors"
							>
								Sign In
							</button>
							<span className="text-sm text-red-400/60 block mx-2">/</span>
							<button
								onClick={() => setIsModalOpen(true)}
								className="text-sm text-red-400/60 hover:text-red-400 transition-colors"
							>
								{" "}
								Register
							</button>
						</div>
					</div>
				</div>

				<div className="max-w-6xl mx-auto px-4 mb-8">
					<div className="flex flex-col items-center space-y-4">
						<div className="relative w-full max-w-3xl mx-auto opacity-1 transform-none">
							<div className="relative">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500/60"
								>
									<circle cx="11" cy="11" r="8"></circle>
									<path d="m21 21-4.3-4.3"></path>
								</svg>
								<input
									type="text"
									placeholder="Search agents..."
									className="w-full bg-black/40 border border-red-500/30 rounded-lg pl-12 pr-4 py-3 
									text-red-400 placeholder-red-400/50 focus:outline-none focus:border-red-500/60
									backdrop-blur-sm"
									value=""
								/>
							</div>
						</div>
						<select className="w-48 bg-black/40 border border-red-500/30 rounded-lg px-4 py-2 text-red-400">
							<option value="marketCap">Sort by Market Cap</option>
							<option value="name">Sort by Name</option>
						</select>
					</div>
				</div>

				<Agents />
			</div>
		</main>
	);
}
