export type Question = {
    title: string,
    status: 'idle' | 'success',
    type: 'radio' | 'checkbox',
    variant: QuestionVariantAnswer[]
}

export type QuestionVariantAnswer = {
    id: number,
    value: string
}