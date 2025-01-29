"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

const AccessTerminal = ({ isOpen, onClose }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	if (!isOpen) return null;
	// fixed inset-0 z-50 flex items-center justify-center
	// fixed inset-0 bg-black/70 backdrop-blur-sm w-full
	return (
		<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
			<div className="bg-black/90 border border-red-500/20 rounded-lg p-8 w-full max-w-md relative">
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute right-4 top-4 text-red-500 hover:text-red-400 transition-colors"
				>
					<X size={20} />
				</button>

				{/* Header */}
				<div className="text-center mb-6">
					<h2 className="text-red-500 text-2xl font-mono mb-2">
						Access Terminal
					</h2>
					<p className="text-red-500/60 text-sm font-mono">
						Enter your credentials to continue
					</p>
				</div>

				{/* Form */}
				<form className="space-y-4">
					<div>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className="w-full bg-black border border-red-500/20 rounded px-4 py-2 text-red-500 placeholder-red-500/40 focus:outline-none focus:border-red-500/50"
						/>
					</div>

					<div>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							className="w-full bg-black border border-red-500/20 rounded px-4 py-2 text-red-500 placeholder-red-500/40 focus:outline-none focus:border-red-500/50"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-500 font-mono py-2 rounded transition-colors"
					>
						Sign In
					</button>
				</form>

				{/* Footer */}
				<div className="text-center mt-4">
					<a
						href="#"
						className="text-red-500/60 hover:text-red-500 text-sm font-mono transition-colors"
					>
						Need new credentials?
					</a>
				</div>
			</div>
		</div>
	);
};

export default AccessTerminal;
