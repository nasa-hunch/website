import { path } from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
import youtubedl from 'youtube-dl-exec'
import { mkdirSync } from 'fs';

ffmpeg.setFfmpegPath(path);

mkdirSync('src/lib/videos', { recursive: true });

console.log(await youtubedl('https://www.youtube.com/watch?v=mtsWDWCCSG0', {
  output: "src/lib/videos/hero1.mp4",
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: ['referer:youtube.com', 'user-agent:googlebot']
}));

const instance = ffmpeg();
instance.addInput('src/lib/videos/hero1.mp4')
instance.setStartTime('00:00:04').setDuration('00:00:43')
instance.output('src/lib/videos/hero.mp4')
instance.run()
