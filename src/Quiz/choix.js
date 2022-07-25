import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import { Paper } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ReponseIndividuel } from "./reponse individuel";



export function Choix() {
    const index = useSelector((state) => state.counter.index)
    const list = useSelector((state) => state.counter.list)

    return (
        <Paper elevation={4}
            sx={{
                width: "95%"
            }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Stack direction="row"
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ bgcolor: 'primary.main' }}
                    style={{ width: "100%" }}
                >
                    <HelpOutlineIcon style={{ color: "white" }} />
                    <p style={{ color: "white" }}>
                        {list[index].question}
                    </p>
                </Stack>
                <Stack
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    style={{ width: "100%", flex: 1}}
                >
                    <ReponseIndividuel  reponse="0" checked="1"/>
                    <ReponseIndividuel  reponse="1" checked="2"/>
                    <ReponseIndividuel  reponse="2" checked="3"/>
                    <ReponseIndividuel  reponse="3" checked="4"/>
                </Stack>
            </Stack>
        </Paper>
    )
}