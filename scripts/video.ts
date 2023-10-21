import youtubedl from 'youtube-dl-exec'

youtubedl('https://www.youtube.com/watch?v=mtsWDWCCSG0', {
  dumpSingleJson: true,
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: ['referer:youtube.com', 'user-agent:googlebot']
}).then(output => console.log(output))
