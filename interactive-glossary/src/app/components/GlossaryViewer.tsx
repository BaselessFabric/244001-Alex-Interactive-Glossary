/**
 * Renders a glossary viewer component that displays the name, definition, and image of a term.
 *
 * @component
 * @example
 * // Usage:
 * <GlossaryViewer term={selectedTerm} />
 *
 * @param {GlossaryViewerProps} props - The props for the GlossaryViewer component.
 * @param {Term | null} props.term - The term object containing the name, definition, and image of the term.
 * @returns {JSX.Element} The rendered GlossaryViewer component.
 */
import { Box, Typography, Paper } from "@mui/material";
import React from "react";

// GlossaryViewerProps is an interface for the props of the GlossaryViewer component
interface GlossaryViewerProps {
    term: Term | null;
}

// Term is an interface for the term object
interface Term {
    name: string;
    definition: string;
    image: string;
}

const GlossaryViewer: React.FC<GlossaryViewerProps> = (props) => {
    return (
        //utilising Box, Typography, and Paper from Material-UI to render the glossary viewer
        <Box p={2}>
            <Typography variant="h4" component="h2" gutterBottom>
                React Glossary
            </Typography>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                {/* // usiing props.term to display the name, definition, and image of the term
        // if props.term is null, the component will display "Select a term"
        // if props.term is not null, the component will display the name, definition, and image of the term */}
                <Typography variant="h5" component="h1" gutterBottom>
                    {props.term ? props.term.name : "Select a term"}
                </Typography>
                <Typography variant="body1" component="p">
                    {props.term ? props.term.definition : ""}
                </Typography>
                {props.term && props.term.image && (
                    <Box mt={2}>
                        {/* // if props.term.image is not null, the component will display the image of the term */}
                        <img
                            src={props.term.image}
                            alt={props.term.name}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default GlossaryViewer;
