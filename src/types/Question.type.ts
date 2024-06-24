export type Question = {
    title: string,
    type: 'radio' | 'checkbox',
    variant: QuestionVariantAnswer[]
}

export type QuestionVariantAnswer = {
    id: number,
    value: string
}