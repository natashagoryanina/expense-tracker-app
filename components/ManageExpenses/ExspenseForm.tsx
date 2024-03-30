import { StyleSheet, View } from "react-native";
import Input from "./Input";

type ExspenseFormProps = {
  amount: string;
  setAmount: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
};

const ExspenseForm = ({
  amount,
  setAmount,
  date,
  setDate,
  description,
  setDescription,
}: ExspenseFormProps) => {
  
  const amountChangeHandler = (text: string) => {
    setAmount(text);
  };
  const dateChangeHandler = (text: string) => {
    setDate(text);
  };

  const descriptionChangeHandler = (text: string) => {
    setDescription(text);
  };

  return (
    <View>
      <View style={styles.amount_wrap}>
        <Input
          label="Amount"
          keyboardType="decimal-pad"
          onChange={amountChangeHandler}
          style={styles.input}
          value={amount}
        />
        <Input
          label="Date"
          onChange={dateChangeHandler}
          placeholder="YYYY-MM-DD"
          maxLength={10}
          style={styles.input}
          value={date}
        />
      </View>
      <Input
        label="Description"
        onChange={descriptionChangeHandler}
        multiline={true}
        value={description}
      />
    </View>
  );
};

export default ExspenseForm;

const styles = StyleSheet.create({
  amount_wrap: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    flex: 1,
  },
});
