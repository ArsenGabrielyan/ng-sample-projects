export interface IToast {
     timer: number,
     success: {icon: string,text: string},
     error: {icon: string,text: string },
     warning: {icon: string,text: string}
     info: {icon: string,text: string}
}
export interface IToastElem {
     icon: string,
     text: string
}