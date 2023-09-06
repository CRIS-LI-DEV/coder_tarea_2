import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const ModalBorrar = ({ isVisible, closeModal, deleteTask }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            ¿Estás seguro de borrar la tarea?
          </Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={deleteTask}>
              <Text style={styles.modalButton}>Borrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
    borderColor: "rgba(122,14,229,1)",
    backgroundColor: "#111624",
  },
  modalText: {
    color: "white",
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    color: "white",
    fontSize: 20,
  },
});

export default ModalBorrar;
