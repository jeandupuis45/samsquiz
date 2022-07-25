import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';


export function Affiche() {
    const question = useSelector((state) => state.counter.question)


    return (
        <div>
            <p>
                Question {question}/10
            </p>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
            </Stack>
        </div>
    )
}
