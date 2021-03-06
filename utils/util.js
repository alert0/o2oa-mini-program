const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 显示toast
const toast = (title, icon = 'none') => {
  wx.showToast({
    title: title,
    icon: icon
  })
}
const showLoading = (message = '加载中...') => {
  wx.showLoading({
    title: message,
  });
}

const hideLoading = () => wx.hideLoading();
 

module.exports = {
  formatTime: formatTime,
  toast: toast,
  showLoading: showLoading,
  hideLoading: hideLoading
}
