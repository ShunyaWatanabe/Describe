import { BackHandler } from 'react-native';

export default function(Component: any) {
  BackHandler.addEventListener('hardwareBackPress', function() {
    return true;
  });
  return Component;
}
