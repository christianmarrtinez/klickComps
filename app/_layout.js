// app/_layout.js
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";

// This function will check if the user is authenticated
// and redirect to the appropriate screen
function useProtectedRoute() {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    
    // If there's no current profile and we're not in the auth group,
    // redirect to the auth group
    if (!global.currentProfile && !inAuthGroup) {
      router.replace("/signup");
    } else if (global.currentProfile && inAuthGroup) {
      // If there is a current profile and we're in the auth group,
      // redirect to the protected screens
      router.replace("/main");
    }
  }, [segments]);
}

export default function RootLayout() {
  useProtectedRoute();
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      <Stack.Screen name="main" options={{ headerShown: false }} />
    </Stack>
  );
}