import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenses from "../../screens/ManageExpenses";
import TabNavigation from "./TabNavigation";
import { GlobalStyles } from "../../constants/styles";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={TabNavigation}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{
        title: "Manage Expense",
        presentation: 'modal'
      }}/>
    </Stack.Navigator>
  );
};

export default StackNavigation;
