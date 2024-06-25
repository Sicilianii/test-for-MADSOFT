export type Question = {
    id_question: number,
    title: string,
    current: boolean,
    status: 'idle' | 'success',
    type: 'radio' | 'checkbox',
    variant: QuestionVariantAnswer[]
}

export type QuestionVariantAnswer = {
    id: number,
    value: string
}