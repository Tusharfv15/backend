export const createUserValidationSchema = {
    userName:{
        isLength:{
            options:{
                min:5,
                max:32
            },
            errorMessage:'Username must be atleast 5-32 characters'
        },
        notEmpty:{
            
            errorMessage:'Username is required'
        },
        isString:{
            errorMessage:'Username must be a string'
        }
    },

    displayName:{
        notEmpty:{
            errorMessage:'displayName cannot be empty'
        }
    }
}