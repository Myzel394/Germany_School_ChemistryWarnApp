import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createAppContainer } from "react-navigation";

import components from "./components";
import names from "./names";

export { default as components } from "./components";
export { default as names } from "./names";

export const stackNavigator = createSharedElementStackNavigator(
    {
        [names.HOME]: {
            screen: components[names.HOME],
        },
        [names.WARN_DETAIL]: {
            screen: components[names.WARN_DETAIL],
        },
    },
    {
        initialRouteName: names.HOME,
        headerMode: null,
    },
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
