import { Box, Typography, Paper } from "@mui/material";
import React from "react";

interface GlossaryViewerProps {
    term: Term | null;
}

interface Term {
    name: string;
    definition: string;
    image: string;
}

const GlossaryViewer: React.FC<GlossaryViewerProps> = (props) => {
    return (
        <Box p={2}>
            <Typography variant="h4" component="h2" gutterBottom>
                React Glossary
            </Typography>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    {props.term ? props.term.name : "Select a term"}
                </Typography>
                <Typography variant="body1" component="p">
                    {props.term ? props.term.definition : ""}
                </Typography>
                {props.term && props.term.image && (
                    <Box mt={2}>
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
