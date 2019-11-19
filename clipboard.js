function copyTextClipboard (text, self){
  if (window.clipboardData) {
    /* ie浏览器 */
    window.clipboardData.setData('Text', text)
  } else {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    alert('复制成功')
    // self.$Message.success('复制成功')
  }
}
// export default copyTextClipboard