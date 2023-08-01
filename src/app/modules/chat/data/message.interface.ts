export interface IMessage{
     sender: string,
     msg: string
     attachment?: string,
     fileType?: string,
     fileName?: string,
     fileSize?: string
}
export interface IFileRegex{
     isImage: RegExp,
     isVideo: RegExp,
     isAudio: RegExp
}
export interface FileObj{
     attachment?: string,
     fileType?: string,
     fileName?: string,
     fileSize?: string
}   