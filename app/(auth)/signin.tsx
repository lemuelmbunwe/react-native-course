import { View, Text } from 'react-native';
import {Link} from 'expo-router';

const signin = () => {
    return(
        <View>
            <Text>Login. <Link href="/(auth)/signup">go to signup</Link></Text>
        </View>
    );
}

export default signin