import { marked } from 'marked'
// or const { marked } = require('marked');


function renderMarkef(target) {
    return marked.parse(target)
}
export default renderMarkef