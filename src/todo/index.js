import React from 'react';
import LayoutComponent from './components/partials/layout';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';

class TodoApp extends React.Component {
  render() {
    return (
      <>
        <LayoutComponent>
          <AddTodo/>
          <ListTodo/>
        </LayoutComponent>
      </>
    )
  }
}
export default TodoApp;