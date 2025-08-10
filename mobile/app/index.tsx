import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { checkHealthStatus } from "../services/healthService";

export default function Index() {
  const [healthStatus, setHealthStatus] = useState<string>("Checking...");
  const [isLoading, setIsLoading] = useState(false);

  const refreshHealth = async () => {
    setIsLoading(true);
    const status = await checkHealthStatus();
    setHealthStatus(status);
    setIsLoading(false);
  };

  useEffect(() => {
    refreshHealth();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Backend Health
      </Text>
      <Text 
        style={{ 
          fontSize: 18, 
          marginBottom: 20,
          color: healthStatus === "Healthy" ? "green" : "red"
        }}
      >
        Status: {healthStatus}
      </Text>
      <TouchableOpacity
        onPress={refreshHealth}
        disabled={isLoading}
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 8,
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isLoading ? "Checking..." : "Refresh"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
