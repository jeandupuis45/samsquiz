import React from "react";
import { useSelector } from "react-redux";


export function Reponse () {
    const list = useSelector((state) => state.counter.list)
    const reponse = useSelector((state) => state.counter.reponse)
    const index = useSelector((state) => state.counter.index)
    const numero = useSelector((state) => state.counter.numero)
    const reponseJuste = list[index].reponseJuste

    if (numero == 0) {
        return null
    }

    if (list[index].reponseJuste == (reponse-1)) {
        return (
            <div>
            <p>Good answer, well done !</p>
            </div>
        )
    }

    else {
    return (
        <div>
        <p>Wrong answer, the good one was {list[index].reponses[reponseJuste]} . </p>
        </div>
    )
    }
}