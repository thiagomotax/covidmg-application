# COVID-MG PAINEL

## ⚙️ Settings and Installation

```jsx
// nvm 12
// How to set nvm 12 ? 
nvm use 12
nvm alias default 12
```

```jsx
// Clone repository
git clone https://github.com/thiagomotax/covidmg-application.git
cd covidmg-application

// Set nvm version 12
nvm use 12
nvm alias default 12

// Install packages
yarn install or yarn 

// Initialize project 
yarn start

yarn ios or yarn android
```

## 📦 Packages

- react-native-navigation - [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

    ```jsx
    // Install package
    yarn add @react-navigation/native
    ```

    ```jsx
    // Installing dependencies into a bare React Native project
    yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-vie// Import react-native-gesture-handle in top line (index.js){ NavigationContainer } from '@react-navigation/native';
    ```

    ```jsx
    // Import react-native-gesture-handle in top line (index.js)
    import 'react-native-gesture-handler';
    import * as React from 'react';
    import { NavigationContainer } from '@react-navigation/native';

    export default function App() {
      return (
        <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      );
    }
    ```

    ```jsx
    // Install @react-navigation/stack
    yarn add @react-navigation/stack
    ```

    ```jsx
    // Install @react-navigation/bottom-tabs
    yarn add @react-navigation/bottom-tabs
    ```

- styled-components - [https://styled-components.com](https://styled-components.com/)

    ```jsx
    yarn add styled-components
    ```

- axios - [https://github.com/axios/axios](https://github.com/axios/axios)

    ```jsx
    yarn add axios
    ```

- lodash - [https://lodash.com/docs/4.17.15](https://lodash.com/docs/4.17.15)

    ```jsx
    yarn add lodash
    ```

- react-native-svg - [https://github.com/react-native-svg/react-native-svg#installation](https://github.com/react-native-svg/react-native-svg#installation)

    ```jsx
    yarn add react-native-svg
    ```

- react-native-svg-transformer - [https://github.com/kristerkari/react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)

    ```jsx
    yarn add --dev react-native-svg-transformer
    ```

- react-native-async-storage

    ```jsx
    yarn add @react-native-async-storage/async-storage
    ```

- react-native-chart-kit - [https://github.com/indiespirit/react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit)

    ```jsx
    yarn add react-native-chart-kit
    ```