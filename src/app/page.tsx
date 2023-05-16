import MemeDisplay from "@/app/(components)/MemeDisplay";

export default function Home() {
	return (
		<main className="max-w-[1200] flex justify-center">
			<div className="max-w-[600px]">
				<MemeDisplay
					background={{
						src: "/disaster-girl.jpg",
						width: 1200,
						height: 900,
						alt: "Disaster girl"
					}}
					textareas={[
						{
							id: "saying",
							top: 750,
							left: 100,
							width: 1000,
							height: 100,
							fontSize: 90,
							color: "white",
							text: "Hire me or else..."
						}
					]}
				/>
			</div>
		</main>
	);
}
