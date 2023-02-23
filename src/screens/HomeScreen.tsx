import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {}

export function HomeScreen(props: IProps) {
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const handlePressIncrementLeft = () => {
    setScoreLeft((old) => old + 1);
  };

  const handlePressIncrementRight = () => {
    setScoreRight((old) => old + 1);
  };

  const handlePressReset = () => {
    setScoreLeft(0);
    setScoreRight(0);
  };

  const headerContent = {
    title: 'Scoreboard',
    titleColor: '#ffffff',
    background: '#212832',
    btnLeft: {
      onPress: () => {},
      icon: null,
    },
    btnRight: {
      onPress: handlePressReset,
      icon: <Ionicons name="ios-refresh-outline" size={24} color="#ffffff" />,
    },
  };

  return (
    <View className="flex-1 bg-slate-800">
      <SafeAreaView className="w-full pt-12 pb-4 bg-slate-900">
        <View className="w-full items-end justify-center">
          <View className="w-full items-center justify-self-center absolute left-0">
            <Text className="text-lg text-white">Scoreboard</Text>
          </View>

          <TouchableOpacity className="mb-1 mr-3 items-center justify-center" onPress={handlePressReset}>
            <Ionicons name="ios-refresh-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View className="flex-1">
        <View className="flex-1 pt-10 pb-5 px-5">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePressIncrementLeft}
            className="w-full flex-1 items-center justify-center border border-pink-600 rounded-lg"
          >
            <Text style={{ fontFamily: 'ArchivoMedium', color: '#FC227D' }} className="px-2 text-4xl bg-slate-800 absolute -top-5">
              Team A
            </Text>
            <Text style={{ fontFamily: 'BungeeShade', color: '#FC227D' }} className="text-9xl">
              {scoreLeft}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 pt-5 pb-10 px-5">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handlePressIncrementRight}
            className="w-full flex-1 items-center justify-center border border-sky-600 rounded-lg"
          >
            <Text style={{ fontFamily: 'BungeeShade', color: '#02B1FF' }} className="text-9xl">
              {scoreRight}
            </Text>
            <Text style={{ fontFamily: 'ArchivoMedium', color: '#02B1FF' }} className="px-2 text-4xl bg-slate-800 absolute -bottom-5">
              Team B
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
