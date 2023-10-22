import { path } from '@ffmpeg-installer/ffmpeg';
import ffmpeg from 'fluent-ffmpeg';
import youtubedl from 'youtube-dl-exec'
import fs from 'fs';

ffmpeg.setFfmpegPath(path);

fs.mkdirSync('src/lib/videos', { recursive: true });

console.log(await youtubedl('https://www.youtube.com/watch?v=mtsWDWCCSG0', {
  output: "src/lib/videos/hero1",
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
  ffmpegLocation: path,
}));

// find the file in the src/lib/videos folder that starts with hero1:
const file = fs.readdirSync('src/lib/videos').find(f => f.startsWith('hero1'));

console.log(file);

const instance = ffmpeg();
instance.addInput('src/lib/videos/' + file);
instance.setStartTime('00:00:04').setDuration('00:00:43')
instance.output('src/lib/videos/hero.mp4')
instance.videoFilter('crop=in_w:in_h-150-150')
instance.run()
