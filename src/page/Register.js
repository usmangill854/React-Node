import React,{useState,useEffect} from 'react'
import FormInput from '../components/FormInput'
import { useAppContext } from '../context/app.Context'
import { useNavigate } from 'react-router-dom'
const initialState = {
    name:'',
    email:'',
    password: '',
    isMember:true
}

const Register = () => {

    const [values,setValues] = useState(initialState)
    const {registerUser,user} = useAppContext
    const navigate = useNavigate()
    const handleChange= (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        const{name,email,password,isMember} = values
        if(!email || !password || (!isMember && !name)){
            console.log(values)
        }
        const currentUser = {name,email,password}
        if(isMember){
            console.log('already member')
        }else{
            registerUser(currentUser)
        }

    }

    const toggleMember = () =>{
        setValues({...values,isMember:!values.isMember})
    }

useEffect(()=> {
    if(user){
        setTimeout(() => {
            navigate('/')
        },3000)
    }
} ,[user,navigate])

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <h1>{values.isMember?'Login':'Register'}</h1>
                {!values.isMember &&(    <FormInput
                type='text'
                value={values.name}
                name='name'
                handleChange={handleChange}
                />
                )
                
                }
                <br/>

                <FormInput
                type='email'
                value={values.email}
                name='email'
                handleChange={handleChange}
                /><br/>
                
              <FormInput
                type='password'
                value={values.password}
                name='password'
                handleChange={handleChange}
                />

                <button type='submit' >Submit</button>
                <p>
                    {!values.isMember?'Already a member':'Not a member?'}
                    <button type='button' onClick={toggleMember} >{!values.isMember? 'Login' : 'Register'}</button>
                </p>
            </form>
        </div>
    )
}

export default Register