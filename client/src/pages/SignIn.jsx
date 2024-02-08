import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

export default function SignIn() {
  // State to store form data
  const [formData, setFormData] = useState({});
  //loading error
  const [errorMessage, setErrorMessage]= useState(null);
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();

  // Handle changes in input fields and update state
  const handleChange = (e) => {
    // Use lowercase for consistency in state keys
    setFormData({ ...formData, [e.target.id.toLowerCase()]: e.target.value.trim() });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }
    try {
      //loading effect
      setLoading(true);
      setErrorMessage(null);
      // Make a POST request to the signup API
      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });


      // Parse the response data
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok)
      {
        navigate('/');
      }

      
    } catch (error) {
      // Handle errors
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
          <Link
            to='/'
            className='font-bold dark:text-white text-4xl'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Kiran's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5 font-bold'>
           Login with your Email and Password
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value='Your Email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email' // Use lowercase for consistency
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput
                type='password'
                placeholder='*********'
                id='password' // Use lowercase for consistency
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading....</span>
                  </>
                ) : 'Sign In'

                }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
