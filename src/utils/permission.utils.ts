import {
  PERMISSIONS,
  check,
  openSettings,
  request,
} from 'react-native-permissions';

export async function requestUserStorage() {
  //first check
  const checkResult = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  if (checkResult === 'granted') return true;
  const result = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, {
    title: 'Storage Permission Required',
    message: 'HD WallPaper needs access to storage to download files.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });
  if (result === 'blocked') {
    //open settings
    await openSettings();
  } else if (result === 'granted') return true;
  return false;
}
