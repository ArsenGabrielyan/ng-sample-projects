import { IFileRegex } from "./message.interface";
export const fileRegexp: IFileRegex = {
  isImage: /[\/.](gif|jpg|jpeg|tiff|png|webp)$/i,
  isAudio: /[\/.](wav|mp3|aiff|m4a|wma|ogg)$/i,
  isVideo: /[\/.](wmv|mp4|mov|avi|mkv)$/i,
}
export const toBase64 = (file: File | undefined): Promise<any> => new Promise((resolve, reject)=>{
  const reader = new FileReader();
  if(file){
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err)=> reject(err);
  }
})
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (!+bytes) return '0 Bytes'
  const k = 1024, dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
export const toBottom = () => setTimeout(()=>{
  const elem = document.querySelector(".messages");
  if(elem) elem.scrollTop = elem.scrollHeight;
},100);
export function validation(v1:string,v2:string):string{
  if(v1===v2) return "Names Shouldn't be Same";
  else if(v1.trim()===""||v2.trim()==="") return "Names Shouldn't be Empty"
  else return ""
}