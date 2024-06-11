"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    }
}

const item = {
    hidden: { scale: 0 },
    show: {
        scale: 1
    }
}

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const sendEmail = (params) => {

        const toastId = toast.loading("Sending your message, please wait...")


        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000,
                    }
                }
            )
            .then(
                () => {
                    toast.success("I have received your message, I will get back to you soon!", {
                        id: toastId
                    });
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    toast.error("There was an error sending your message, please try again later!", {
                        id: toastId
                    });
                },
            );
    };
    const onSubmit = (data) => {

        const templaeParams = {
            to_name: "The Artistry Glimpse",
            from_name: data.Name,
            reply_to: data.Email,
            message: data.Message,
        }

        sendEmail(templaeParams)
    };



    return (
        <>
            <Toaster richColors={true} />
            <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
            >
                <motion.input
                    variants={item}
                    type="text" placeholder="Name" {...register("Name", {
                        required: "This field is required!",
                        minLength: {
                            value: 4,
                            message: "Name should be of minimum 4 characters"
                        },
                        maxLength: 80
                    })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
                }
                <motion.input
                    variants={item}
                    type="email" placeholder="Email" {...register("Email", { required: "This field is required!" })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>
                }
                <motion.textarea 
                variants={item}
                placeholder='Message' {...register("Message", {
                    required: "This field is required!",
                    maxLength: {
                        value: 500,
                        message: "message should be less than 500 characters",
                    },
                    minLength: {
                        value: 25,
                        message: "message should be more than 25 characters",
                    }
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
                />
                {
                    errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>
                }

                <motion.input type="submit"
                    variants={item}
                    value="Cast your message!"
                    className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
                />
            </motion.form>
        </>
    );
}   
