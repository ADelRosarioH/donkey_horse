import { ExpoConfig, ConfigContext } from 'expo/config';

const ENV = process.env.NODE_ENV || 'development';

type EnvironmentBasedKeyValuePairs = {
	[key: string]: string;
}

const AppNames: EnvironmentBasedKeyValuePairs = {
	development: 'Donkey Horse (Development)',
	production: 'Donkey Horse',
};

const AppSlugs: EnvironmentBasedKeyValuePairs = {
	development: 'donkey-horse-development',
	production: 'donkey-horse',
};

const googleServicesJsonFiles: EnvironmentBasedKeyValuePairs = {
	development: './configs/development/google-services.json',
  	production: './configs/production/google-services.json',
};

const googleServicesInfoPlistFiles: EnvironmentBasedKeyValuePairs = {
	development: './configs/development/GoogleService-Info.plist',
  	production: './configs/production/GoogleService-Info.plist',
};

const appName = AppNames[ENV] || AppNames.development;
const appSlug = AppSlugs[ENV] || AppSlugs.development;
const googleServicesJsonFile = googleServicesJsonFiles[ENV] || googleServicesJsonFiles.development;
const googleServicesInfoPlistFile = googleServicesInfoPlistFiles[ENV] || googleServicesInfoPlistFiles.development;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: appName,
  name: appSlug,
  android: {
	...config.android,
	googleServicesFile: googleServicesJsonFile,
  },
  ios: {
	...config.ios,
	googleServicesFile: googleServicesInfoPlistFile,
  },
});
