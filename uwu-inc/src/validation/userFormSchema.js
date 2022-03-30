import * as yup from "yup";
// fname, lname, email, password, terms

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required("how will we keep track of your data without a name?")
    ,
    lname: yup
        .string()
        .trim()
        .required("we need a last name too :)")
    ,
    email: yup
        .string()
        .email("please give a valid email")
        .required("how will you log in without an email?")
    ,
    password: yup
        .string()
        .trim()
        .required()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "password needs: at least 8 characters with: one uppercase, one lowercase, one number and one special character"
          )
    ,
   confirm: yup
            .string()
            .required("errors are inevitable, please confirm your password")
            .oneOf([yup.ref("password"), null], "passwords must match")
    ,
    terms: yup
            .bool()
            .oneOf( [true], "you must accept :)" )
        
        
})

export default formSchema;