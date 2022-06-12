/**
 * 时间格式化 2019-09-08 18:00
 * 配置参数参考：https://ououe.com/posts/2019/12/06/tolocalestring/
 * @param timeStamp 
 */
export function format(timeStamp) {
  const time = new Date(parseInt(timeStamp))
  return time.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hourCycle: 'h24'
  })
}