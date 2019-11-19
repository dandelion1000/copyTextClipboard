# copyTextClipboard
简单复制文本内容
思路：document.execCommand('copy')可以实现 复制
复制的前提是需要创建一个选区
具有编辑性的元素：input或textarea可以直接创建select选区，
但项目实例中一般很少有需要复制的内容在input的元素中，故
第一步先创建一个input元素，将要复制的内容值赋值给input，然后将该元素加入body
，选中，调用复制方法，最后移除即可
```javascript
    let input = document.createElement('input')
    input.type = 'text'
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
```
