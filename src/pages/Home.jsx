import React from "react";
import styled from "styled-components";

export default function Home() {
    return (
        <HOME>
            <div className="Section">
                <h1>Seja muito Bem-Vindo</h1>
                <p>Me chamo Vinícius Farias e sou Desenvolvedor Front-end.</p>
                <p>Este espaço está destinado para que você me conheça e tenha um vislumbre de minhas habilidades.</p>
            </div>
        </HOME>
    )
}

const HOME = styled.div`
    width: 100%;
    border: none;        
    height: 100vh;
        .Section{            
            color: #2294b2;        
            height: 350px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            align-items: center;
        }
`