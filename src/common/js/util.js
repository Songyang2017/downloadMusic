export function debounce (func, delay) {
  let timer

  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function musicDate (lis) {
  var list = []
  lis.forEach((v) => {
    list.push({
      img: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${v.albummid}.jpg?max_age=2592000`,
      songName: v.songname,
      albumname: v.albumname,
      singerName: v.singer[0].name,
      vkeyUrl: `http://dl.stream.qqmusic.qq.com/${v.filename}?vkey=${v.vkey}&guid=7748797702&uin=1546302993&fromtag=66`
    })
  })

  return list
}
