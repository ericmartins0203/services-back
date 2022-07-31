import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    cpf: yup.string().required(),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.number(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
})

export const updateSchema = yup.object().shape({
    name: yup.string(),
    cpf: yup.string(),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.number(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
})


