export type Question = {
    id_question: string,
    title: string,
    status: 'idle' | 'success',
    type: 'radio' | 'checkbox',
    variant: QuestionVariantAnswer[]
}

export type QuestionVariantAnswer = {
    id: number,
    value: string
}