function toggleFooterOn() {
  const profileFooter = document.getElementById('footerProfile')
  const footerShare = document.getElementById('footerShare')
  const footer = document.getElementById('footer')
  const shareIcon = document.getElementById('shareIcon')
  const shareIconHighlight = document.getElementById('shareIconHighlight')
  const tooltip = document.getElementById('tooltip')
  const tooltipNipple = document.getElementById('tooltipNipple')
  const width = window.innerWidth
  const height = window.innerHeight

  if (width <= 800) {
    profileFooter.style.display = 'none'
    footerShare.style.display = 'flex'
    shareIcon.style.display = 'none'
    shareIconHighlight.style.display = 'block'

    footer.style.animation = 'changeColor 1s forwards'
    footerShare.style.animation = 'changeColor 1s forwards'
  } else {
    let hPosition = width / 2 + 200
    let vPosition = height / 2 - 35
    let nhPosition = hPosition + 115
    let nvPosition = vPosition + 50
    tooltip.style.left = hPosition + 'px'
    tooltip.style.top = vPosition + 'px'
    tooltip.style.animation = 'removeOpacity 1s forwards'
    tooltipNipple.style.left = nhPosition + 'px'
    tooltipNipple.style.top = nvPosition + 'px'
    tooltipNipple.style.animation = 'removeOpacity 1s forwards'
  }
}

function toggleFooterOff() {
    const profileFooter = document.getElementById('footerProfile')
    const footerShare = document.getElementById('footerShare')
    const footer = document.getElementById('footer')
    const shareIcon = document.getElementById('shareIcon')
    const shareIconHighlight = document.getElementById('shareIconHighlight')
    const tooltip = document.getElementById('tooltip')
    const tooltipNipple = document.getElementById('tooltipNipple')
    const width = window.innerWidth
    const height = window.innerHeight

  if (width <= 800) {
    footerShare.style.display = 'none'
    profileFooter.style.display = 'flex'
    shareIcon.style.display = 'block'
    shareIconHighlight.style.display = 'none'

    footer.style.animation = 'revertColor 1s forwards'
    footerShare.style.animation = 'revertColor 1s forwards'
  } else {

    tooltip.style.animation = 'addOpacity 1s forwards'
    tooltipNipple.style.animation = 'addOpacity 1s forwards'
  }
}

let footerShareActive = false

function toggleFooter() {
  if (footerShareActive) {
    toggleFooterOff()
    footerShareActive = false
  } else {
    toggleFooterOn()
    footerShareActive = true
  }
}
