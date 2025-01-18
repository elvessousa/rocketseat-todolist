import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/colors";

type Props = { created: number; done: number };

export function TaskStatus({ created, done }: Props) {
  return (
    <View style={styles.taskStatus}>
      <View style={styles.statusLabels}>
        <Text style={styles.blueText}>Criadas</Text>
        <Text style={styles.statusNumber}>{created}</Text>
      </View>

      <View style={styles.statusLabels}>
        <Text style={styles.purpleText}>Concluídas</Text>
        <Text style={styles.statusNumber}>{done}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  blueText: { fontWeight: "bold", color: COLORS.blue, fontSize: 16 },
  purpleText: { fontWeight: "bold", color: COLORS.purple, fontSize: 16 },
  statusLabels: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  statusNumber: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: COLORS.gray["400"],
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 30,
  },
});
