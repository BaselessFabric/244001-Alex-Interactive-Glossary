"use client";

import Image from "next/image";
import SideBar from "./components/SideBar";
import GlossaryViewer from "./components/GlossaryViewer";
import { useState } from "react";
import concepts from "../app/modal/conepts";

interface Term {
    name: string;
    definition: string;
    // Include any other properties that Term might have
}

export default function Home() {
    const [selectedTerm, setSelectedTerm] = useState<Term | null>(
        concepts.JSX as Term
    );

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <SideBar setTerm={setSelectedTerm} />
            <GlossaryViewer term={selectedTerm} />
        </main>
    );
}
