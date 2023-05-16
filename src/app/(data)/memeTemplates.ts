import { MemeTemplate } from "./types";

const templates: MemeTemplate[] = [
	{
		id: "disaster-girl",
		background: {
			src: "/disaster-girl.jpg",
			width: 1200,
			height: 900,
			alt: " Disaster Girl"
		},
		textareas: [
			{
				id: "tagline",
				top: 750,
				left: 100,
				width: 900,
				height: 130,
				text: "Your code without me on board",
				fontSize: 100,
				color: "white"
			}
		]
	},
	{
		id: "guy-looking",
		background: {
			src: "/guy-looking.jpg",
			width: 1600,
			height: 1066,
			alt: "Guy Looking"
		},
		textareas: [
			{
				id: "new",
				top: 850,
				left: 50,
				width: 1400,
				height: 320,
				text: "When you see my nifty functions ",
				fontSize: 90,
				color: "black"
			},
			{
				id: "person",
				top: 0,
				left: 250,
				width: 800,
				height: 320,
				text: "JavaScript Dev",
				fontSize: 70,
				color: "black"
			},
			{
				id: "old",
				top: 70,
				left: 1000,
				width: 600,
				height: 320,
				text: "Fixing Bugs 🐞 ",
				fontSize: 70,
				color: "black"
			}
		]
	},
	{
		id: "drake",
		background: {
			src: "/drake.jpg",
			width: 1200,
			height: 1200,
			alt: "Drake"
		},
		textareas: [
			{
				id: "top",
				top: 200,
				left: 600,
				width: 600,
				height: 600,
				text: "Messy code ",
				fontSize: 100,
				color: "black"
			},
			{
				id: "bottom",
				top: 800,
				left: 600,
				width: 600,
				height: 600,
				text: "Clean code ",
				fontSize: 100,
				color: "black"
			}
		]
	}
];

export default templates;
