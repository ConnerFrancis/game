const log = document.getElementById('log')
const logTop = document.getElementById('log-top')
const logContent = document.getElementById('log-content')
var count = 0

/** This script overrides the default console and copies its contents onto the webpage console. */
;['log', 'debug', 'warn', 'error', 'info'].forEach((verb) => {
  window.console[verb] = (function (method, verb, log) {
    return function () {
      /* 1: Apply old console method.
       * 2: Create a new node to display the info.
       * 3: Make sure the class of the type is applied.
       * 4: Add a label in the node for the type.
       * 5: Put the data passed to the original method in the node.
       * 6: Show the new node.
       * 7: Set the scrollbar to the bottom of the logger.
       * 8: Increase the count for labeling purposes.
       */
      /* [1] */
      method.apply(window.console, arguments)
      /* [2] */
      let node = document.createElement('div')
      /* [3] */
      node.classList.add(verb)
      /* [4] */
      let nodeLabel = document.createElement('div')
      let lineNo = count
      for (var i = 0; i < (count.toString().length + 2); i++) {
        lineNo = '0' + lineNo
      }
      nodeLabel.textContent = lineNo + ' '
      node.appendChild(nodeLabel)
      /* [5] */
      let nodeContent = document.createElement('div')
      nodeContent.textContent = Array.prototype.slice.call(arguments).join(' ')
      node.appendChild(nodeContent)
      /* [6] */
      log.appendChild(node)
      /* [7] */
      log.scrollTop = log.scrollHeight
      /* [8] */
      count++
    }
  })(window.console[verb], verb, logContent)
})
window.console.debug('Console loaded:')

/** This script makes the console draggable. */
logTop.addEventListener('dragend', (e) => {
  log.style.left = e.clientX + 'px'
  log.style.top = e.clientY + 'px'
})

/** Display all errors in the in-page console. */
window.onerror = (e, url, line) => {
  console.error(`${url}:${line} - ${e}`)
}
