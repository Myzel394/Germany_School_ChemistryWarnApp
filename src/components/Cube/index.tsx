import React, { useContext, useState } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import Shadow from "react-native-androw";
import { SharedElement } from "react-navigation-shared-element";
import { NavigationContext } from "react-navigation";
import Touchable from "react-native-touchable-safe";

import styles from "./styles";
import { names } from "../../screens";
import CubeContent from "./CubeContent";
import Advice from "../Advice";

export interface ICube {
    title: string;
    description: string;
    extendedDescription: string;

    color: string;
    secondColor: string;

    icon: IconDefinition;
    id: any;

    importance: number;
    frequency: number;

    [key: string]: any;
}

export default function Cube({
    title,
    description,
    extendedDescription,
    color,
    secondColor,
    icon,
    id,
    importance,
    frequency,
    ...other
}: ICube) {
    const navigation = useContext(NavigationContext);
    const [height, setHeight] = useState<number>(100);

    const navigateFunc = () => {
        navigation.navigate(names.WARN_DETAIL, {
            title,
            description,
            extendedDescription,
            color,
            secondColor,
            icon,
            id,
            importance,
            frequency,
            calculatedHeight: height,
        });
    };

    return (
        <Shadow
            style={[
                styles.shadow,
                {
                    shadowColor: secondColor,
                },
            ]}
        >
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
                <Touchable onPress={() => navigateFunc()}>
                    <View>
                        <View
                            onLayout={(event) =>
                                setHeight(event.nativeEvent.layout.height)
                            }
                        >
                            <SharedElement id={buildId(id)}>
                                <CubeContent
                                    {...other}
                                    title={title}
                                    description={description}
                                    icon={icon}
                                    height={height}
                                />
                            </SharedElement>
                        </View>
                        <Advice advice="Tippe für mehr Infos" />
                    </View>
                </Touchable>
            </View>
        </Shadow>
    );
}

export const buildId = (id): string => `Cube._${id}`;
export const buildGradientId = (id): string =>
    `${buildId(id)}.BackgroundGradient`;

export const scale = (
    num: number,
    min: [number, number],
    max: [number, number],
): number => {
    return ((num - min[0]) * (max[1] - max[0])) / (min[1] - min[0]) + max[0];
};
