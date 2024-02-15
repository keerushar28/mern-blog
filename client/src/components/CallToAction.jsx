import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 
    justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Join Us
            </h2>
            <p className='text-gray-500 my-2'>
            
    🚀  We are coming soon to Google Play Store and the App Store! 
📲 Stay tuned for an enhanced mobile experience! 🌟 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="/about" target='_blank' rel='noopener noreferrer'>
                    Kiran's Blog
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
        < img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*xqT83bMEz92IBYxS9UQNow.png"/>
        <img src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*nZu0dsnlCQltPT1QMCHFAA.png"/>
    </div>
    </div>


  )
}