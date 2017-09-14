import PropTypes from 'prop-types';

const propTypes = {
  aspectRatio: PropTypes.oneOf(['inherit', '1:1', '16:9']),
  className: PropTypes.string,
  customProps: PropTypes.object,
  file: PropTypes.string,
  generatePrerollUrl: PropTypes.func,
  image: PropTypes.string,
  isAutoPlay: PropTypes.oneOfType([
    PropTypes.bool,
  ]),
  isMuted: PropTypes.oneOfType([
    PropTypes.bool,
  ]),
  licenseKey: PropTypes.string,
  onAdPause: PropTypes.func,
  onAdPlay: PropTypes.func,
  onAdResume: PropTypes.func,
  onAdSkipped: PropTypes.func,
  onAutoStart: PropTypes.func,
  onEnterFullScreen: PropTypes.func,
  onError: PropTypes.func,
  onExitFullScreen: PropTypes.func,
  onFiftyPercent: PropTypes.func,
  onMute: PropTypes.func,
  onNinetyFivePercent: PropTypes.func,
  onOneHundredPercent: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onReady: PropTypes.func,
  onResume: PropTypes.func,
  onSeventyFivePercent: PropTypes.func,
  onTenSeconds: PropTypes.func,
  onThirtySeconds: PropTypes.func,
  onThreeSeconds: PropTypes.func,
  onTwentyFivePercent: PropTypes.func,
  onUnmute: PropTypes.func,
  onVideoLoad: PropTypes.func,
  playerId: PropTypes.string.isRequired,
  playerScript: PropTypes.string.isRequired,
  playlist: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default propTypes;
