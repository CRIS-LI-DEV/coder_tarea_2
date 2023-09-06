import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ModalBorrar from "./components/modal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 0,
    color: "white",
  },
  header: {
    backgroundColor: "#000",
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "white",
  },
  textInput: {
    height: 40,
    borderColor: "rgba(122, 14, 229, 1)",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    color: "white",
    backgroundColor: "#000",
    borderRadius: 50,
    paddingLeft: 39,
  },
  containerTouch: {
    margin: 5,
  },
  touchAdd: {
    backgroundColor: "rgba(122, 14, 229, 1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textAdd: {
    color: "white",
    fontSize: 24,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#111624",
    margin: 6,
    color: "white",
  },
  listItemTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingLeft: 20,
  },
  toggleButton: {
    borderWidth: 3,
    borderColor: "white",
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  deleteButton: {
    backgroundColor: "#ff1478",
    borderRadius: 50,
    padding: 4,
    width: 40,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [confirmationIndex, setConfirmationIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (index) => {
    setConfirmationIndex(index);
    setModalVisible(true);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
    setConfirmationIndex(null);
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task }]);
      setTask("");
    }
  };

  const deleteTask = () => {
    if (confirmationIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(confirmationIndex, 1);
      setTasks(updatedTasks);
      closeModal();
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <View style={styles.listItemTextContainer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleVisibility}
        >
          {isVisible ? (
            <Text>
              <Icon
                name="check-circle"
                size={30}
                color="rgba(122, 14, 229, 1)"
              />
            </Text>
          ) : null}
        </TouchableOpacity>
        <Text style={[styles.listItemText, { color: "white" }]}>
          {" "}
          {"    "}
          {item.text}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => openModal(index)}
        style={styles.deleteButton}
      >
        <Icon name="trash-o" size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Icon name="connectdevelop" size={30} color="rgba(122, 14, 229, 1)" />{" "}
          Lista de Tareas
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Ingrese una tarea"
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <View style={styles.containerTouch}>
        <TouchableOpacity style={styles.touchAdd} onPress={addTask}>
          <Text style={styles.textAdd}> AGREGAR TAREA</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />

      <ModalBorrar
        isVisible={isModalVisible}
        closeModal={closeModal}
        deleteTask={deleteTask}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
