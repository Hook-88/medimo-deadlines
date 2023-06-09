const banner = {
  el: document.getElementById('copy-deadline-banner'),
  show() {
    this.el.classList.remove('hidden')
  },
  hide() {
    this.el.classList.add('hidden')
  },
  handleCopyBanner() {
    this.show()
    setTimeout(() => {
      this.hide()
    },1500)
  }
}
export {banner}