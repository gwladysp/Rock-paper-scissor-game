const open_rules = document.querySelector("[data-action = 'open-rules']")
const close_rules = document.querySelector("[data-action = 'close-rules']")
const rules_container = document.querySelector("[data-action = 'rules-container']")
const rules = document.querySelector("[data-action = 'rules']")

if (open_rules && close_rules && rules_container) {
    open_rules.addEventListener('click', function() {
        rules_container.classList.remove('hidden')
    })
    close_rules.addEventListener('click', function() {
        rules_container.classList.add('hidden')
    })
    rules_container.addEventListener('click', function() {
        rules_container.classList.add('hidden')
    })
    rules.addEventListener('click', function(e) {
        e.stopPropagation()
    })
}
