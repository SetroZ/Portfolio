export interface formType {
  name: string
  email: string
  title: string
  message: string
}
export interface formStates {
  [key: string]: boolean
  name: boolean
  email: boolean
  title: boolean
  message: boolean
}

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
  Comment: commentType[]
}
export interface commentType {
  name: string
  body: string
  date: Date
  id: number
}

export type commentInputType = Omit<commentType, 'id' | 'date'>
