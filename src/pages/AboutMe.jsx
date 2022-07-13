import React from "react";
import styled from "styled-components";

export default function AboutMe() {
    return (
        <ABOUTME>
            <p>
                Me chamo Vinícius Farias Silva, tenho 25 anos e decidi entrar na área de tecnologia em 2015 onde iniciei a faculdade de Análise e desenvolvimento
                de sistemas pela Fatec Ipiranga, conclui o curso em junho de 2018 e desde então tive algumas experiências como dev.
            </p>
            <p>
                Hoje meu foco é me consolidar como desenvolvedor Front-end, e para isso além da experiência obtida nos projetos do meu último emprego,
                estou aprimorando meus conhecimentos através de estudo e desenvolvimento de projetos pessoais.
            </p>
            <p>
                Como não da para viver apenas de trabalho acho legal compartilhar com vocês oque gosto de fazer no meu tempo livre, vamos lá, gosto de jogar alguns games
                principalmente os de FPS, também adoro de assistir séries, animes e filmes e no começo do dia gosto de fazer caminhada/corrida para iniciar bem o dia.
            </p>
        </ABOUTME>
    )
}

const ABOUTME = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #2294b2;
`