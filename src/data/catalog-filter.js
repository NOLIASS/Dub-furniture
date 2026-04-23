


checkboxes.forEach(cb => {
  cb.addEventListener('change', () => filter())
})

export function filter() {
  const selected = [...checkboxes]
  .filter(cb =>cb.checked && cb.value !== 'all')
  .map(cb => cb.value)

  if (selected.length === 0){
    items.forEach(item => item.style.display = 'block')
    return
  }

  items.forEach(item =>{
    const match =selected.includes(item.dataset.category)
    item.style.display = match ? 'block' : 'none'
  })
}

