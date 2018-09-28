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
      songmid: v.songmid,
      playStatus: false,
      fileName: `${v.songname}.m4a`
    })
  })

  return list
}

export function isWexin () {
  // let ua = navigator.userAgent.toLowerCase()
  // let isWeixin = ua.indexOf('micromessenger') !== -1
  // if (isWeixin) {
  //   return true
  // } else {
  //   return false
  // }
  return false
}
