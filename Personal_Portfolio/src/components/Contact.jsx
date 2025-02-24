import React from 'react'
import linkedIn from '../assets/linkedIn1.png'
import WA from '../assets/WA.png'
import Lottie from 'lottie-react'
import contact from '../assets/NewContact.json'
import Swal from 'sweetalert2'



const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "00a22c40-b7c7-4daf-9e9f-dbc47dc0d9e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }


    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-yellow-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <div className='flex space-x-4'>
              <a href="https://www.linkedin.com/in/amna-khalid-612001273/" className='text-foreground/60 hover:text-foreground/80' target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="" className='h-9 w-10' /></a>
              <a href="https://wa.me/923006524627"
                target="_blank"
                rel="noopener noreferrer"
                className='text-foreground/60 hover:text-foreground/80'>
                <img src={WA} alt="" className='h-10 w-10' /></a>

            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form onSubmit={onSubmit}
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-yellow-300 shadow-lg shadow-yellow-500 p-10'>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input type="text" name='name' id='name' placeholder='Full Name' value={name} className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700' name='email'>Email</label>
              <input type="email" id='email' placeholder='Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea id='message' name='message' placeholder='Enter Your Message' className='mt-1 p-2 pb-16 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none' value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button className='bg-yellow-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
