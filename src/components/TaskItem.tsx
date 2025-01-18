import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../styles/colors";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  onDelete: () => void;
  onSelect: () => void;
  selected: boolean;
  text: string;
};
export function TaskItem({ onDelete, onSelect, selected, text }: Props) {
  const { blue, purple, gray } = COLORS;
  const border = {
    borderColor: selected ? gray["500"] : gray["400"],
  };

  const checkColor = {
    borderColor: selected ? purple : blue,
    backgroundColor: selected ? purple : "transparent",
  };

  const textStyle: TextStyle = {
    color: selected ? gray["300"] : "white",
    textDecorationLine: selected ? "line-through" : undefined,
  };

  return (
    <View style={[styles.container, border]}>
      <TouchableOpacity style={[styles.check, checkColor]} onPress={onSelect}>
        {selected && <Feather name="check" size={12} color="white" />}
      </TouchableOpacity>

      <Text style={[styles.text, textStyle]}>{text}</Text>

      <TouchableOpacity style={styles.delete} onPress={onDelete}>
        <Feather name="trash-2" size={18} color={COLORS.gray["300"]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 5,
    backgroundColor: COLORS.gray["500"],
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  check: {
    borderRadius: 30,
    borderWidth: 2,
    height: 20,
    width: 20,
    borderColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.purple,
    backgroundColor: COLORS.purple,
  },
  delete: {},
  text: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
});
