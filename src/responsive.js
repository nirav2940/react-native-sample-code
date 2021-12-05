import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const normalize = (size, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const wp = size => {
  return normalize(size, 'width');
};

const hp = size => {
  return normalize(size, 'height');
};

const fp = size => {
  return hp(size);
};

export {wp, hp, fp,SCREEN_WIDTH,SCREEN_HEIGHT};
