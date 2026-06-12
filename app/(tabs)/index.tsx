import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2 text-white">
          Go To Onboarding
      </Link>
      <Link href="/(auth)/signin" className="mt-4 rounded bg-primary px-4 py-2 text-white">
          Go to signIN
      </Link>
      <Link href="/(auth)/signin" className="mt-4 rounded bg-primary px-4 py-2 text-white">
          Go To SignUP
      </Link>

      <Link href="/subscriptions/spotify">Spotify</Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"},
      }}>
        Claude Max subscription
      </Link>
    </SafeAreaView>
  );
}
