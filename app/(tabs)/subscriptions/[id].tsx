import { View, Text } from 'react-native';
import {Link, useLocalSearchParams} from 'expo-router';


const subscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    return(
        <View>
            <Text>subscriptionDetails: {id}</Text>
            <Link href="/">Go back</Link>
        </View>
    )
}

export default subscriptionDetails