export interface blogSubmitType {
  title: string
  body: string
  image: File
  subtitle: string
}
export interface blogType {
  id: number
  title: string
  body: string
  image: string
  date: Date
  subtitle: string
  Comment: CommentType[]
}
export interface CommentType {
  name: string
  body: string
  date: Date
  id: number
}
