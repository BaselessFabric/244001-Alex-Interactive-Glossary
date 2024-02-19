import React from "react";

interface GlossaryViewerProps {
    // Define your component props here
    term: Term | null;
}

interface Term {
    name: string;
    definition: string;
}

const GlossaryViewer: React.FC<GlossaryViewerProps> = (props) => {
    // Component logic goes here

    return (
        // JSX markup goes here
        <>
            <div>
                <h2>Glossary Viewer</h2>
                {/* <p>Click on a term to view its definition</p> */}
            </div>
            <div>
                <h1>{props.term ? props.term.name : "Select a term"}</h1>
                <p>{props.term ? props.term.definition : ""}</p>
            </div>
        </>
    );
};

export default GlossaryViewer;
