import { NavigationContainer } from '@react-navigation/native';
import CommunityScreen from './(tabs)/community';
import { useNavigation } from '@react-navigation/native';
import PostDetails from './postDetails';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// // Defines the parameters each screen in the navigation stack can accept
// type RootStackParamList = {
//   Community: undefined; // Doesn't accept any params
//   // individualPost: { postId: string; onClick: () => void; }; // Must contain a postID and 
//   PostDetails: { postId: string };
// };

const AppNavigator = createStackNavigator(
  {
    Community: CommunityScreen,
    Details: PostDetails,
  },
  {
    initialRouteName: 'Community',
  }
);
