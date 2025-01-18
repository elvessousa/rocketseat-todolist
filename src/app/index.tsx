import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../styles/colors";
import { EmptyTaskMessage } from "../components/EmptyTaskMessage";
import Feather from "@expo/vector-icons/Feather";
import { TaskItem } from "../components/TaskItem";
import { TaskStatus } from "../components/TaskStatus";
import { useState } from "react";

type Task = { id: number; text: string; done: boolean };

export default function Index() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const completedTasks = tasks.filter((item) => item.done === true);

  function addTask() {
    setTasks([...tasks, { id: tasks.length + 1, text, done: false }]);
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  }

  function toggleCompleted(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      }),
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
      </View>

      <View style={styles.fields}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={COLORS.gray["300"]}
          value={text}
          onChangeText={setText}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Feather name="plus-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.taskContainer}>
        <TaskStatus created={tasks.length} done={completedTasks.length} />

        <View style={styles.taskList}>
          {tasks.length === 0 && <EmptyTaskMessage />}
          {tasks.map(({ id, text, done }) => (
            <TaskItem
              key={id}
              onDelete={() => removeTask(id)}
              onSelect={() => toggleCompleted(id)}
              selected={done}
              text={text}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray["600"],
  },
  header: {
    backgroundColor: COLORS.gray["700"],
    height: 173,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    width: "40%",
    margin: "auto",
    objectFit: "contain",
  },
  fields: {
    gap: 5,
    margin: 20,
    marginTop: -30,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.gray["500"],
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 5,
    padding: 20,
    height: 60,
    color: COLORS.gray["100"],
    fontSize: 18,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blueDark,
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  taskContainer: {
    margin: 20,
  },
  taskList: {},
});
