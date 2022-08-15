import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";

import { SafeAreaView, Container } from "./styles";
import { Text } from "../Text";

interface HeaderProps {
  content: {
    title?: string;
    titleColor?: string;
    background: string | null;
    btnLeft: {
      onPress: () => any;
      icon: any;
    };
    btnRight: {
      onPress: () => any;
      icon: any;
    };
  };
}

export function Header({ content }: HeaderProps) {
  return (
    <SafeAreaView bg={content.background}>
      <Container bg={content.background}>
        <TouchableOpacity
          style={styles.button}
          onPress={content?.btnLeft?.onPress}
        >
          {content?.btnLeft?.icon!}
        </TouchableOpacity>

        <Text
          size={2.6}
          font="ArchivoMedium"
          color={content.titleColor || "#000000"}
        >
          {content?.title!}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={content.btnRight.onPress}
        >
          {content?.btnRight?.icon!}
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    width: "100%",
    backgroundColor: "transparent",
  },
  button: {
    minWidth: 26,
  },
});
