export function setType(top, good, tab) {
    if (top) {
        return '置顶'
    } else if (good) {
        return '精品'
    } else {
        switch (tab) {
            case 'ask':
                return '问答';
            case 'share':
                return '分享';
            default:
                return ''
        }
    }
}
export function setTime(time) {
    let min = ((+new Date() - +new Date(time)) / 1000 / 60)
    if (min < 60) {
        return Math.floor(min) + ' 分钟前'
    } else if (min < 60 * 24) {
        return Math.floor(min / 60) + ' 小时前'
    } else if (min < 60 * 24 * 30) {
        return Math.floor(min / 60 / 24) + ' 天前'
    } else if (min < 60 * 24 * 30 * 12) {
        return Math.floor(min / 60 / 24 / 12) + ' 个月前'
    } else {
        return Math.floor(min / 60 / 24 / 12 / 12) + ' 年前'
    }
}