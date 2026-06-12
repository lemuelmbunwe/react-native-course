import { View, Text } from 'react-native';
import {Link} from 'expo-router';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);

const settings = () => {
    return(
        <SafeAreaView className="bg-background flex-1 p-5">
            <Text>settings</Text>
        </SafeAreaView>
    )
}

export default settings