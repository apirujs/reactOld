import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Animated,
} from "react-native";
import { useState, useEffect ,useRef} from "react";

const MenuButton = ({ onPress, style, title, onDuration }) => {
  const [opacity, setOpacity] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = Animated.timing(fadeAnim, {
    toValue: 1,
    duration:
      typeof onDuration === "undefined"
        ? cdefault.hover.onDuration
        : onDuration,
    useNativeDriver: false,
  });

  const fadeOut = Animated.timing(fadeAnim, {
    toValue: 0,
    duration:
      typeof onDuration === "undefined"
        ? cdefault.hover.onDuration
        : onDuration,
    useNativeDriver: false,
  });

  const cOnpress = (callback) => {
    try {
      Animated.sequence([fadeOut, fadeIn]).start();
    } catch (err) {
      console.log(err);
    } finally {
      if (typeof callback == "function") {
        return callback();
      }
    }
  };
  //initial
  useEffect(() => {
    if (title == null) title = "Button";
    //console.log(title);
  }, []);

  return (
    <Pressable style={{width: style.width,height: style.height}} onPress={() => { cOnpress(onPress); }} >
      <Animated.View style={ style ,{opacity:fadeAnim}}>
        <Text style={typeof style.Text === "undefined" ? cdefault.Text : style.Text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const cdefault = StyleSheet.create({
  Text: {
    color: "black",
    fontSize: 16,
    alignItems: "center",
  },
  hover: {
    onDuration: 100,
  },
});

export default MenuButton;