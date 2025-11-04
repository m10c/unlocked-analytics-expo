import * as Application from 'expo-application';
import * as Device from 'expo-device';
import * as Localization from 'expo-localization';
import { Dimensions, PixelRatio, Platform } from 'react-native';
// Needed for Expo Web
let packageJson;
try { packageJson = require('../package.json'); }
catch (err) { packageJson = require('../../package.json'); }

const expoAnalyticsContext = {
  app: {
    name: Application.applicationName || '',
    version: Application.nativeApplicationVersion || undefined,
    build: Application.nativeBuildVersion?.toString(),
  },
  device: {
    manufacturer: Device.manufacturer || undefined,
    model: Device.modelId || Device.modelName,
  },
  library: {
    name: 'unlocked-analytics-expo',
    version: packageJson.version,
  },
  locale: Localization.getLocales()[0].languageTag,
  os: {
    name: Platform.OS,
    version: Platform.Version,
  },
  screen: {
    density: PixelRatio.get(),
    // TODO: Have this update if device rotates
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  timezone: Localization.getCalendars()[0].timeZone,
};

export default expoAnalyticsContext;
