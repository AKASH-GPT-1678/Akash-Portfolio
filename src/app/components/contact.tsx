import React from 'react';

const ContactDisplay = () => {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const data = {
            subject: formData.subject,
            message: `Hii my name is ${formData.name} and my email is ${formData.email} and my message is ${formData.message}`
        }
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.log(error)


        }

    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-8 mt-6'>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl text-white font-bold'>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        className='p-3 md:w-[500px] border-2 border-gray-50 placeholder:text-white mt-2 text-white'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl text-white font-bold'>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Enter your email'
                        className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2 text-white'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl text-white font-bold'>Subject</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder='Enter your subject'
                        maxLength={24}
                        className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2 text-white'
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-2xl text-white font-bold'>Message</label>
                    <input
                        type="text"
                        name="message"
                        placeholder='Enter your message'
                        className='p-3 md:w-[500px] border-2 border-white placeholder:text-white mt-2 text-white'
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button
                    className='bg-purple-600 text-white font-bold p-3 cursor-pointer'
                    onClick={handleSubmit}
                >
                    Send a message
                </button>

            </div>
        </div>
    );
};

export default ContactDisplay;
