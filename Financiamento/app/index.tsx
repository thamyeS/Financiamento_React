import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button,KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#936ec4ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "white"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "white",
  }
});

// Teste

export default function Index() {
  const [valorFinanciamento, setValorFinanciamento] = useState("");
  const [taxaJurosMes, setTaxaJurosMes] = useState("");
  const [numParcelas, setNumParcelas] = useState("");
  const [taxasCustos, setTaxasCustos] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function calcular() {
    const c = parseFloat(valorFinanciamento);
    const i = parseFloat(taxaJurosMes);
    const t = parseInt(numParcelas);

    const m = c * Math.pow((1 + i), t);
    const p = m / t;

    setResultado(`Valor da Parcela: ${p.toFixed(2)}`);
  }

 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Calcular Financiamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor do Financiamento"
        value={valorFinanciamento}
        onChangeText={setValorFinanciamento}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros Mensal"
        value={taxaJurosMes}
        onChangeText={setTaxaJurosMes}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Parcelas"
        value={numParcelas}
        onChangeText={setNumParcelas}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxas e Custos"
        value={taxasCustos}
        onChangeText={setTaxasCustos}
      />

      <Button title="Calcular" onPress={calcular} />
      {resultado && (
        <Text style={styles.text}>{resultado}</Text>
      )}
    </KeyboardAvoidingView>
  );
}