import { COLORS } from "../styles/colors";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";

export function EmptyTaskMessage() {
  return (
    <View style={styles.emptyTaskMessage}>
      <Feather
        name="clipboard"
        size={54}
        color="#555"
        style={{ margin: "auto", marginVertical: 20 }}
      />

      <Text
        style={{
          color: COLORS.gray["300"],
          fontWeight: "bold",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text
        style={{
          color: COLORS.gray["300"],
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyTaskMessage: {
    padding: 20,
    justifyContent: "center",
    borderTopColor: COLORS.gray["500"],
    borderTopWidth: 1,
  },
});
