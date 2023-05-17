"use client";
import { useForm } from "react-hook-form";
import { MemeTemplate } from "@/app/(data)/types";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import MemeDisplay from "./MemeDisplay";

const textValues = (template: MemeTemplate) =>
	template.textareas.reduce(
		(values, ta) => ({
			...values,
			[ta.id]: ta.text
		}),
		{} as Record<string, string>
	);

const MemeEditor = ({ templates }: { templates: MemeTemplate[] }) => {
	const { register, handleSubmit, watch, setValue } = useForm<{
		template: string;
		values: Record<string, string>;
	}>({
		defaultValues: {
			template: templates[0].id,
			values: textValues(templates[0])
		}
	});

	const templateId = watch("template");
	const template = templates.find(({ id }) => id === templateId)!;

	const values = watch("values");

	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onSubmit = async (data: {
		template: string;
		values: Record<string, string>;
	}) => {
		await fetch("http://localhost:3000/api/memes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				template: data.template,
				values: data.values
			})
		});
		startTransition(() => router.refresh());
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid xs:grid-cold-1 md:grid-cols-[60%_40%]">
				<MemeDisplay {...template} overrideValues={values} />
				<div className="pl-2 text-white">
					<select
						className="select select-bordered w-full"
						value={templateId}
						onChange={(evt) => {
							const newTemplate = templates.find(
								({ id }) => id === evt.target.value
							)!;
							setValue("template", newTemplate.id);
							setValue("values", textValues(newTemplate));
						}}
					>
						{templates.map(({ id }) => (
							<option key={id} value={id}>
								{id}
							</option>
						))}
					</select>
					{template.textareas.map(({ id }, i) => (
						<div key={i} className="mt-5">
							<label htmlFor={id}>{id}</label>
							<input
								className="input input-bordered w-full"
								type="text"
								{...register(`values.${id}`)}
							/>
						</div>
					))}
					<div className="flex justify-end">
						<button
							className="btn btn-primary mt-5 min-w-[200px]"
							type="submit"
							disabled={isPending}
						>
							Add Meme
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default MemeEditor;
