import React from 'react'
import {Platform , Dimensions} from 'react-native'

export const Bold = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile_Bold';
export const Medium = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile_Medium';
export const Regular = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile';
export const Light = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile_Light';
export const Ultra = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile_UltraLight';
export const FaNum = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile(FaNum)_UltraLight';
export const FontWeight = Platform.OS === 'ios' ? 'bold' : 'normal';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;