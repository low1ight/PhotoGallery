import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import PhotoGallery from "./screens/photoGalleryScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import store from "./redux/store";
import {FullSizePhotoScreen} from "./screens/fullSizePhotoScreen";

const Stack = createStackNavigator();

export function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={PhotoGallery} />
          <Stack.Screen name="Photo" component={FullSizePhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
