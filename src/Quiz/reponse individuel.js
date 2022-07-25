import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fonctionChoix } from "../Redux/counter";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';



export function ReponseIndividuel(props) {
    const dispatch = useDispatch()
    const index = useSelector((state) => state.counter.index)
    const list = useSelector((state) => state.counter.list)
    const reponse = useSelector((state) => state.counter.reponse)
    const numero = useSelector((state) => state.counter.numero)
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}
            style={{
                border: "2px solid black", width: "90%", margin: "15px",
                borderRadius: "5px",
                backgroundColor: Couleur(list, reponse, index, numero, props.checked),
                cursor: "pointer"
            }}
            onClick={() => {
                dispatch(fonctionChoix(props.checked))
            }}
        >
            <p style={{ paddingLeft: "80px" }}>
                {list[index].reponses[props.reponse]}
            </p>
            <Checkbox checked={reponse == props.checked}
                sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: "black",
                    },
                }}
            />
        </Stack>
    )
}


function Couleur(list, reponse, index, numero, checked) {
    if (numero == 0 || reponse != checked) {
        return "white"
    }

    if (list[index].reponseJuste == (reponse - 1)) {
        return "#4caf50"
    }
    else {
        return "#f44336"
    }
}