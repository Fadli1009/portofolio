import React from "react";
import emailjs from "emailjs-com";
import Header from "./Header";
import swal from 'sweetalert';
import { useState } from "react";

const Contact = ({ judulContact }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const sendEmail = (e) => {
        try {
            e.preventDefault();

            emailjs.sendForm('service_owtvqys', 'template_uust5q1', e.target, 'c225iunQLmE4hqJzK')
                .then((result) => {
                    swal({
                        title: "Berhasil!",
                        text: "Email anda berhasil terkirim",
                        icon: "success",
                    });
                }, (error) => {
                    swal({
                        title: "Gagal!",
                        text: "Gagal Mengirim Email, coba lagi",
                        icon: "error",
                    });
                });

            e.target.reset(); // Reset form setelah email dikirim
            setName('')
            setMessage('')
            setEmail('')
        } catch (error) {
            swal({
                text: "Harap seluruh pesan diisi",
                icon: "warning",
            });
        }
    };

    return (
        <>
            <Header judulContact={judulContact} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 text-center text-white">
                <div>
                    <form onSubmit={sendEmail} className="border p-4 rounded-lg">
                        <div className="flex flex-col text-left">
                            <label htmlFor="name">Nama</label>
                            <input type="text" name="name" className="bg-transparent border outline-none p-2" required onChange={(e) => setName(e.target.value)} placeholder="Masukan nama anda" />
                        </div>
                        <div className="flex flex-col text-left my-5">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="bg-transparent border outline-none p-2" required onChange={(e) => setEmail(e.target.value)} placeholder="Masukan email anda" />
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="message">Pesan</label>
                            <textarea name="message" className="bg-transparent border outline-none p-2" required onChange={(e) => setMessage(e.target.value)} placeholder="Masukan pesan anda" rows={10}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-yellow-400 w-full p-2 mt-3 text-black rounded-lg">Kirim</button>
                        </div>
                    </form>
                </div>
                <div className="text-left">
                    <div>
                        <h1 className="text-3xl lg:text-5xl">Get <span className="text-yellow-400">In Touch</span></h1>
                    </div>
                    <div>
                        <p>Hubungi saya jika ada yang bisa saya bantu</p>
                    </div>
                    <div>
                        <ul className="p-3">
                            <li className="flex items-center my-3">
                                <i className="fa-solid fa-location-dot text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Alamat saya</h1>
                                    <p>Jalan Kavling Hankam joglo nomor 12</p>
                                </div>
                            </li>
                            <li className="flex items-center my-3">
                                <i className="fa-brands fa-instagram text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Instagram saya</h1>
                                    <p><a href="https://instagram.com/fadlikurniawan109" target="_blank">@fadlikurniawan109</a></p>
                                </div>
                            </li>
                            <li className="flex items-center my-3">
                                <i className="fa-solid fa-envelope text-4xl mr-3 text-yellow-400"></i>
                                <div>
                                    <h1>Email saya</h1>
                                    <p>m.fadlikurniawan1009@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
