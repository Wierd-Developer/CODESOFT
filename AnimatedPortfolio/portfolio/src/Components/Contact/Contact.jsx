import React, { useRef, useState } from 'react'
import './Contact.scss'
import { animate, motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    // const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)
    const ref = useRef()
    const form = useRef()
    const isView = useInView(ref, { margin: "-100px" })
    const variant = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_scxmurh', 'template_s0n64cs', form.current, {
                publicKey: 'twDF8J8D3OY_whxnm',
            })
            .then(
                () => {
                    // setSuccess(true);
                    const formReset = document.getElementById("formReset")
                    formReset.reset()
                    toast.success('Message sent', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        // transition: Bounce,
                    });
                    // console.log('SUCCESS!');
                },
                (error) => {
                    // setError(true)
                    toast.warn('Something went wrong', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        // transition: Bounce,
                    });
                    // console.log('FAILED...', error.text);
                },

            );

    };
    return (
        <motion.div ref={ref} className="contact" variants={variant} initial="initial" whileInView="animate">
            <motion.div className="wrapper" variants={variant}>
                <motion.div className="text-container" variants={variant}>
                    <h1>Let's work together</h1>
                    <h4>Mail</h4>
                    <p>satpalcoder@gmail.com</p>
                    <h4>Address</h4>
                    <p>JSR-831001</p>
                    <h4>Phone</h4>
                    <p>+917991147043</p>
                </motion.div>
                <motion.div className="form-container" >
                    <motion.div className="svg-container" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 2, duration: 1 }} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="450px"
                            height="380px"
                            viewBox="0 0 32.666 32.666"
                            fill="none"
                            // stroke="#000000"
                            stroke-width={0.2}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={isView && { pathLength: 1 }}
                                transition={{ duration: 2 }}
                                d="M14.05 6A5 5 0 0118 10m-3.95-8a9 9 0 018 7.94m0 7v3a2 2 0 01-2 2h-.19a19.79 19.79 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.82 19.82 0 01-3.11-8.69A2 2 0 013.93 2h3.18a2 2 0 012 1.72 13 13 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 13 13 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                    </motion.div>
                    <motion.form id='formReset' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3, duration: 1 }} ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Name' name='name' />
                        <input type="email" placeholder='Email' name='email' />
                        <textarea rows={8} type="text" placeholder='Message' name='message' />
                        <button>Submit</button>
                        <ToastContainer

                        />
                        {/* {error && "Error"}
                        {success && "Success"} */}
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Contact