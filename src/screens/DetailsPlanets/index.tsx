import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { Header } from '../../components/Header';
import theme from '../../global/styles/theme';

import {
    Container,
    NamePlanet,
    ImagePlanet,
    ViewVertical,
    ViewHorizontal,
    TextDescription,
    TextValue,
} from './styles';

interface Props {
    infoPlanet: {
        imagemPlanet: any;
        nome: string;
        temperatura: string;
        massa: string;
        diametro: string;
        distanciaDoSol: string;
        rotacao: string;
        translacao: string;
        pressaoAtmosferica: string;
        composicaoAtmosfera: string;
        numeroLuas: string;
    }
}

import { useNavigation, useRoute } from '@react-navigation/native';

export function DetailsPlanets() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const route = useRoute();
    const { navigate } = useNavigation();

    const { infoPlanet } = route.params as Props;


    return (
        <Container>

            <ImageBackground
                source={require('../../assets/images/background_sol.png')}
                style={{ width: width, height: height, padding: 20 }}
            >
                <Header />

                <NamePlanet>{infoPlanet.nome}</NamePlanet>

                <ImagePlanet source={infoPlanet.imagemPlanet} />

                <ViewVertical>
                    <ViewHorizontal>
                        <TextDescription>Temperatura: </TextDescription>
                        <TextValue>{infoPlanet.temperatura}</TextValue>
                    </ViewHorizontal>

                    <ViewHorizontal>
                        <TextDescription>Massa: </TextDescription>
                        <TextValue>{infoPlanet.massa}</TextValue>
                    </ViewHorizontal>
                </ViewVertical>

                <ViewVertical>
                    <ViewHorizontal>
                        <TextDescription>Di??metro: </TextDescription>
                        <TextValue>{infoPlanet.diametro}</TextValue>
                    </ViewHorizontal>

                    <ViewHorizontal>
                        <TextDescription>Rota????o: </TextDescription>
                        <TextValue>{infoPlanet.rotacao}</TextValue>
                    </ViewHorizontal>
                </ViewVertical>


                <ViewHorizontal>
                    <TextDescription>Dist??ncia do sol: </TextDescription>
                    <TextValue>{infoPlanet.distanciaDoSol}</TextValue>
                </ViewHorizontal>

                <ViewVertical>
                    <ViewHorizontal>
                        <TextDescription>Transla????o: </TextDescription>
                        <TextValue>{infoPlanet.translacao}</TextValue>
                    </ViewHorizontal>

                    <ViewHorizontal>
                        <TextDescription>Press??o atmosf??rica: </TextDescription>
                        <TextValue>{infoPlanet.pressaoAtmosferica}</TextValue>
                    </ViewHorizontal>
                </ViewVertical>

                <ViewHorizontal>
                    <TextDescription>Composi????o da atmosf??ra: </TextDescription>
                    <TextValue>{infoPlanet.composicaoAtmosfera}</TextValue>
                </ViewHorizontal>

                <ViewHorizontal>
                    <TextDescription>N??mero de luas: </TextDescription>
                    <TextValue>{infoPlanet.numeroLuas}</TextValue>
                </ViewHorizontal>

            </ImageBackground>

        </Container>
    );
}