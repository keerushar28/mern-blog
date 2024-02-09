import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react'

export default function CreatePost() {
  return <div className='p-3 max-w-3xl mx-auto min-h-screen'>
    <h1 className='text-center text-3xl my-7 font-semibold'>
        Create a Post
    </h1>
    <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
<TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>
<Select>
    <option value="uncategorized">Select a category</option>
    <option value="first">First Sem</option>
    <option value="second">Second Sem</option>
    <option value="third">Third Sem</option>
    <option value="fourth">Fourth Sem</option>
    <option value="fifth">Fifth Sem</option>
    <option value="sixth">Sixth Sem</option>
    <option value="seventh">Seventh Sem</option>
    <option value="eight">Eighth Sem</option>
</Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput type='file' accept='allfiles/*' />
            <Button type='button' gradientDuoTone='purpleToPink' size='sm' outline>
                Upload File
            </Button>

        </div>
        <ReactQuill theme='snow' placeholder='Write Something' className='h-72 mb-12
        '
        required/>
        <Button type='submit' gradientDuoTone='purpleToBlue' >
            Publish
        </Button>
    </form>
  </div>

}
