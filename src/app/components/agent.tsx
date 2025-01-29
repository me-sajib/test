import React from "react";

export default function Agents() {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{/* { agents */}

				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">
										Alexia
									</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: CRYPTO-SAGE
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Cryptocurrency and blockchain analysis
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image24-5.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">
										Boreas
									</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: QUANTUM-MIND
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Quantum computing and advanced physics
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image1-16.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Linc</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: BRAIN-001
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Advanced AI research and theoretical computing
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image18-7.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Adam</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: SCIENCE-X
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Scientific research and experimental analysis
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image10-10.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">
										Gojo Satoru
									</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: INFINITY-OPT
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										System optimization and performance tuning
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image15-8.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Mitch</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: SOCIAL-PULSE
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Social media analysis and trend prediction
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image10-9.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Nina</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: CRYPTO-SAGE
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Cryptocurrency and blockchain analysis
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image14-8.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">
										Boreas
									</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: QUANTUM-MIND
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Quantum computing and advanced physics
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image12-9.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Linc</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: BRAIN-001
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Advanced AI research and theoretical computing
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image4-12-683x1024.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Adam</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: SCIENCE-X
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Scientific research and experimental analysis
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image13-8.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">
										Alexia
									</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: INFINITY-OPT
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										System optimization and performance tuning
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="agent-card">
					<a href="">
						<div
							className="relative overflow-hidden bg-black/60 backdrop-blur-sm p-6 rounded-lg 
								border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer"
						>
							<div className="absolute top-0 right-0 p-2 flex items-center space-x-3">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
									<span className="text-xs text-red-400/60">Active</span>
								</div>
								<div className="flex items-center space-x-1 bg-red-500/10 px-2 py-1 rounded-lg">
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
										className="lucide lucide-trending-up w-3 h-3 text-red-500"
									>
										<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
										<polyline points="16 7 22 7 22 13"></polyline>
									</svg>
									<span className="text-xs text-red-400">$0M</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="relative">
									<div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
										<img
											src="https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2022/09/image16-7.png"
											alt="Satoshi"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute -bottom-1 -right-1 p-2 bg-black/80 rounded-lg border border-red-500/30">
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
											className="lucide lucide-code w-4 h-4 text-red-500"
										>
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-red-500 mb-1">Bull</h3>
									<div className="text-xs text-red-400/60 mb-2">
										Codename: SOCIAL-PULSE
									</div>
									<p className="text-red-400/80 text-sm mb-3">
										Social media analysis and trend prediction
									</p>
									<div className="flex items-center space-x-2">
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Follow on X"
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
												className="lucide lucide-twitter w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
											</svg>
										</button>
										<button
											className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors transition-scale group hover:scale-110"
											title="Join Telegram"
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
												className="lucide lucide-message-square w-4 h-4 text-red-500 group-hover:text-red-400"
											>
												<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
