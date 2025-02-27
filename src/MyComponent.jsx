import { useState } from 'react';
function MyComponent()
{
    const [name, setName] = useState("User");
    const [age, setAge] = useState(0);
    const [isEmployed, SetIsEmployed] = useState(false);


    const updateName = () =>
    {
        setName("Roman");
    }

    const UpdateAge = () =>
    {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () =>
    {
        SetIsEmployed(!isEmployed);
    }

    return (
        <>
            <div className="flex justify-center">
                <div className=' text-center m-4 border rounded-3xl p-4 w-60 bg-rose-600'>
                    <p className='font-bold m-4'>Name: {name}</p>
                    <button onClick={updateName} className='bg-blue-600 p-2 mt-5 mb-4 rounded-2xl text-white hover:bg-blue-800 border border-amber-50'>Set Name</button>
                </div>

                <div className=' text-center m-4 border rounded-3xl p-4 w-60 bg-rose-600'>
                    <p className='font-bold m-4'>Age: {age}</p>
                    <button onClick={UpdateAge} className='bg-blue-600 p-2 mt-5 mb-4 rounded-2xl text-white hover:bg-blue-800 border border-amber-50'>Increase Age</button>
                </div>
                
                <div className=' text-center m-4 border rounded-3xl p-4 w-60 bg-rose-600'>
                    <p className='font-bold m-4'>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                    <button onClick={toggleEmployedStatus} className='bg-blue-600 p-2 mt-5 mb-4 rounded-2xl text-white hover:bg-blue-800 border border-amber-50'>Toggle Status</button>
                </div>
            </div>
        </>
    )
}

export default MyComponent
