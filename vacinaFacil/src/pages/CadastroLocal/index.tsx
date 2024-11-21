import { FlatList, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { styles } from "./style";
import { CardsCadastroLocal } from "../../components/CardsCadastroLocal";
import { InputsCadastroLocal } from "../../components/InputsCadastroLocal";
import { CheckBoxComp } from "../../components/CheckBoxComp";
import { ButtonCadastroLocal } from "../../components/ButtonCadastroLocal";
import { useEffect, useState } from "react";
import { buscar, deletarApi, inserir } from "../../services/serviceApi";
import { Cards } from "../../@types/api";


export const CadastroLocal = () => {
  const [rua, setRua] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");
  const [horaInicio, setHoraInicio] = useState<string>("");
  const [horaFim, setHoraFim] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [isCheckedAnimal, setIsCheckedAnimal] = useState(false);
  const [isCheckedCrianca, setIsCheckedCrianca] = useState(false);
  const [isCheckedIdoso, setIsCheckedIdoso] = useState(false);
  const [info, setInfo] = useState<Cards[]>([])
  
  const cleanInput = () => {
    setRua("");
    setNumero("");
    setBairro("");
    setCep("");
    setDescricao("");
    setDataInicio("");
    setDataFim("");
    setHoraInicio("");
    setHoraFim("");
    setTipo("");
    setIsCheckedAnimal(false);
    setIsCheckedCrianca(false);
    setIsCheckedIdoso(false);
  };

  const handleClick = () => {
    const dados = {
      rua: rua,
      numero: numero,
      bairro: bairro,
      cep: cep,
      descricao: descricao,
      dataInicio: dataInicio,
      dataFim: dataFim,
      horaInicio: horaInicio,
      horaFim: horaFim,
      tipo: tipo,
    };

    console.log(dados);
    inserir(dados)
    cleanInput();

    setInterval(() => {
      carregarDados()
    }, 1000);
  };

  const hadleCheckAnimal = (value: boolean) => {
    if (!isCheckedAnimal) {
      setIsCheckedAnimal(true);
      setTipo("animal");
      setIsCheckedCrianca(false);
      setIsCheckedIdoso(false);
    } else {
      setIsCheckedAnimal(false);
      setTipo("");
    }
  };
  const hadleCheckCrianca = (value: boolean) => {
    if (!isCheckedCrianca) {
      setIsCheckedCrianca(true);
      setTipo("crianca");
      setIsCheckedAnimal(false);
      setIsCheckedIdoso(false);
    } else {
      setIsCheckedCrianca(false);
      setTipo("");
    }
  };
  const hadleCheckIdoso = (value: boolean) => {
    if (!isCheckedIdoso) {
      setIsCheckedIdoso(true);
      setTipo("idoso");
      setIsCheckedAnimal(false);
      setIsCheckedCrianca(false);
    } else {
      setIsCheckedIdoso(false);
      setTipo("");
    }
  };

  const carregarDados = async () =>{
    const dados = await buscar()
    setInfo(dados)
  }

  useEffect(() => {
    carregarDados()
  }, []);

  const deletar = (id:string) => {
    deletarApi(id)
    setInterval(() => {
      carregarDados()
    }, 1000);
  }

  const handleInputCep = (value: string) => {
    const numericText = value.replace(/\D/g, "");

    const formattedCep = numericText.replace(/^(\d{5})(\d)/, "$1-$2");

    setCep(formattedCep);
  };

  const handleInputTimeInico = (value: string) => {
    const numericText = value.replace(/\D/g, "");
  
    const formattedTime = numericText.replace(/(\d{2})(\d)/, "$1:$2");
  
    setHoraInicio(formattedTime); 
  };

  const handleInputTimeFim = (value: string) => {
    const numericText = value.replace(/\D/g, "");
  
  
    const formattedTime = numericText.replace(/(\d{2})(\d)/, "$1:$2");
  
    setHoraFim(formattedTime); 
  };

  const handleInputDateincio = (value: string) => {
    const numericText = value.replace(/\D/g, "");
  
    let formattedDate = numericText;
  
    if (formattedDate.length > 2) {
      formattedDate = formattedDate.replace(/(\d{2})(\d)/, "$1/$2");
    }
  
    if (formattedDate.length > 5) {
      formattedDate = formattedDate.replace(/(\d{2}\/\d{2})(\d)/, "$1/$2");
    }
  
    setDataInicio(formattedDate);
  };

  const handleInputDateFim = (value: string) => {
    const numericText = value.replace(/\D/g, "");
  
    let formattedDate = numericText;
  
    if (formattedDate.length > 2) {
      formattedDate = formattedDate.replace(/(\d{2})(\d)/, "$1/$2");
    }
  
    if (formattedDate.length > 5) {
      formattedDate = formattedDate.replace(/(\d{2}\/\d{2})(\d)/, "$1/$2");
    }
  
    setDataFim(formattedDate);
  };

  return (
    <ScrollView style={{ backgroundColor: "#247BA0" }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastre novos locais</Text>
        <View style={styles.line} />
        <View style={styles.main}>
          <View style={styles.boxCheckbox}>
            <CheckBoxComp
              propsLabel="Animais"
              value={isCheckedAnimal}
              onChange={hadleCheckAnimal}
            />
            <CheckBoxComp
              propsLabel="Crianças"
              value={isCheckedCrianca}
              onChange={hadleCheckCrianca}
            />
            <CheckBoxComp
              propsLabel="Idosos"
              value={isCheckedIdoso}
              onChange={hadleCheckIdoso}
            />
          </View>

          <InputsCadastroLocal
            label="Rua:"
            placeHolder="Digite a rua"
            handleFunctionInput={(value: string) => setRua(value)}
            valueInput={rua}
          />
          <InputsCadastroLocal
            label="Numero:"
            placeHolder="Digite o numero"
            handleFunctionInput={(value: string) => setNumero(value)}
            valueInput={numero}
          />
          <InputsCadastroLocal
            label="Bairro:"
            placeHolder="Digite o bairro"
            handleFunctionInput={(value: string) => setBairro(value)}
            valueInput={bairro}
          />
          <InputsCadastroLocal
            label="CEP:"
            placeHolder="Digite o CEP"
            handleFunctionInput={handleInputCep}
            valueInput={cep}
            tamanhoDigito={9}
          />
          <InputsCadastroLocal
            label="Descrição:"
            placeHolder="Digite a descrição"
            handleFunctionInput={(value: string) => setDescricao(value)}
            valueInput={descricao}
          />

          <View style={styles.boxSmallInput}>
            <View style={styles.areaSmallInput}>
              <InputsCadastroLocal
                label="Data Inicio:"
                placeHolder="DD/MM/AAAA"
                handleFunctionInput={handleInputDateincio}
                valueInput={dataInicio}
                tamanhoDigito={10}
              />
            </View>
            <View style={styles.areaSmallInput}>
              <InputsCadastroLocal
                label="Data Fim:"
                placeHolder="DD/MM/AAAA"
                handleFunctionInput={handleInputDateFim}
                valueInput={dataFim}
              />
            </View>
          </View>
          <View style={styles.boxSmallInput}>
            <View style={styles.areaSmallInput}>
              <InputsCadastroLocal
                label="Hora Inicio:"
                placeHolder="HH:MM"
                handleFunctionInput={handleInputTimeInico}
                valueInput={horaInicio}
                tamanhoDigito={5}
              />
            </View>
            <View style={styles.areaSmallInput}>
              <InputsCadastroLocal
                label="Hora Fim:"
                placeHolder="HH:MM"
                handleFunctionInput={handleInputTimeFim}
                valueInput={horaFim}
                tamanhoDigito={5}
              />
            </View>
          </View>

          <ButtonCadastroLocal title="Cadastrar" handleFunction={handleClick} />
        </View>

        <Text style={styles.titulo}>Apagar locais</Text>
        <View style={styles.line} />
        <View style={styles.main}>
          <FlatList
            data={info}
            keyExtractor={(info) => info.id}
            renderItem={({ item }) => (
              <CardsCadastroLocal
                bairro={item.bairro}
                rua={item.rua}
                numero={item.numero}
                tipo={item.tipo}
                dataFim={item.dataFim}
                dataInicio={item.dataInicio}
                handleFunction={()=>{deletar(item.id)}}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};
