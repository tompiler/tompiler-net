exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer]
  locations.push(window.location.href)
  window.previousPath = locations[locations.length - 2]
}
