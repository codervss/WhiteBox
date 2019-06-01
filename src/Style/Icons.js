import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons'

export default matIcons = ({namex, colorx, sizex}) => (
    <MaterialIcons
      style={{ backgroundColor: 'transparent' }}
      name={namex || 'favorite'}
      color={colorx || 'green'}
      size={sizex || 24}
    />
  );