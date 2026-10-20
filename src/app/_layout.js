//=========================================================
//              moldura que envolve a tela
//=========================================================

//conceito: import
//traz pra cá uma ferramenta que já criou

//stack "pilha de telas"


import { Stack } from "expo-router";

//statusBar= barra e cima do celular

import { StatusBar } from "expo-status-bar";

// CONCEITO
// No React native, cada pedaço de tela é um componente.
// Um componente é só uma FUNÇÃO que devolve (return) o que aparece.

// essa função default é a função principal deste arquivo, é assim que o Expo Router
// encontra o layout
export default function layout() {
    return (
        <>
            {/* StatusBar: style="light" deixa o relógio e bateria brancos */}
            <StatusBar style="light"/>
            {/* Stack: a pilha de telas */}
            {/* ScreenOptions: opções que valem para todas telas */}
            {/* headerShown: esconde a barra de titulo que o expo coloca no topo por
            padrão */}
            <Stack screenOptions={{ headerShown: false }}/>
        </>
    );
}

