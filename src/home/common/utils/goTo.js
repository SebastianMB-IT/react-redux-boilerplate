export const goTo = (id, path, history) => {
  if (path) {
    history.push(path)
  } else {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
