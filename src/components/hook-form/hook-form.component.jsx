import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name='name' {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input type='email' name='email' {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type='password' name='password' {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
