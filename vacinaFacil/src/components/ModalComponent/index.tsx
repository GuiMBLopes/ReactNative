import { Modal, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

interface PropsModal {
  openModal: boolean;
  mensagem: string;
  setOpenModal: (value: boolean) => void;
  modalFunction: () => void;
}
export const ModalComponent = ({
  mensagem,
  openModal,
  setOpenModal,
  modalFunction,
}: PropsModal) => {
  return (
    <Modal transparent={true} visible={openModal} animationType="slide">
      <View style={style.container}>
        <View style={style.card}>
          <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}>
            {mensagem}
          </Text>

          <View style={style.row}>
            <TouchableOpacity style={style.sim} onPress={modalFunction}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  paddingLeft: 80,
                  fontSize: 20,
                }}
              >
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.nao}
              onPress={() => setOpenModal(!openModal)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  paddingLeft: 80,
                  fontSize: 20,
                }}
              >
                Não
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
