/**
 * Created by zxf on 2018.4.9.
 */
export function Css(el, prop) {

  return window.getComputedStyle(el)[prop]
}
