import { path } from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
ffmpeg.setFfmpegPath(path);
import youtubedl from 'youtube-dl-exec'

youtubedl('https://www.youtube.com/watch?v=mtsWDWCCSG0', {
  output: "src/lib/videos/hero1.mp4",
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: ['referer:youtube.com', 'user-agent:googlebot']
}).then(output => console.log(output))

const instance = ffmpeg();
instance.addInput('src/lib/videos/hero1.mp4')
instance.setStartTime('00:00:04').setDuration('00:00:43')
instance.output('src/lib/videos/hero.mp4')
instance.run()
