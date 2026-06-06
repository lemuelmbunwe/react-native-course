import { View, Text } from 'react-native';
import {Link} from 'expo-router';

const signup = () => {
    return(
        <View>
            <Text>this is the signup page. <Link href="/(auth)/signin">SignIn</Link></Text>
        </View>
    )
}

export default signup