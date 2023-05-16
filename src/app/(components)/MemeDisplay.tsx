"use client";
import Image from "next/image";
import { Anton } from "next/font/google";
import { useElementSize } from "usehooks-ts";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const MemeDisplay = ({
	background: { src, width, height, alt },
	textareas,
	overrideValues
}: {
	background: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
	textareas: {
		id: string;
		top: number;
		left: number;
		width: number;
		height: number;
		color: string;
		fontSize: number;
		text: string;
	}[];
	overrideValues: Record<string, string>;
}) => {
	const [memeRef, size] = useElementSize();
	const ratio = size.width / width;
	return (
		<div className="relative" ref={memeRef}>
			<Image src={src} width={width} height={height} alt={alt} />
			{textareas.map(
				({ id, top, left, width, height, color, fontSize, text }) => (
					<div
						key={id}
						className="absolute"
						style={{
							top: top * ratio,
							left: left * ratio,
							width: width * ratio,
							height: height * ratio
						}}
					>
						<div
							className={`${anton.className} text-center text-${color} text-stroke-white`}
							style={{
								fontSize: fontSize * ratio,
								lineHeight: "1.1"
							}}
						>
							{overrideValues?.[id] ?? text}
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default MemeDisplay;
