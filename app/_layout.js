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
    console.log("Segments:", segments); // Debugging
    const inAuthFlow = segments[0] === "signup" || segments[0] === "signin"; // Allow both

    // If not authenticated and NOT in signup or signin, force redirect to signup
    if (!global.currentProfile && !inAuthFlow) {
      router.replace("signup"); // No "/" needed
    } else if (global.currentProfile && inAuthFlow) {
      // If authenticated and still in signup/signin, go to main
      router.replace("main");
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