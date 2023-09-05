import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  Switch,
  StatusBar
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

//************************************ */

const Header = () => (
  <View

    style={{
      backgroundColor: "#000",
      padding: 10,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    <Text style={{ fontSize: 24, color: "white" }}>

      <Icon name="connectdevelop" size={30} color="rgba(122, 14, 229, 1)" />
      
      {" "} Lista de Tareas

    </Text>

  </View>
);

//***************************************************************************/

const App = () => {
  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [confirmationIndex, setConfirmationIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const openModal = (index) => {
    setConfirmationIndex(index);
    setModalVisible(true);
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
    <View
      style={{
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
   
  
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          paddingLeft: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor: "white",
            width: 30,
            height: 30,
            borderRadius: 25,
          }}
          onPress={toggleVisibility}
        >
          {isVisible ? (
            <Text>
              <Icon name="eercast" size={30} color="rgba(122, 14, 229, 1)" />
            </Text>
          ) : null}
        </TouchableOpacity>

        <Text style={{ color: "white", flex: 1 }}>
          {" "}
          {"    "}
          {item.text}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => openModal(index)}
        style={{
          backgroundColor: "#ff1478",
          borderRadius: 50,
          padding: 4,
          width:40,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          
         // Agregamos margen izquierdo para separar el botón
        }}
      >
        <Icon name="trash-o" size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        padding: 0,
        color: "white",
      }}
    >
      <Header />
      <TextInput
        style={{
          height: 40,
          borderColor: "rgba(122, 14, 229, 1)",
          borderWidth: 1,
          margin: 10,
          padding: 5,
          color: "white",
          backgroundColor: "#000",
          borderRadius: 50,
          paddingLeft: 39,
        }}
        placeholder="Ingrese una tarea"
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <View style={{ margin: 5 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(122,14,229,1)",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={addTask}
        >
          <Text style={{ color: "white", fontSize: 24 }}> AGREGAR TAREA</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "gray",
              padding: 20,
              borderRadius: 10,
              borderColor: "black",
              borderWidth: 3,
              borderColor: "rgba(122,14,229,1)",
              backgroundColor: "#111624",
            }}
          >
            <Text style={{ color: "white", marginBottom: 10 }}>
              ¿Estás seguro de borrar la tarea?
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={deleteTask}>
                <Text style={{ color: "white", fontSize: 20 }}>Borrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <Text style={{ color: "white", fontSize: 20 }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="light" />
    </View>
  );
};

export default App;
