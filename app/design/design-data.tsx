export interface Design {
    title: string;
    year: number;
    tools: string;
    description: string;
    status?: string;
    url?: string | null;
}

export const designs: Design[] = [
    {
        title: "London Coffee Roasters",
        year: 2026,
        tools: "Visual Design · Figma",
        description: "A complete design system for a specialty coffee mobile app, built from scratch. Pastel palette, three-typeface system, 8pt grid, reusable components, and three high-fidelity screens grounded in a Wes Anderson-inspired aesthetic direction.",
        url: null,
    },
    {
        title: "Cafe Immersive Experience",
        year: 2026,
        tools: "Interaction Design · Figma · Miro · Shapes XR · Thinglink · Insta 360 · Meta Quest 3",
        description: "A 360-degree immersive video experience set inside a specialty cafe with an in-house roastery. A Birkbeck project exploring spatial interaction and immersive media — part learning, part play, built with some interesting tools along the way",
        status: "In progress · May 2026",
        url: null,
    },
];