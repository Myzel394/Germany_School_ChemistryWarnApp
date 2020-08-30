import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SharedElement } from "react-navigation-shared-element";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Touchable from "react-native-touchable-safe";
import { NavigationContext } from "react-navigation";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { buildGradientId, buildId } from "../Cube";
import CubeContent from "../Cube/CubeContent";
import Description from "../Cube/Description";
import PercentageInfo from "../PercentageInfo";
import Advice from "../Advice";
import FadeIn from "./FadeIn";

export interface IWarning {
    title: string;
    description: string;
    extendedDescription: string;

    color: string;
    secondColor: string;

    icon: IconDefinition;
    iconSize: number;
    id: any;

    importance: number;
    frequency: number;
}

export default function Warning({
    color,
    secondColor,
    title,
    description,
    extendedDescription,
    icon,
    iconSize,
    id,
    importance,
    frequency,
}: IWarning) {
    const navigation = useContext(NavigationContext);

    const information = [
        {
            title: "Wichtigkeit",
            value: importance,
        },
        {
            title: "Häufigkeit",
            value: frequency,
        },
    ];

    return (
        <View style={styles.outer}>
            <SharedElement
                id={buildGradientId(id)}
                style={styles.gradientOuter}
            >
                <LinearGradient
                    colors={[color, secondColor]}
                    style={styles.gradient}
                />
            </SharedElement>
            <Animatable.View animation="fadeIn">
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.wrapper}>
                            <Touchable onPress={() => navigation.goBack()}>
                                <SharedElement id={buildId(id)}>
                                    <CubeContent
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        height={iconSize}
                                    />
                                </SharedElement>
                            </Touchable>
                            <FadeIn>
                                {extendedDescription && (
                                    <Description
                                        description={extendedDescription}
                                    />
                                )}
                            </FadeIn>
                        </View>
                    }
                    ListFooterComponent={
                        <FadeIn>
                            <View style={styles.wrapper}>
                                <Advice advice="Tippe oben um zurück zu gehen" />
                            </View>
                        </FadeIn>
                    }
                    data={information}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <FadeIn>
                            <PercentageInfo
                                title={item.title}
                                percentage={item.value}
                            />
                        </FadeIn>
                    )}
                />
            </Animatable.View>
        </View>
    );
}
