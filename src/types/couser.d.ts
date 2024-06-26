import { SuccessResponse } from './utils'

export interface ICourse {
  _id?: string
  name: string
  description: string
  price: number
  paid: boolean | string
  published: boolean
  image: string | FileList
}
export interface IChapter {
  _id: string
  title: string
  videos: {
    title: string
    url: string
    _id: string
    createdAt: string
    updatedAt: string
  }[]
}
export type CourseState = {
  chapters: IChapter[]
  createdAt: string
  description: string
  image: string
  name: string
  paid: boolean
  price: number
  published: boolean
  updatedAt: string
  _id: string
} | null

export type CourseStateSuccess = SuccessResponse<CourseState>
