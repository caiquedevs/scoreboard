import React from 'react';

import { TouchableOpacity, StyleSheet, SafeAreaView, View, Text } from 'react-native';

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
    <SafeAreaView className="w-full bg-transparent">
      <View>
        <TouchableOpacity className="w-9 h-9" onPress={content?.btnLeft?.onPress}>
          {content?.btnLeft?.icon!}
        </TouchableOpacity>

        <Text>{content?.title!}</Text>

        <TouchableOpacity className="w-9 h-9" onPress={content.btnRight.onPress}>
          {content?.btnRight?.icon!}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
