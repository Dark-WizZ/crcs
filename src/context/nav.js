
export const switchPath=(path, nav)=>{
  let parts= window.location.href.split('/')
  let loc = parts[parts.length-1]
  if(loc==path) nav('../')
  else nav(`../${path}`)
}