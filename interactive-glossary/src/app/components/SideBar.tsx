/**
 * Renders a sidebar component with a fixed app bar and a drawer.
 * The drawer contains a list of concepts that can be clicked to set the current term.
 *
 * @param {any} props - The component props. - I know its lazy, please don't judge me.
 * @param {object} props.term - The current term object.
 * @param {function} props.setTerm - The function to set the current term.
 * @returns {JSX.Element} The rendered sidebar component.
 */
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import concepts from "../modal/conepts";

// drawerWidth is a constant that represents the width of the drawer
const drawerWidth = 240;

export default function SideBar(props: any) {
    return (
        //a lot of this code is imported from the MUI component library for the styling
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            ></AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    {/* // renders the name of the current term in the sidebar from props */}
                    <Typography variant="h6">{props.term.name}</Typography>
                </Toolbar>
                <Divider />
                {/* // renders a list of concepts in the sidebar by mapping over the conept array */}
                <List>
                    {concepts.map((concept) => (
                        <ListItemButton>
                            <ListItem
                                key={concept.name}
                                onClick={() => props.setTerm(concept)}
                            >
                                <ListItemText primary={concept.name} />
                            </ListItem>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
