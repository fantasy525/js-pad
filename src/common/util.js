/**
 * Created by zxf on 2018.4.9.
 */
export function Css(el, prop) {

  return window.getComputedStyle(el)[prop]
}
const SessionStorge={
  setItem(key,value){
    console.log(value);
    window.sessionStorage.setItem(key,JSON.stringify(value));
  },
  getItem(key){

    let v=window.sessionStorage.getItem(key);

    return JSON.parse(v);
  }
}
export {
  SessionStorge
}
