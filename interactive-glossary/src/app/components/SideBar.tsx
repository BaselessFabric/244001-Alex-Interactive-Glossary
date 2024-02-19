import React from "react";
import concepts from "../modal/conepts";

interface SideBarProps {
    // terms: string[];
    setTerm: (term: Term | null) => void;
}

interface Term {
    name: string;
    definition: string;
    // Include any other properties that Term might have
}

const SideBar: React.FC<SideBarProps> = (props) => {
    return (
        <div
            style={{
                backgroundColor: "lightgray",
                padding: "20px",
                width: "200px",
                height: "100vh",
            }}
        >
            <h2>Glossary Terms</h2>
            <ul>
                <li onClick={() => props.setTerm(concepts.onChange)}>
                    onChange
                </li>
                <li onClick={() => props.setTerm(concepts.JSX)}>JSX</li>
            </ul>
        </div>
    );
};

export default SideBar;
