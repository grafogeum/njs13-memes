import MemeDisplay from "@/app/(components)/MemeDisplay";
import MemeEditor from "@/app/(components)/MemeEditor";

import { MemeTemplate, Meme } from "@/app/(data)/types";

export default async function Home() {
	const memeTemplatesReq = await fetch(
		"http://localhost:3000/api/memeTemplates"
	);
	const memeTemplates = (await memeTemplatesReq.json()) as MemeTemplate[];

	const memesReq = await fetch("http://localhost:3000/api/memes");
	const memes = (await memesReq.json()) as Meme[];

	return (
		<main className="p-2 max-w-[1200px] mx-auto">
			<MemeEditor templates={memeTemplates} />
			<h2 className="text-3xl font-bold mt-5 text-white">Memes</h2>
			<div className="max-w-[600] grid grid-cols-1 md:grid-cols-2 gap-2">
				{memes.map(({ id, template, values }) => (
					<MemeDisplay
						key={id}
						{...memeTemplates.find(({ id }) => id === template)!}
						overrideValues={values}
					/>
				))}
			</div>
		</main>
	);
}
