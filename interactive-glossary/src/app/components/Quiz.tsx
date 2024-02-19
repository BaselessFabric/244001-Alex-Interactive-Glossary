import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

interface QuizProps {
    term: Term | null;
}

// Term is an interface for the term object
interface Term {
    name: string;
    definition: string;
    image: string;
    question: string;
    checkAnswer: any;
}

const Quiz: React.FC<QuizProps> = (props: any) => {
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    return (
        <Box>
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    {props.term ? props.term.question : "Select a term"}
                </Typography>
                {/* <Typography variant="body1" component="p">
                    {props.term ? props.term.definition : ""}
                </Typography> */}
            </Paper>
            <Paper
                elevation={3}
                style={{
                    padding: "20px",
                    marginTop: "20px",
                }}
                className="flex"
            >
                <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    className="mr-9"
                >
                    <TextField
                        id="outlined-basic"
                        label="Answer"
                        variant="outlined"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </Typography>
                <Typography variant="h5" component="h1" gutterBottom>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            if (props.term) {
                                props.term.checkAnswer(answer)
                                    ? setCorrectAnswer(true)
                                    : setCorrectAnswer(false);
                                props.setAnswerGiven(true);
                            }
                        }}
                    >
                        Check Answer
                    </Button>
                </Typography>
                <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    style={{
                        display: props.answerGiven ? "block" : "none",
                        marginLeft: "20px",
                    }}
                >
                    {correctAnswer ? "Correct" : "Incorrect"}
                </Typography>
            </Paper>
        </Box>
    );
};

export default Quiz;
