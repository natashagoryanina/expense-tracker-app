import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "../../screens/ManageExpenses";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpensesOverview"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
