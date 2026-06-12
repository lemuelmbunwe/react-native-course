import { View, Text } from 'react-native';
import {Link} from 'expo-router';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
    return(
        <SafeAreaView className="bg-background p-5 flex-1">
            <Text>subscriptions</Text>
        </SafeAreaView>
    )
}

export default subscriptions