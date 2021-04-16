import * as Yup from 'yup';

const subscribe = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Campo nome deve ter pelo menos 3 caracteres')
    .max(40, 'Campo nome a atingiu o limite de 40 caracteres')
    .required('Campo nome é obrigatório'),
  email: Yup.string()
    .email('Digite um E-mail valido')
    .required('Campo E-mail é obrigatório'),
  acceptTerms: Yup.boolean().isTrue(
    'Você precisa concordar para concluir sua inscrição'
  ),
});

export default subscribe;
