import React from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { fonctionSuivant } from "../Redux/counter";
import { Stack } from "@mui/material";

export function Suivant() {
    const dispatch = useDispatch()
    const commencer = useSelector((state) => state.counter.commencer)
    const numero = useSelector((state) => state.counter.numero)
    return (
        <Stack 
        style={{cursor : Click(numero)}}
        >
        <Button variant="outlined" disabled = { numero == 0 }
        onClick={(() => {
            dispatch(fonctionSuivant(0))
        })}>
            {commencer}
        </Button>
        </Stack>
    )
}

function Click (numero) {
    if (numero == 0 ) {
        return "not-allowed"
    }
    return "pointer"
}