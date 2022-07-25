import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { fonctionCommencer } from "../Redux/counter";


export function Home() {
    const dispatch = useDispatch()
    const consigne = "This is a general knowledge quiz in 10 questions. Good luck and enjoy !"
    const commencer = useSelector((state) => state.counter.commencer)
    return (
        <div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                style={{ padding: "100px" }}
            >
                <h1>
                    Welcome to Sam's quiz !
                </h1>
                <p>
                    {consigne}
                </p>
                <Button variant="outlined" onClick={(() => {
                    dispatch(fonctionCommencer())
                })}>
                    {commencer}
                </Button>
            </Stack>
        </div>
    )
}