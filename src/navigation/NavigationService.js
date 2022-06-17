// RootNavigation.js

import { createNavigationContainerRef ,StackActions,CommonActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
  else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}
export function navigateReplace(name, param) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        StackActions.replace(name, {
          param,
        }),
      );
    }
  }
export function push(...args) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(...args));
    }
  }
 

// add other navigation functions that you need and export them