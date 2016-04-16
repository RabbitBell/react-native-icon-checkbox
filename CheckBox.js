import React, {
  Text,
  PropTypes,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function CheckBox(props) {
  const iconName = props.checked ? 'check-box' : 'check-box-outline-blank';
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
    },
    icon: {
      marginLeft: -10,
    },
  });

  function onPress() {
    props.onPress(!props.checked);
  }

  return (
    <Icon.Button
      {...props}
      transition={['color', 'rotate', 'fontSize']}
      name={iconName}
      size={props.size}
      backgroundColor={props.backgroundColor}
      color={props.color}
      iconStyle={[styles.icon, props.iconStyle, props.checked && props.checkedIconStyle]}
      onPress={onPress}
      activeOpacity={props.activeOpacity}
      underlayColor={props.underlayColor}
      borderRadius={props.borderRadius}
    >
      <Text
        style={[styles.label, props.labelStyle]}
      >
        {props.label}
      </Text>
    </Icon.Button>
  );
}

CheckBox.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  checkedIconStyle: PropTypes.object,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  underlayColor: PropTypes.string,
  activeOpacity: PropTypes.number,
  borderRadius: PropTypes.number,
};

CheckBox.defaultProps = {
  size: 30,
  checked: false,
  labelStyle: {},
  iconStyle: {},
  checkedIconStyle: {},
  color: '#000',
  backgroundColor: 'rgba(0,0,0,0)',
  underlayColor: 'rgba(0,0,0,0)',
  activeOpacity: 1,
  borderRadius: 5,
};