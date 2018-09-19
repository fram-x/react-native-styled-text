import { StyleSheet } from 'react-native';

import * as Colors from '../../styles/colors';

const absoluteFillCenteredContent = {
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  container: {
    zIndex: 10000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.BACKGROUND,
  },
  'bold-2': {
    fontWeight: 'bold',
    // color: '#FFAADD',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
    marginLeft: 100,
  },
  backgroundImage: {
    ...absoluteFillCenteredContent,
    resizeMode: 'contain',
  },
  progressContainer: {
    ...absoluteFillCenteredContent,
  },
  foregroundImageContainer: {
    ...absoluteFillCenteredContent,
  },
});
