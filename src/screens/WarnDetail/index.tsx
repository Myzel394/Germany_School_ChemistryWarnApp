import React from "react";

import { buildGradientId, buildId } from "../../components/Cube";
import Warning from "../../components/Warning";

function WarnDetailScreen({ navigation }) {
    const {
        title,
        description,
        extendedDescription,
        color,
        secondColor,
        icon,
        id,
        importance,
        frequency,
        calculatedHeight,
    } = navigation.state.params;

    return (
        <Warning
            color={color}
            secondColor={secondColor}
            title={title}
            description={description}
            extendedDescription={extendedDescription}
            icon={icon}
            iconSize={calculatedHeight}
            id={id}
            importance={importance}
            frequency={frequency}
        />
    );
}

WarnDetailScreen.sharedElements = (route) => [
    buildGradientId(route.state.params.id),
    buildId(route.state.params.id),
];

export default WarnDetailScreen;
