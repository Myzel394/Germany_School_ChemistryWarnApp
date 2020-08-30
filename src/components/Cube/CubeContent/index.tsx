import React from "react";
import { View } from "react-native";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import Title from "../Title";
import Description from "../Description";
import BackgroundVector from "../BackgroundVector";
import styles from "./styles";

export interface ICubeContent {
    title: string;
    description: string;
    icon: IconDefinition;
    height: number;

    [key: string]: any;
}

export default function CubeContent({
    title,
    description,
    icon,
    height,
    ...other
}: ICubeContent) {
    return (
        <View style={styles.content} {...other}>
            <View>
                <Title title={title} />
                <Description description={description} />
            </View>
            <BackgroundVector icon={icon} size={height} />
        </View>
    );
}
