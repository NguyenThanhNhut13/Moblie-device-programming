import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import TaskListScreen from "./pages/TaskListScreen";

export default function App() {
  return (
    <Provider store={store}>
      <TaskListScreen />
    </Provider>
  );
}

