import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    cpf: yup.string().matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/, "CPF inválido ").required("CPF obrigatório"),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.string(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
})

export const updateSchema = yup.object().shape({
    name: yup.string(),
    cpf: yup.string(),
    alias: yup.string(),
    gender: yup.string(),
    phone: yup.string(),
    address: yup.string(),
    comments: yup.string(),
    profilePicture: yup.string()
})


