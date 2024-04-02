import { View, StyleSheet, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { useAppDispatch } from "../store/redux/hooks";
import { addExpense, deleteExpense } from "../store/redux/slices/expensesSlice";
import uuid from "react-native-uuid";
// components
import Button from "../components/common/Buttons/Button";
import IconBtn from "../components/common/Buttons/IconBtn";
import ExspenseForm from "../components/ManageExpenses/ExspenseForm";
import { deleteExpenseFromDB, storeExpenses } from "../firebase/http";

const ManageExpenses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const editedExpenseId = route.params["expenseId"];
  const isEditPage = route.params["isEditPage"];
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditPage ? "Edit Expense" : " Add Expense",
    });
  }, [navigation, editedExpenseId]);

  const onDeleteBtnClick = async () => {
    await deleteExpenseFromDB(editedExpenseId);
    dispatch(deleteExpense(editedExpenseId));
    navigation.goBack();
  };

  const onCancelBtnClick = () => {
    navigation.goBack();
  };

  const onUpdateBtnClick = () => {
    navigation.goBack();
  };

  const invalidData = !amount || !date || !description;

  const onAddBtnClick = async () => {
    if (invalidData) {
      Alert.alert("Enter valid data, please");
      return;
    } else {
      await dispatch(
        addExpense({
          id: uuid.v4().toString(),
          description: description,
          amount: Number(amount),
          date: new Date(date).getTime(),
        })
      );
      storeExpenses({
        description: description,
        amount: Number(amount),
        date: new Date(date).getTime(),
      });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {!isEditPage && (
        <ExspenseForm
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
        />
      )}
      <View style={styles.btn_wrap}>
        <Button
          style={styles.btn}
          text="Cancel"
          mode="flat"
          onPress={onCancelBtnClick}
        />
        <Button
          style={styles.btn}
          text={isEditPage ? "Update" : "Add"}
          onPress={isEditPage ? onUpdateBtnClick : onAddBtnClick}
        />
      </View>
      {isEditPage && (
        <View style={styles.delete_container}>
          <IconBtn
            iconName="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={onDeleteBtnClick}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  delete_container: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  btn: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  btn_wrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
