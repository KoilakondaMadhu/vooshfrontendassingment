# vooshfrontendassingment
<pre>

  

MyToDoApp/
  ├── src/
  │   ├── components/ 
  │   │   ├── LoginForm.js 
  │   │   ├── UserProfile.js
  │   │   ├── TaskList.js
  │   │   ├── TaskItem.js
  │   │   ├── NewTaskForm.js
  │   │   ├── TaskEditForm.js
  │   ├── navigation/
  │   │   ├── AppNavigator.js
  │   ├── utils/
  │   │   ├── api.js
  │   ├── screens/
  │   │   ├── LoginScreen.js
  │   │   ├── ProfileScreen.js
  │   │   ├── HomeScreen.js
  │   │   ├── TaskCreationScreen.js
  │   │   ├── TaskEditScreen.js
  ├── App.js
  ├── package.json
  ├── .gitignore

  </pre>



  Tech stack :
1. React native
2. XCode
3. Android Studio
Problem statement:
Create a To-Do list application with login functionality for users.

Requirements:
1. Create a login page which opens when user first opens the application. API will take
email and password as input and return access token and refresh token.You can use
https://fakeapi.platzi.com/en/rest/auth-jwt for API Refrerence.
2. Store both refresh token and access token offline and check for refresh token in
offline storage when the app is opened again.
3. Generate a new access token if refresh token is present else redirect user to login
page.
4. Fetch user details and Show in a separate profile page with a logout button. On
logout all the states data should get cleared and user should redirect to login page.
5. Create a Homepage where all the to-do’s will display status wise. status is divided
into [‘TO DO’, ‘IN PROGRESS’,’COMPLETED’].Each task will have a delete button in
right.
6. Create a button in Homepage for generating new task. On Click it will redirect user to
new screen where user can add details about the task and it’s subtask.
7. When user click on any task it will redirect user to edit the details of the task.
8. Only on completion of every subtask listed in task the status will automatically
change to COMPLETED.
9. All the state of the ToDo should be stored in app and should be re-stored when user
opens the app again.
10. Use Native Apis (E.g AsyncStorage, React navigation etc.)

Designs:

Outcome:
1. user should be able to login and Logout.
2. User can (Add/Edit/Delete) To-Do task and subtask .
3. User can change status of the Task.
Bonus:
1. Make Splash Screen
2. Check for the Login credentials while the Splash Screen is displayed.












Project structure ➖

A high-level project structure 

MyToDoApp/
  ├── src/
  │   ├── components/
  │   │   ├── LoginForm.js
  │   │   ├── UserProfile.js
  │   │   ├── TaskList.js
  │   │   ├── TaskItem.js
  │   │   ├── NewTaskForm.js
  │   │   ├── TaskEditForm.js
  │   ├── navigation/
  │   │   ├── AppNavigator.js
  │   ├── utils/
  │   │   ├── api.js
  │   ├── screens/
  │   │   ├── LoginScreen.js
  │   │   ├── ProfileScreen.js
  │   │   ├── HomeScreen.js
  │   │   ├── TaskCreationScreen.js
  │   │   ├── TaskEditScreen.js
  ├── App.js
  ├── package.json
  ├── .gitignore


Components:
- `LoginForm.js`: Handles the login form UI.
- `UserProfile.js`: Displays the user profile with a logout button.
- `TaskList.js`: Renders the task list grouped by status.
- `TaskItem.js`: Represents an individual task with options like deletion.
- `NewTaskForm.js`: Manages task creation UI.
- `TaskEditForm.js`: Allows editing task details.

Navigation:
- `AppNavigator.js`: Defines the navigation structure for the app, including screens and stack navigation.

Utils:
- `api.js`: Contains functions for making API requests and handling tokens.

Screens:
- `LoginScreen.js`: The login screen.
- `ProfileScreen.js`: The user profile screen.
- `HomeScreen.js`: The homepage that displays tasks.
- `TaskCreationScreen.js`: The screen for creating new tasks.
- `TaskEditScreen.js`: The screen for editing task details.

This structure provides a clear organization for the app's components and screens.



Detailed logic:-



Task 1: Design the Login Page

-  (LoginForm.js) - 


import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = ({ onLogin }) => {
  // Hint: Use state to capture email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hint: Create a function to handle login
  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <View>
      <Text>Login Page</Text>
      {/* Hint: Add input fields for email and password */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {/* Hint: Create a button for login and connect it to the handleLogin function */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;


Task 2: Implement Authentication with API

-  (api.js) - 


import axios from 'axios';

const API_URL = 'https://fakeapi.platzi.com/en/rest/auth-jwt';

// Hint: Create a function for making a login request to the API
export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    // Hint: Extract access_token and refresh_token from the response
    const { access_token, refresh_token } = response.data;
    // Hint: Store tokens in AsyncStorage for future use
    return { access_token, refresh_token };
  } catch (error) {
    // Hint: Handle authentication error
    throw new Error('Authentication failed');
  }
};





Task 3: Manage User Data and Profile Page

-  (ProfileScreen.js) - 


import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation, access_token, onLogout }) => {
  // Hint: Use state to store user details
  const [userDetails, setUserDetails] = useState({});

  // Hint: Create a function to fetch user details using the access_token
  const fetchUserDetails = async () => {
    try {
      // Fetch user details from the API using access_token
      // Update the userDetails state with the retrieved data
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    // Hint: Call the fetchUserDetails function when the component mounts
    fetchUserDetails();
  }, []);

  return (
    <View>
      <Text>Profile Page</Text>
      <Text>Name: {userDetails.name}</Text>
      {/* Hint: Display user details such as name, email, etc. */}
      <Text>Email: {userDetails.email}</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default ProfileScreen;


Task 4: Design the Homepage

-  (HomeScreen.js) - 


import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation, access_token }) => {
  // Hint: Initialize tasks state using useState
  const [tasks, setTasks] = useState([]);

  // Hint: Use useEffect to fetch and update tasks from local storage
  useEffect(() => {
    // Fetch tasks from local storage using AsyncStorage
    // Update the tasks state with the retrieved data
  }, []);

  const handleTaskClick = (taskId) => {
    // Navigate to the task details screen with the taskId
    navigation.navigate('TaskDetails', { taskId });
  };

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          {/* Hint: Add buttons for editing and deleting tasks */}
          <Button title="Edit" onPress={() => handleTaskClick(task.id)} />
          {/* Implement a function to handle task deletion */}
          <Button title="Delete" onPress={() => handleDeleteTask(task.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

Of course! I'll provide s with hints for tasks 5 to 10:

Task 5: Display Tasks and Implement Task Deletion

-  (HomeScreen.js) - 


const HomeScreen = ({ navigation, access_token }) => {
  // Hint: Create a function to delete a task
  const handleDeleteTask = (taskId) => {
    // Implement the logic to delete the task with taskId
  };

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          {/* Hint: Add buttons for editing and deleting tasks */}
          <Button title="Edit" onPress={() => handleTaskClick(task.id)} />
          {/* Use handleDeleteTask function to delete tasks */}
          <Button title="Delete" onPress={() => handleDeleteTask(task.id)} />
        </View>
      ))}
    </ScrollView>
  );
};


Task 6: Implement Task Creation

-  (TaskCreateScreen.js) - 


const TaskCreateScreen = ({ navigation }) => {
  // Hint: Use state to capture and update the task name
  const [taskName, setTaskName] = useState('');

  // Hint: Create a function to handle task creation
  const handleCreateTask = () => {
    // Implement the logic to create a new task with the provided name
  };

  return (
    <View>
      <Text>Create Task</Text>
      {/* Add an input field for the task name */}
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      {/* Hint: Add a button to create the task and link it to the handleCreateTask function */}
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};


Task 7: Implement Task Editing

-  (TaskEditScreen.js) - 


const TaskEditScreen = ({ navigation, route }) => {
  const { taskId } = route.params;

  // Hint: Use state to capture and update the task name
  const [taskName, setTaskName] = useState('');

  // Hint: Create a function to handle task editing
  const handleEditTask = () => {
    // Implement the logic to edit the task with the provided name
  };

  return (
    <View>
      <Text>Edit Task</Text>
      {/* Pre-fill the input field with the current task name */}
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      {/* Hint: Add a button to save the edited task and link it to the handleEditTask function */}
      <Button title="Save Task" onPress={handleEditTask} />
    </View>
  );
};


Task 8: Manage Task Status

-  (HomeScreen.js) - 


const HomeScreen = ({ navigation, access_token }) => {
  // Hint: Create a function to mark a task as completed
  const handleCompleteTask = (taskId) => {
    // Implement the logic to mark the task with taskId as completed
  };

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          {/* Display a message if the task is completed */}
          {task.isCompleted && <Text>Task is Completed</Text>}
          {/* Hint: Add a button to mark the task as completed and link it to the handleCompleteTask function */}
          <Button title="Complete Task" onPress={() => handleCompleteTask(task.id)} />
        </View>
      ))}
    </ScrollView>
  );
};


Task 9: Data Persistence

-  (api.js) - 


const API_URL = 'https://fakeapi.platzi.com/en/rest/auth-jwt';

// Hint: Create a function to save tasks to local storage
const saveTasksToStorage = (tasks) => {
  // Implement the logic to save tasks using AsyncStorage or a similar storage method
};

// Hint: Create a function to retrieve tasks from local storage
const retrieveTasksFromStorage = async () => {
  try {
    // Implement the logic to retrieve tasks using AsyncStorage or a similar storage method
    return tasks;
  } catch (error) {
    // Handle errors
    throw new Error('Error retrieving tasks');
  }
};


Task 10: Native APIs

 (HomeScreen.js) - 


const HomeScreen = ({ navigation, access_token }) => {
  // Hint: Use native APIs like AsyncStorage to manage data persistence
  useEffect(() => {
    // Hint: Fetch tasks from local storage when the component mounts
    const tasks = retrieveTasksFromStorage();
    setTasks(tasks);
  }, []);

  return (
    <ScrollView>
      {/* ...existing code... */}
    </ScrollView>
  );
};








