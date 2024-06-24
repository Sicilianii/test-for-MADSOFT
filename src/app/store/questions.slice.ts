import {createSlice} from "@reduxjs/toolkit";
import {Question} from "../../types/Question.type.ts";

const initialState: Question[] = [
    {
        "title": "Чему равно 2 && 1 && null && 0 && undefined",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "2"
            },
            {
                "id": 2,
                "value": "1"
            },
            {
                "id": 3,
                "value": "null"
            },
            {
                "id": 4,
                "value": "0"
            },
            {
                "id": 5,
                "value": "undefined"
            },
            {
                "id": 6,
                "value": "false"
            }
        ]
    },
    {
        "title": "Что выведет этот код?  alert( +\"Infinity\" );",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "Infinity"
            },
            {
                "id": 2,
                "value": "NaN"
            },
            {
                "id": 3,
                "value": "0"
            },
            {
                "id": 4,
                "value": "Будет ошибка."
            }
        ]
    },
    {
        "title": "Какие вызовы parseInt возвратят число?",
        "status": "idle",
        "type": "checkbox",
        "variant": [
            {
                "id": 1,
                "value": "parseInt(\"1px\")"
            },
            {
                "id": 2,
                "value": "parseInt(\"-1.2\")"
            },
            {
                "id": 3,
                "value": "parseInt(\"0 минут\")"
            },
            {
                "id": 4,
                "value": "parseInt(\"$1.2\")"
            }
        ]
    },
    {
        "title": "Чему равно 0 || \"\" || 2 || undefined || true || falsе ?",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "0"
            },
            {
                "id": 2,
                "value": "\"\""
            },
            {
                "id": 3,
                "value": "2"
            },
            {
                "id": 4,
                "value": "undefined"
            },
            {
                "id": 5,
                "value": "true"
            },
            {
                "id": 6,
                "value": "false"
            }
        ]
    },
    {
        "title": "Что получится, если сложить true + false?",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "\"truefalse\""
            },
            {
                "id": 2,
                "value": "0"
            },
            {
                "id": 3,
                "value": "1"
            },
            {
                "id": 4,
                "value": "NaN"
            }
        ]
    },
    {
        "title": "Объявлена функция:  function F() {}  Чем является F.prototype?",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "Обычным объектом."
            },
            {
                "id": 2,
                "value": "Функцией."
            },
            {
                "id": 3,
                "value": "Равен undefined."
            }
        ]
    },
    {
        "title": "Чему равно такое выражение?  [] + false - null + true",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "0"
            },
            {
                "id": 2,
                "value": "NaN"
            },
            {
                "id": 3,
                "value": "undefined"
            },
            {
                "id": 4,
                "value": "1"
            }
        ]
    },
    {
        "title": "Какие конструкции для циклов есть в javascript?",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "Только две: for и while."
            },
            {
                "id": 2,
                "value": "Только одна: for."
            },
            {
                "id": 3,
                "value": "Три: for, while и do...while."
            }
        ]
    },
    {
        "title": "Какая арифметическая операция приводит к ошибке в javascript?",
        "status": "idle",
        "type": "radio",
        "variant": [
            {
                "id": 1,
                "value": "Деление на ноль."
            },
            {
                "id": 2,
                "value": "Умножение числа на строку."
            },
            {
                "id": 3,
                "value": "Корень из отрицательного числа."
            },
            {
                "id": 4,
                "value": "Никакая из вышеперечисленных."
            }
        ]
    }
]

const QuestionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion: (state, action) => console.log(state, action),
        removeQuestion: (state, action) => console.log(state, action),
        editQuestion: (state, action) => console.log(state, action),
    }
});

export const QuestionReducer = QuestionsSlice.reducer;
export type RootReducerType = ReturnType<typeof QuestionReducer>;

export const {
    addQuestion,
    removeQuestion,
    editQuestion
} = QuestionsSlice.actions;