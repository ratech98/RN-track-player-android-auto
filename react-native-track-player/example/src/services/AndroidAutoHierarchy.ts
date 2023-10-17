import { AndroidAutoBrowseTree } from 'react-native-track-player';

const DemoAndroidAutoHierarchy: AndroidAutoBrowseTree = {
  '/': [
    {
      mediaId: 'tab1',
      title: 'tab1',
      subtitle: 'tab subtitle',
      playable: '1',
    },
    {
      mediaId: 'tab2',
      title: 'tab2',
      subtitle: 'tab subtitle',
      playable: '1',
    },
    {
      mediaId: 'tab3',
      title: 'tab3',
      subtitle: 'tab subtitle',
      playable: '1',
    },
  ],
  tab1: [
    {
      mediaId: '1',
      title: 'Soul Searching (Demo)',
      subtitle: 'David Chavez',
      playable: '0',
      iconUri:
        'https://react-native-track-player.js.org/example/Soul%20Searching.jpeg',
      mediaUri:
        'https://react-native-track-player.js.org/example/Soul%20Searching.mp3',
      groupTitle: 'RNTP Demo Group',
    },
  ],
};

export default DemoAndroidAutoHierarchy;
