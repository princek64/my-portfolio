import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Me",
};

export default function About() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>
            <div className="space-y-6">

            </div>
        </section>
    );
}
