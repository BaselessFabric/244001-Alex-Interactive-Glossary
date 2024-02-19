/**
 * Represents the Home page component.
 */
"use client";
import GlossaryViewer from "./components/GlossaryViewer";
import { useState } from "react";
import concepts from "../app/modal/conepts";
import SideBar from "./components/SideBar";
import Quiz from "./components/Quiz";

interface Term {
    name: string;
    definition: string;
    image: string;
    question: string;
    answer: string;
}

/**
 * Renders the Home page.
 * @returns The rendered Home page component.
 */
export default function Home() {
    // initializes the selected term state
    // state holds an object which represents a glossary term

    const [selectedTerm, setSelectedTerm] = useState<Term | null>(concepts[0]);
    // concepts.onChange as Term

    const [answerGiven, setAnswerGiven] = useState<boolean>(false);

    return (
        // ensures the sidebar, and the glossary viewer are displayed side by side
        <main
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            {/* renders the sidebar and the glossary viewer */}
            {/* current term and ability tro set the term is passed as props to SideBar */}
            {/* sidebar uses selectedTerms to set the header of the sidebar, and setSelectedTerm to enable onClick functions */}
            <SideBar
                term={selectedTerm}
                setTerm={setSelectedTerm}
                setAnswerGiven={setAnswerGiven}
            />
            {/* GlossaryViewer needs selectedTerm prop in order to display correct data */}
            <GlossaryViewer
                term={selectedTerm}
                answerGiven={answerGiven}
                setAnswerGiven={setAnswerGiven}
            />
        </main>
    );
}
