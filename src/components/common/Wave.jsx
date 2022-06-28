import Wavify from 'react-wavify'

export function Wave ({ paused, fill, options, style }) {
  return (
    <Wavify
      paused={paused || false}
      fill={fill || 'yellow'}
      options={
        options || {
          height: 60,
          amplitude: 30,
          speed: 0.3,
          points: 5
        }
      }
      style={style}
    />
  )
}
